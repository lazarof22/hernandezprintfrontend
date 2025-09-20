import { Box, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import AddBoxIcon from '@mui/icons-material/AddBox';
import EditSquareIcon from '@mui/icons-material/EditSquare';
import DeleteIcon from '@mui/icons-material/Delete';

export default function NavListDrawer() {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

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
              <AddBoxIcon sx={{
                fill: hoveredId === 1 ? 'white' : 'url(#buttonGradient)',
                transition: 'fill 0.3s ease'
              }} />
            </ListItemIcon>
            <ListItemText
              primary="Añadir"
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
              <EditSquareIcon sx={{
                fill: hoveredId === 8 ? 'white' : 'url(#buttonGradient)',
                transition: 'fill 0.3s ease'
              }} />
            </ListItemIcon>
            <ListItemText
              primary="Modificar"
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
              <DeleteIcon sx={{
                fill: hoveredId === 9 ? 'white' : 'url(#buttonGradient)',
                transition: 'fill 0.3s ease'
              }} />
            </ListItemIcon>
            <ListItemText
              primary="Eliminar"
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
        </List>
      </nav>
    </Box>
  );
}