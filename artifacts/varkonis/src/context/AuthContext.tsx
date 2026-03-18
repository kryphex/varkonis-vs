import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type UserRole = "unpaid" | "paid" | "admin";

export interface User {
  id: string;
  email: string;
  name: string;
  firm?: string;
  role: UserRole;
  plan: "starter" | "growth" | "scale";
  createdAt: string;
}

interface StoredEntry {
  password: string;
  user: User;
}

interface AuthContextValue {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signup: (name: string, email: string, password: string, firm?: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  getAllUsers: () => User[];
  updateUserRole: (userId: string, role: UserRole) => void;
  updateUserPlan: (userId: string, plan: User["plan"]) => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

const STORAGE_KEY = "varkonis_user";
const USERS_KEY = "varkonis_users";

const SEED_ADMIN: StoredEntry = {
  password: "Admin@123",
  user: {
    id: "seed-admin-001",
    email: "admin@varkonis.com",
    name: "Platform Admin",
    firm: "VARKONIS Inc.",
    role: "admin",
    plan: "scale",
    createdAt: "2024-01-01T00:00:00.000Z",
  },
};

const SEED_PAID: StoredEntry = {
  password: "Paid@123",
  user: {
    id: "seed-paid-001",
    email: "demo@hedgefund.com",
    name: "Jordan Aldgate",
    firm: "Aldgate Capital Partners",
    role: "paid",
    plan: "growth",
    createdAt: "2024-03-15T09:30:00.000Z",
  },
};

function getUsers(): Record<string, StoredEntry> {
  try {
    const stored = JSON.parse(localStorage.getItem(USERS_KEY) || "{}") as Record<string, StoredEntry>;
    // Always ensure seed accounts exist
    if (!stored[SEED_ADMIN.user.email]) stored[SEED_ADMIN.user.email] = SEED_ADMIN;
    if (!stored[SEED_PAID.user.email]) stored[SEED_PAID.user.email] = SEED_PAID;
    return stored;
  } catch {
    return {
      [SEED_ADMIN.user.email]: SEED_ADMIN,
      [SEED_PAID.user.email]: SEED_PAID,
    };
  }
}

function saveUsers(users: Record<string, StoredEntry>) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Ensure seed users exist on first load
  useEffect(() => {
    const users = getUsers();
    saveUsers(users);
  }, []);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as User;
        // Re-read from users store in case role was updated
        const users = getUsers();
        const entry = users[parsed.email];
        if (entry) {
          setUser(entry.user);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(entry.user));
        } else {
          setUser(parsed);
        }
      }
    } catch {
      // ignore
    }
    setIsLoading(false);
  }, []);

  async function login(email: string, password: string) {
    await new Promise((r) => setTimeout(r, 600));
    const users = getUsers();
    const entry = users[email.toLowerCase()];
    if (!entry) return { success: false, error: "No account found with that email." };
    if (entry.password !== password) return { success: false, error: "Incorrect password." };
    setUser(entry.user);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entry.user));
    return { success: true };
  }

  async function signup(name: string, email: string, password: string, firm?: string) {
    await new Promise((r) => setTimeout(r, 700));
    const users = getUsers();
    if (users[email.toLowerCase()]) {
      return { success: false, error: "An account with this email already exists." };
    }
    const newUser: User = {
      id: crypto.randomUUID(),
      email: email.toLowerCase(),
      name,
      firm,
      role: "unpaid",
      plan: "starter",
      createdAt: new Date().toISOString(),
    };
    users[email.toLowerCase()] = { password, user: newUser };
    saveUsers(users);
    setUser(newUser);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
    return { success: true };
  }

  function logout() {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  }

  function getAllUsers(): User[] {
    const users = getUsers();
    return Object.values(users).map((e) => e.user);
  }

  function updateUserRole(userId: string, role: UserRole) {
    const users = getUsers();
    for (const key of Object.keys(users)) {
      if (users[key].user.id === userId) {
        users[key].user.role = role;
        if (role === "paid" && users[key].user.plan === "starter") {
          users[key].user.plan = "growth";
        }
        if (role === "admin") {
          users[key].user.plan = "scale";
        }
        saveUsers(users);
        // Refresh current session if it's the logged-in user
        if (user?.id === userId) {
          setUser({ ...users[key].user });
          localStorage.setItem(STORAGE_KEY, JSON.stringify(users[key].user));
        }
        return;
      }
    }
  }

  function updateUserPlan(userId: string, plan: User["plan"]) {
    const users = getUsers();
    for (const key of Object.keys(users)) {
      if (users[key].user.id === userId) {
        users[key].user.plan = plan;
        saveUsers(users);
        if (user?.id === userId) {
          setUser({ ...users[key].user });
          localStorage.setItem(STORAGE_KEY, JSON.stringify(users[key].user));
        }
        return;
      }
    }
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout, getAllUsers, updateUserRole, updateUserPlan }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
