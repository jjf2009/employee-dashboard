import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@/components/theme/ThemeProvider'
import { AppRoutes } from '@/routes'

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="pulsehr-theme">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App