import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NavigatorApp } from './NaviApp'
import '@/main.css'



createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <NavigatorApp />
    </StrictMode>,
)

