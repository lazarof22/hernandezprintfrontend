import { Box, Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import PrintIcon from '@mui/icons-material/Print';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MovieIcon from '@mui/icons-material/Movie';
import ExplicitIcon from '@mui/icons-material/Explicit';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import MotionPhotosAutoIcon from '@mui/icons-material/MotionPhotosAuto';
import StyleIcon from '@mui/icons-material/Style';
import PersonIcon from '@mui/icons-material/Person';

export default function NavListDrawer() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleClick = () => { setOpen(!open); };
  const handleMouseEnter = (id: number): void => { setHoveredId(id); };
  const handleMouseLeave = (): void => { setHoveredId(null); };

  return (
    <Box sx={{ width: 250, height: '100%', bgcolor: "grey.900" }}>
      {/* Definición global del gradiente para SVG */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="buttonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff8a00" />
            <stop offset="100%" stopColor="#e52e71" />
          </linearGradient>
        </defs>
      </svg>

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
          p:"20px 10px 10px 30px",
          borderRadius: "4px",
          '&:hover': {
            transform: "scale(1.02)",
            transition: "all 0.3s ease"
          }
        }}
      >
        MegaPelis
      </Typography>

      <nav>
        <List>
          {/* Botón Inicio */}
          <ListItemButton
            onClick={() => navigate('/')}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
            sx={{
              borderRadius: 2,
              boxShadow: 3,
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              "&:active": {
                "& .MuiListItemIcon-root svg": {
                  color: "red !important",
                },
                "& .MuiTypography-root": {
                  color: "red !important",
                }
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                width: hoveredId === 1 ? '100%' : '0%',
                height: '100%',
                background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
                transition: 'width 0.5s ease',
                zIndex: 0,
              },
              '&:hover': {
                transform: 'translateX(-1px)',
                borderRadius: 2,
                boxShadow: 3,
              }
            }}
          >
            <ListItemIcon sx={{ position: 'relative', zIndex: 1 }}>
              <HomeIcon sx={{
                fill: hoveredId === 1 ? 'white' : 'url(#buttonGradient)',
                transition: 'fill 0.3s ease'
              }} />
            </ListItemIcon>
            <ListItemText
              primary="Inicio"
              primaryTypographyProps={{
                sx: {
                  position: 'relative',
                  zIndex: 1,
                  background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  ...(hoveredId === 1 && {
                    color: 'white !important',
                    WebkitBackgroundClip: 'unset',
                    backgroundClip: 'unset',
                    background: 'transparent'
                  })
                }
              }}
            />
          </ListItemButton>

          {/* Botón Catalogo */}
          <ListItemButton
            onClick={handleClick}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
            sx={{
              borderRadius: 2,
              boxShadow: 3,
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              "&:active": {
                "& .MuiListItemIcon-root svg": {
                  color: "red !important",
                },
                "& .MuiTypography-root": {
                  color: "red !important",
                }
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                width: hoveredId === 2 ? '100%' : '0%',
                height: '100%',
                background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
                transition: 'width 0.5s ease',
                zIndex: 0,
              },
              '&:hover': {
                transform: 'translateX(-1px)',
                borderRadius: 2,
                boxShadow: 3,
              }
            }}
          >
            <ListItemIcon sx={{ position: 'relative', zIndex: 1 }}>
              <StyleIcon sx={{
                fill: hoveredId === 2 ? 'white' : 'url(#buttonGradient)',
                transition: 'fill 0.3s ease'
              }} />
            </ListItemIcon>
            <ListItemText
              primary="Catalogo"
              primaryTypographyProps={{
                sx: {
                  position: 'relative',
                  zIndex: 1,
                  background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  ...(hoveredId === 2 && {
                    color: 'white !important',
                    WebkitBackgroundClip: 'unset',
                    backgroundClip: 'unset',
                    background: 'transparent'
                  })
                }
              }}
            />
          </ListItemButton>

          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* Estrenos */}
              <ListItemButton
                onClick={() => navigate('/premierepage')}
                onMouseEnter={() => handleMouseEnter(3)}
                onMouseLeave={handleMouseLeave}
                sx={{
                  pl: 4,
                  borderRadius: 2,
                  boxShadow: 3,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  "&:active": {
                    "& .MuiListItemIcon-root svg": {
                      color: "red !important",
                    },
                    "& .MuiTypography-root": {
                      color: "red !important",
                    }
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: hoveredId === 3 ? '100%' : '0%',
                    height: '100%',
                    background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
                    transition: 'width 0.5s ease',
                    zIndex: 0,
                  },
                  '&:hover': {
                    transform: 'translateX(-1px)',
                    borderRadius: 2,
                    boxShadow: 3,
                  }
                }}>
                <ListItemIcon sx={{ position: 'relative', zIndex: 1 }}>
                  <ExplicitIcon sx={{
                    fill: hoveredId === 3 ? 'white' : 'url(#buttonGradient)',
                    transition: 'fill 0.3s ease'
                  }} />
                </ListItemIcon>
                <ListItemText
                  primary="Estrenos"
                  primaryTypographyProps={{
                    sx: {
                      position: 'relative',
                      zIndex: 1,
                      background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent',
                      fontWeight: 'bold',
                      transition: 'all 0.3s ease',
                      ...(hoveredId === 3 && {
                        color: 'white !important',
                        WebkitBackgroundClip: 'unset',
                        backgroundClip: 'unset',
                        background: 'transparent'
                      })
                    }
                  }}
                />
              </ListItemButton>

              {/* Películas */}
              <ListItemButton
                onClick={() => navigate('/moviepage')}
                onMouseEnter={() => handleMouseEnter(4)}
                onMouseLeave={handleMouseLeave}
                sx={{
                  pl: 4,
                  borderRadius: 2,
                  boxShadow: 3,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  "&:active": {
                    "& .MuiListItemIcon-root svg": {
                      color: "red !important",
                    },
                    "& .MuiTypography-root": {
                      color: "red !important",
                    }
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: hoveredId === 4 ? '100%' : '0%',
                    height: '100%',
                    background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
                    transition: 'width 0.5s ease',
                    zIndex: 0,
                  },
                  '&:hover': {
                    transform: 'translateX(-1px)',
                    borderRadius: 2,
                    boxShadow: 3,
                  }
                }}>
                <ListItemIcon sx={{ position: 'relative', zIndex: 1 }}>
                  <MovieIcon sx={{
                    fill: hoveredId === 4 ? 'white' : 'url(#buttonGradient)',
                    transition: 'fill 0.3s ease'
                  }} />
                </ListItemIcon>
                <ListItemText
                  primary="Peliculas"
                  primaryTypographyProps={{
                    sx: {
                      position: 'relative',
                      zIndex: 1,
                      background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent',
                      fontWeight: 'bold',
                      transition: 'all 0.3s ease',
                      ...(hoveredId === 4 && {
                        color: 'white !important',
                        WebkitBackgroundClip: 'unset',
                        backgroundClip: 'unset',
                        background: 'transparent'
                      })
                    }
                  }}
                />
              </ListItemButton>

              {/* Series */}
              <ListItemButton
                onClick={() => navigate('/seriespage')}
                onMouseEnter={() => handleMouseEnter(5)}
                onMouseLeave={handleMouseLeave}
                sx={{
                  pl: 4,
                  borderRadius: 2,
                  boxShadow: 3,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  "&:active": {
                    "& .MuiListItemIcon-root svg": {
                      color: "red !important",
                    },
                    "& .MuiTypography-root": {
                      color: "red !important",
                    }
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: hoveredId === 5 ? '100%' : '0%',
                    height: '100%',
                    background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
                    transition: 'width 0.5s ease',
                    zIndex: 0,
                  },
                  '&:hover': {
                    transform: 'translateX(-1px)',
                    borderRadius: 2,
                    boxShadow: 3,
                  }
                }}>
                <ListItemIcon sx={{ position: 'relative', zIndex: 1 }}>
                  <LiveTvIcon sx={{
                    fill: hoveredId === 5 ? 'white' : 'url(#buttonGradient)',
                    transition: 'fill 0.3s ease'
                  }} />
                </ListItemIcon>
                <ListItemText
                  primary="Series"
                  primaryTypographyProps={{
                    sx: {
                      position: 'relative',
                      zIndex: 1,
                      background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent',
                      fontWeight: 'bold',
                      transition: 'all 0.3s ease',
                      ...(hoveredId === 5 && {
                        color: 'white !important',
                        WebkitBackgroundClip: 'unset',
                        backgroundClip: 'unset',
                        background: 'transparent'
                      })
                    }
                  }}
                />
              </ListItemButton>

              {/* Animes */}
              <ListItemButton
                onClick={() => navigate('/animepage')}
                onMouseEnter={() => handleMouseEnter(6)}
                onMouseLeave={handleMouseLeave}
                sx={{
                  pl: 4,
                  borderRadius: 2,
                  boxShadow: 3,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  "&:active": {
                    "& .MuiListItemIcon-root svg": {
                      color: "red !important",
                    },
                    "& .MuiTypography-root": {
                      color: "red !important",
                    }
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: hoveredId === 6 ? '100%' : '0%',
                    height: '100%',
                    background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
                    transition: 'width 0.5s ease',
                    zIndex: 0,
                  },
                  '&:hover': {
                    transform: 'translateX(-1px)',
                    borderRadius: 2,
                    boxShadow: 3,
                  }
                }}>
                <ListItemIcon sx={{ position: 'relative', zIndex: 1 }}>
                  <MotionPhotosAutoIcon sx={{
                    fill: hoveredId === 6 ? 'white' : 'url(#buttonGradient)',
                    transition: 'fill 0.3s ease'
                  }} />
                </ListItemIcon>
                <ListItemText
                  primary="Animes"
                  primaryTypographyProps={{
                    sx: {
                      position: 'relative',
                      zIndex: 1,
                      background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent',
                      fontWeight: 'bold',
                      transition: 'all 0.3s ease',
                      ...(hoveredId === 6 && {
                        color: 'white !important',
                        WebkitBackgroundClip: 'unset',
                        backgroundClip: 'unset',
                        background: 'transparent'
                      })
                    }
                  }}
                />
              </ListItemButton>

              {/* Sagas */}
              <ListItemButton
                onClick={() => navigate('/sagaspage')}
                onMouseEnter={() => handleMouseEnter(7)}
                onMouseLeave={handleMouseLeave}
                sx={{
                  pl: 4,
                  borderRadius: 2,
                  boxShadow: 3,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  "&:active": {
                    "& .MuiListItemIcon-root svg": {
                      color: "red !important",
                    },
                    "& .MuiTypography-root": {
                      color: "red !important",
                    }
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: hoveredId === 7 ? '100%' : '0%',
                    height: '100%',
                    background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
                    transition: 'width 0.5s ease',
                    zIndex: 0,
                  },
                  '&:hover': {
                    transform: 'translateX(-1px)',
                    borderRadius: 2,
                    boxShadow: 3,
                  }
                }}>
                <ListItemIcon sx={{ position: 'relative', zIndex: 1 }}>
                  <VideoLibraryIcon sx={{
                    fill: hoveredId === 7 ? 'white' : 'url(#buttonGradient)',
                    transition: 'fill 0.3s ease'
                  }} />
                </ListItemIcon>
                <ListItemText
                  primary="Sagas"
                  primaryTypographyProps={{
                    sx: {
                      position: 'relative',
                      zIndex: 1,
                      background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent',
                      fontWeight: 'bold',
                      transition: 'all 0.3s ease',
                      ...(hoveredId === 7 && {
                        color: 'white !important',
                        WebkitBackgroundClip: 'unset',
                        backgroundClip: 'unset',
                        background: 'transparent'
                      })
                    }
                  }}
                />
              </ListItemButton>
            </List>
          </Collapse>

          {/* Impresiones */}
          <ListItemButton
            onClick={() => navigate('/printpage')}
            onMouseEnter={() => handleMouseEnter(8)}
            onMouseLeave={handleMouseLeave}
            sx={{
              borderRadius: 2,
              boxShadow: 3,
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              "&:active": {
                "& .MuiListItemIcon-root svg": {
                  color: "red !important",
                },
                "& .MuiTypography-root": {
                  color: "red !important",
                }
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                width: hoveredId === 8 ? '100%' : '0%',
                height: '100%',
                background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
                transition: 'width 0.5s ease',
                zIndex: 0,
              },
              '&:hover': {
                transform: 'translateX(-1px)',
                borderRadius: 2,
                boxShadow: 3,
              }
            }}
          >
            <ListItemIcon sx={{ position: 'relative', zIndex: 1 }}>
              <PrintIcon sx={{
                fill: hoveredId === 8 ? 'white' : 'url(#buttonGradient)',
                transition: 'fill 0.3s ease'
              }} />
            </ListItemIcon>
            <ListItemText
              primary="Impresiones"
              primaryTypographyProps={{
                sx: {
                  position: 'relative',
                  zIndex: 1,
                  background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  ...(hoveredId === 8 && {
                    color: 'white !important',
                    WebkitBackgroundClip: 'unset',
                    backgroundClip: 'unset',
                    background: 'transparent'
                  })
                }
              }}
            />
          </ListItemButton>

          {/* Tienda */}
          <ListItemButton
            onClick={() => navigate('/shoppage')}
            onMouseEnter={() => handleMouseEnter(9)}
            onMouseLeave={handleMouseLeave}
            sx={{
              borderRadius: 2,
              boxShadow: 3,
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              "&:active": {
                "& .MuiListItemIcon-root svg": {
                  color: "red !important",
                },
                "& .MuiTypography-root": {
                  color: "red !important",
                }
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                width: hoveredId === 9 ? '100%' : '0%',
                height: '100%',
                background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
                transition: 'width 0.5s ease',
                zIndex: 0,
              },
              '&:hover': {
                transform: 'translateX(-1px)',
                borderRadius: 2,
                boxShadow: 3,
              }
            }}
          >
            <ListItemIcon sx={{ position: 'relative', zIndex: 1 }}>
              <ShoppingCartIcon sx={{
                fill: hoveredId === 9 ? 'white' : 'url(#buttonGradient)',
                transition: 'fill 0.3s ease'
              }} />
            </ListItemIcon>
            <ListItemText
              primary="Tienda"
              primaryTypographyProps={{
                sx: {
                  position: 'relative',
                  zIndex: 1,
                  background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  ...(hoveredId === 9 && {
                    color: 'white !important',
                    WebkitBackgroundClip: 'unset',
                    backgroundClip: 'unset',
                    background: 'transparent'
                  })
                }
              }}
            />
          </ListItemButton>

          {/* Iniciar Sesión */}
          <ListItemButton
            onClick={() => navigate('/loginpage')}
            onMouseEnter={() => handleMouseEnter(10)}
            onMouseLeave={handleMouseLeave}
            sx={{
              borderRadius: 2,
              boxShadow: 3,
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              "&:active": {
                "& .MuiListItemIcon-root svg": {
                  color: "red !important",
                },
                "& .MuiTypography-root": {
                  color: "red !important",
                }
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                width: hoveredId === 10 ? '100%' : '0%',
                height: '100%',
                background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
                transition: 'width 0.5s ease',
                zIndex: 0,
              },
              '&:hover': {
                transform: 'translateX(-1px)',
                borderRadius: 2,
                boxShadow: 3,
              }
            }}
          >
            <ListItemIcon sx={{ position: 'relative', zIndex: 1 }}>
              <PersonIcon sx={{
                fill: hoveredId === 10 ? 'white' : 'url(#buttonGradient)',
                transition: 'fill 0.3s ease'
              }} />
            </ListItemIcon>
            <ListItemText
              primary="Iniciar Sesion"
              primaryTypographyProps={{
                sx: {
                  position: 'relative',
                  zIndex: 1,
                  background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  ...(hoveredId === 10 && {
                    color: 'white !important',
                    WebkitBackgroundClip: 'unset',
                    backgroundClip: 'unset',
                    background: 'transparent'
                  })
                }
              }}
            />
          </ListItemButton>
        </List>
      </nav>
    </Box>
  );
}