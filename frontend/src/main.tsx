import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource-variable/manrope/wght.css'
import '@fontsource/sora/latin.css'
import '@fontsource/space-grotesk/latin.css'
import '@fontsource/plus-jakarta-sans/latin.css'
import './index.css'
import App from './App.tsx'

const validFontPresets = new Set(['default', 'sora', 'space', 'jakarta'])
const fontParam = new URLSearchParams(window.location.search).get('font')
const root = document.documentElement

if (fontParam && validFontPresets.has(fontParam)) {
  if (fontParam === 'default') {
    delete root.dataset.fontPreset
    window.localStorage.removeItem('fontPreset')
  } else {
    root.dataset.fontPreset = fontParam
    window.localStorage.setItem('fontPreset', fontParam)
  }
} else {
  // Sem ?font= na URL, o site usa sempre o default definido no CSS.
  delete root.dataset.fontPreset
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
