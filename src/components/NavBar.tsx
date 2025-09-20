import { AppBar, Box, Drawer, IconButton, Toolbar, Typography, Modal, TextField, Button, Paper, InputBase, Divider } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import LockIcon from '@mui/icons-material/Lock';
import MovieIcon from '@mui/icons-material/Movie';
import ExplicitIcon from '@mui/icons-material/Explicit';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import MotionPhotosAutoIcon from '@mui/icons-material/MotionPhotosAuto';
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const navigate = useNavigate();

  const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'grey.900',
    boxShadow: 24,
    p: 4,
    borderRadius: '16px',
    outline: 'none'
  };

  return (
    <>
      <Box>
        <AppBar position="static">
          <Toolbar sx={{
            bgcolor: "grey.900",
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                onClick={() => setOpenDrawer(true)}
                sx={{
                  ml: -1,
                  '&:hover': {
                    backgroundColor: 'transparent'
                  }
                }}
              >
                <Box
                  sx={{
                    width: 35,
                    height: 35,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    mask: 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'><path d=\'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\'/></svg>") center/contain no-repeat',
                  }}
                />
              </IconButton>

              <Typography
                variant="h4"
                sx={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontWeight: 700,
                  background: "linear-gradient(90deg, #ff8a00, #e52e71)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  letterSpacing: "0.05em",
                  display: "inline-block",
                  padding: "0.2em 0.5em",
                  borderRadius: "4px",
                  '&:hover': {
                    transform: "scale(1.02)",
                    transition: "all 0.3s ease"
                  }
                }}
              >
                MegaPelis
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <defs>
                  <linearGradient id="buttonGradient" x1="0" y1="0" x2="24" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ff8a00" />
                    <stop offset="1" stopColor="#e52e71" />
                  </linearGradient>
                </defs>
              </svg>
              <Button
                onClick={() => navigate('/premierepage')}
                variant="outlined"
                startIcon={<ExplicitIcon />}
                sx={{
                  fontWeight: 600,
                  fontSize: '1rem',
                  background: 'grey.900',
                  borderStyle: "hidden",
                  textTransform: 'none',
                  backgroundImage: 'linear-gradient(90deg, #ff8a00, #e52e71)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  boxShadow: 4,
                  '&:hover': {
                    background: 'grey.900',
                    boxShadow: '0 0 16px 0px #e52e71, 0 0 32px 0px #ff8a00, 0 0 0 8px transparent, 0 0 0 0px transparent',
                  },
                  '& .MuiSvgIcon-root': { // Aplicar gradiente también al icono
                    fill: 'url(#buttonGradient)'
                  }
                }}
              >
                Estrenos
              </Button>
              <Button
                onClick={() => navigate('/moviepage')}
                startIcon={<MovieIcon />}
                sx={{
                  fontWeight: 600,
                  fontSize: '1rem',
                  background: 'grey.900',
                  textTransform: 'none',
                  backgroundImage: 'linear-gradient(90deg, #ff8a00, #e52e71)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  boxShadow: 4,
                  '&:hover': {
                    background: 'grey.900',
                    boxShadow: '0 0 16px 0px #e52e71, 0 0 32px 0px #ff8a00, 0 0 0 8px transparent, 0 0 0 0px transparent',
                  },
                  '& .MuiSvgIcon-root': { // Aplicar gradiente también al icono
                    fill: 'url(#buttonGradient)'
                  }
                }}
              >
                Peliculas
              </Button>
              <Button
                onClick={() => navigate('/seriespage')}
                startIcon={<LiveTvIcon />}
                sx={{
                  fontWeight: 600,
                  fontSize: '1rem',
                  background: 'grey.900',
                  textTransform: 'none',
                  backgroundImage: 'linear-gradient(90deg, #ff8a00, #e52e71)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  boxShadow: 4,
                  '&:hover': {
                    background: 'grey.900',
                    boxShadow: '0 0 16px 0px #e52e71, 0 0 32px 0px #ff8a00, 0 0 0 8px transparent, 0 0 0 0px transparent',
                  },
                  '& .MuiSvgIcon-root': { // Aplicar gradiente también al icono
                    fill: 'url(#buttonGradient)'
                  }
                }}
              >
                Series
              </Button>
              <Button
                onClick={() => navigate('/animepage')}
                startIcon={<MotionPhotosAutoIcon />}
                sx={{
                  fontWeight: 600,
                  fontSize: '1rem',
                  background: 'grey.900',
                  textTransform: 'none',
                  backgroundImage: 'linear-gradient(90deg, #ff8a00, #e52e71)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  boxShadow: 4,
                  '&:hover': {
                    background: 'grey.900',
                    boxShadow: '0 0 16px 0px #e52e71, 0 0 32px 0px #ff8a00, 0 0 0 8px transparent, 0 0 0 0px transparent',
                  },
                  '& .MuiSvgIcon-root': { // Aplicar gradiente también al icono
                    fill: 'url(#buttonGradient)'
                  }
                }}
              >
                Animes
              </Button>
              <Button
                onClick={() => navigate('/sagaspage')}
                startIcon={<VideoLibraryIcon />}
                sx={{
                  fontWeight: 600,
                  fontSize: '1rem',
                  background: 'grey.900',
                  textTransform: 'none',
                  backgroundImage: 'linear-gradient(90deg, #ff8a00, #e52e71)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  boxShadow: 4,
                  '&:hover': {
                    background: 'grey.900',
                    boxShadow: '0 0 16px 0px #e52e71, 0 0 32px 0px #ff8a00, 0 0 0 8px transparent, 0 0 0 0px transparent',
                  },
                  '& .MuiSvgIcon-root': { // Aplicar gradiente también al icono
                    fill: 'url(#buttonGradient)'
                  }
                }}
              >
                Sagas
              </Button>
              {/* Botón de Login */}
              <Button
                onClick={() => navigate('/loginpage')}
                startIcon={<AccountCircleIcon />}
                sx={{
                  color: 'white',
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '1rem',
                  background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
                  boxShadow: 6,
                  '&:hover': {
                    background: 'linear-gradient(90deg, #e52e71, #ff8a00)',
                    boxShadow: '0 0 16px 0px #e52e71, 0 0 32px 0px #ff8a00, 0 0 0 8px transparent, 0 0 0 0px transparent',
                  }
                }}
              >
                Iniciar Sesión
              </Button>
            </Box>
          </Toolbar>
        </AppBar>

        <Drawer open={openDrawer} anchor="left" onClose={() => setOpenDrawer(false)}>
          <NavListDrawer />
        </Drawer>

        {/* Modal de Login */}
        <Modal
          open={openLogin}
          onClose={() => setOpenLogin(false)}
          aria-labelledby="modal-login-title"
        >
          <Box sx={styleModal}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 3
            }}>
              <Typography
                id="modal-login-title"
                variant="h5"
                component="h2"
                sx={{
                  background: "linear-gradient(90deg, #ff8a00, #e52e71)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  fontWeight: 700
                }}
              >
                Iniciar Sesión
              </Typography>
              <IconButton onClick={() => setOpenLogin(false)}>
                <CloseIcon />
              </IconButton>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2
              }}
            >
              <TextField
                fullWidth
                label="Usuario"
                placeholder="Usuario"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <AccountCircleIcon
                      sx={{
                        color: 'action.active',
                        mr: 1
                      }}
                    />
                  ),
                }}
              />

              <TextField
                fullWidth
                label="Contraseña"
                type="password"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <LockIcon
                      sx={{
                        color: 'action.active',
                        mr: 1
                      }}
                    />
                  ),
                }}
              />

              <Button
                fullWidth
                variant="contained"
                sx={{
                  mt: 2,
                  py: 1.5,
                  background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #e52e71, #ff8a00)',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                  }
                }}
              >
                Ingresar
              </Button>

              <Typography
                variant="body2"
                sx={{
                  textAlign: 'center',
                  mt: 2,
                  color: 'text.secondary'
                }}
              >
                ¿No tienes cuenta?{' '}
                <Box
                  component="span"
                  sx={{
                    color: '#e52e71',
                    fontWeight: 600,
                    cursor: 'pointer',
                    '&:hover': {
                      textDecoration: 'underline'
                    }
                  }}
                >
                  Regístrate
                </Box>
              </Typography>
            </Box>
          </Box>
        </Modal>
      </Box>
    </>
  );
}