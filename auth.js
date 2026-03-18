// VARKONIS Auth v2 — Supabase-powered, same API as before
// Usage: include this on every page, then call VAuth.initNav()

const SUPA_URL = 'https://neaqsrrgqjdwjdpocuul.supabase.co'
const SUPA_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lYXFzcnJncWpkd2pkcG9jdXVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM1ODE1MDIsImV4cCI6MjA4OTE1NzUwMn0.1YcWGKvhC-ywfBTemPN6i8jUMWCVS9zKAOmoJZhLnFc'

let _sb = null
async function getSB() {
  if (_sb) return _sb
  const { createClient } = await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm')
  _sb = createClient(SUPA_URL, SUPA_KEY)
  return _sb
}

// Handle cross-domain token in URL hash (from Vercel login redirect)
;(function(){
  const h = window.location.hash
  if (h && h.includes('access_token')) {
    const p = new URLSearchParams(h.replace('#',''))
    const at = p.get('access_token'), rt = p.get('refresh_token')
    if (at) {
      localStorage.setItem('sb-neaqsrrgqjdwjdpocuul-auth-token', JSON.stringify({
        access_token: at, refresh_token: rt||at, token_type:'bearer',
        expires_in: 3600, expires_at: Math.floor(Date.now()/1000)+3600
      }))
      window.history.replaceState({}, '', window.location.pathname)
    }
  }
})()

async function getSession() {
  const sb = await getSB()
  const { data: { session } } = await sb.auth.getSession()
  return session
}

async function getProfile(userId) {
  const sb = await getSB()
  const { data } = await sb.from('profiles').select('*').eq('id', userId).single()
  return data
}

async function getRole() {
  const session = await getSession()
  if (!session) return null
  const profile = await getProfile(session.user.id)
  return profile?.role || 'free'
}

async function requireAuth() {
  const session = await getSession()
  if (!session) { window.location.href = 'https://varkonis-auth.vercel.app/login'; return null }
  return session
}

async function requireAdmin() {
  const session = await requireAuth()
  if (!session) return null
  const role = await getRole()
  if (role !== 'admin') { window.location.href = 'app-dashboard.html'; return null }
  return session
}

async function signOut() {
  const sb = await getSB()
  await sb.auth.signOut()
  window.location.href = 'index.html'
}

function roleBadgeHTML(role) {
  if (role === 'admin') return '<span style="display:inline-flex;align-items:center;gap:3px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;padding:2px 8px;border-radius:100px;background:rgba(245,158,11,.15);color:#f59e0b;border:1px solid rgba(245,158,11,.2)">⬡ Admin</span>'
  if (role === 'paid')  return '<span style="display:inline-flex;align-items:center;gap:3px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;padding:2px 8px;border-radius:100px;background:rgba(79,110,247,.15);color:#7b94ff;border:1px solid rgba(79,110,247,.2)">★ Paid</span>'
  return '<span style="display:inline-flex;align-items:center;gap:3px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;padding:2px 8px;border-radius:100px;background:rgba(255,255,255,.05);color:rgba(255,255,255,.4);border:1px solid rgba(255,255,255,.1)">Free</span>'
}

async function initNav() {
  try {
    const session = await getSession()
    if (!session) return
    const profile = await getProfile(session.user.id)
    const role = profile?.role || 'free'
    const si = document.getElementById('nav-signin'), db = document.getElementById('nav-dashboard')
    const ms = document.getElementById('mob-signin'), md = document.getElementById('mob-dashboard')
    const na = document.getElementById('nav-admin')
    if (si) si.style.display = 'none'
    if (db) db.style.display = ''
    if (ms) ms.style.display = 'none'
    if (md) md.style.display = ''
    if (na && role === 'admin') na.style.display = ''
  } catch(e) {}
}

window.VAuth = { getSB, getSession, getProfile, getRole, requireAuth, requireAdmin, signOut, roleBadgeHTML, initNav }
document.addEventListener('DOMContentLoaded', () => VAuth.initNav())
