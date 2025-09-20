import { AppBar, Box, Drawer, IconButton, Toolbar, Typography, Button } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import MovieIcon from '@mui/icons-material/Movie';
import ExplicitIcon from '@mui/icons-material/Explicit';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import MotionPhotosAutoIcon from '@mui/icons-material/MotionPhotosAuto';
import { useNavigate } from "react-router-dom";
import AdminNavListDrawer from "./AdminNavListDrawer";

export default function AdminNavbar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();

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
            </Box>
          </Toolbar>
        </AppBar>

        <Drawer open={openDrawer} anchor="left" onClose={() => setOpenDrawer(false)}>
          <AdminNavListDrawer />
        </Drawer>
      </Box>
    </>
  );
}