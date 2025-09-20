import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    gradient: {
      primary: string;
      vertical: string;
    };
  }
  interface PaletteOptions {
    gradient?: {
      primary: string;
      vertical: string;
    };
  }
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff8a00',  // Naranja del gradiente
      light: '#ff9e33',  // Variante clara
      contrastText: '#000',
    },
    secondary: {
      main: '#e52e71',  // Rosa del gradiente
      light: '#ea5a8a',  // Variante clara
      contrastText: '#fff',
    },
    background: {
      default: 'rgba(0,0,0,0.93)',  // Mantenemos tu fondo oscuro
      paper: 'rgba(43,43,43,0)',     // Transparencia conservada
    },
    text: {
      primary: '#fff',  // Blanco para legibilidad (el gradiente se aplicará en componentes específicos)
      secondary: 'rgba(255,255,255,0.7)',
    },
    divider: 'rgba(255,138,0,0.5)',  // Divisor semitransparente naranja
    gradient: {  // Añadimos objeto personalizado para el gradiente
      primary: 'linear-gradient(90deg, #ff8a00, #e52e71)',
      vertical: 'linear-gradient(180deg, #ff8a00, #e52e71)',
    }
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          display: 'inline-block'
        },
        h2: {
          background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          display: 'inline-block'
        }
      }
    }
  }
});


createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
