import { Box, Typography, TextField, Button, Paper, InputAdornment, FormControl, InputLabel, Select, MenuItem, Card, CardActions, Container, ListItemIcon, ListItemText, } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import MovieIcon from '@mui/icons-material/Movie';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LanguageIcon from '@mui/icons-material/Language';
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import DescriptionIcon from '@mui/icons-material/Description';
import React from "react";

export default function AddCardAudioVisual() {
  const [audiovisual,setAudiovisual]=React.useState('');
  const [titulo, setTitulo] = React.useState<string>('');
  const [imagen, setImagen] = React.useState<string>('');
  const [año, setAño] = React.useState<number>(new Date().getFullYear());
  const [duracion, setDuracion] = React.useState<number>(0);
  const [pais, setPais] = React.useState<string>('');
  const [director, setDirector] = React.useState<string>('');
  const [genero, setGenero] = React.useState<string>('');
  const [sinopsis, setSinopsis] = React.useState<string>('');

   // Lista de géneros cinematográficos
  const generos = [
    'Acción',
    'Aventura',
    'Comedia',
    'Drama',
    'Terror',
    'Ciencia Ficción',
    'Fantasía',
    'Romance',
    'Thriller',
    'Documental',
    'Animación',
    'Musical'
  ];

  // Lista de países (puedes expandir esta lista)
  const paises = [
    'Estados Unidos',
    'España',
    'México',
    'Argentina',
    'Francia',
    'Italia',
    'Reino Unido',
    'Alemania',
    'Japón',
    'Corea del Sur',
    'India',
    'Brasil'
  ];

  return (
    <>
      <Box sx={{ p: 3, maxWidth: 600, margin: '0 auto' }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: '16px', bgcolor: 'grey.900', boxShadow: 6 }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 4,
            gap: 2
          }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 700,
                background: "linear-gradient(90deg, #ff8a00, #e52e71)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                letterSpacing: "0.05em"
              }}
            >
              Añadir Nuevo Audiovisual
            </Typography>
          </Box>

          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel id="demo-simple-select-label">Contenido Audiovisual</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={audiovisual}
              label="Contenido Audiovisual"
              onChange={e => setAudiovisual(e.target.value)}
              sx={{
                '& .MuiSelect-select': {
                  display: 'flex',
                  alignItems: 'center',
                }
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: 'grey.900', // Mismo color que tu fondo
                    '& .MuiMenuItem-root': {
                      padding: '8px 16px',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Efecto hover
                      }
                    }
                  }
                },
                MenuListProps: {
                  sx: {
                    padding: -1, // Elimina padding adicional
                  }
                }
              }}
            >
              <MenuItem value=""><em>Ninguno</em></MenuItem>
              <MenuItem value="pelicula">
                <ListItemIcon><MovieIcon fontSize="medium" /></ListItemIcon>
                <ListItemText primary="Película" />
              </MenuItem>
              <MenuItem value="serie">
                <ListItemIcon><MovieIcon fontSize="medium" /></ListItemIcon>
                <ListItemText primary="Serie" />
              </MenuItem>
              <MenuItem value="anime">
                <ListItemIcon><MovieIcon fontSize="medium" /></ListItemIcon>
                <ListItemText primary="Anime" />
              </MenuItem>
            </Select>
          </FormControl>

          <Box>
            <Card sx={{}}>
                      <Container sx={{ p: 2 }}>
          <TextField
            fullWidth
            label="URL de la imagen"
            name="imagen"
            value={imagen}
            onChange={e => setImagen(e.target.value)}
            required
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CloudUploadIcon />
                </InputAdornment>
              ),
            }}
          />
        </Container>

        {/* Campo: Título */}
        <Container sx={{ p: 2 }}>
          <TextField
            fullWidth
            label="Título de la película"
            name="titulo"
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
            required
            variant="outlined"
          />
        </Container>

        {/* Campo: Año */}
        <Container sx={{ p: 2 }}>
          <TextField
            fullWidth
            label="Año de lanzamiento"
            name="año"
            type="number"
            value={año}
            onChange={e => setAño(Number(e.target.value))}
            required
            variant="outlined"
            inputProps={{
              min: 1900,
              max: new Date().getFullYear() + 5
            }}
          />
        </Container>

        {/* Campo: Duración */}
        <Container sx={{ p: 2 }}>
          <TextField
            fullWidth
            label="Duración (minutos)"
            name="duracion"
            type="number"
            value={duracion}
            onChange={e => setDuracion(Number(e.target.value))}
            required
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccessTimeIcon />
                </InputAdornment>
              ),
              inputProps: {
                min: 1,
                max: 500
              }
            }}
          />
        </Container>

        {/* Campo: País */}
        <Container sx={{ p: 2 }}>
          <FormControl fullWidth required>
            <InputLabel>País de origen</InputLabel>
            <Select
              value={pais}
              label="País de origen"
              onChange={e => setPais(e.target.value)}
              sx={{
                '& .MuiSelect-select': {
                  display: 'flex',
                  alignItems: 'center',
                }
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: 'grey.900', // Mismo color que tu fondo
                    '& .MuiMenuItem-root': {
                      padding: '8px 16px',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Efecto hover
                      }
                    }
                  }
                },
                MenuListProps: {
                  sx: {
                    padding: -1, // Elimina padding adicional
                  }
                }
              }}
              startAdornment={
                <InputAdornment position="start">
                  <LanguageIcon />
                </InputAdornment>
              }
            >
              {paises.map((paisOption) => (
                <MenuItem key={paisOption} value={paisOption}>
                  {paisOption}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Container>

        {/* Campo: Director */}
        <Container sx={{ p: 2 }}>
          <TextField
            fullWidth
            label="Director"
            name="director"
            value={director}
            onChange={e => setDirector(e.target.value)}
            required
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />
        </Container>

        {/* Campo: Género */}
        <Container sx={{ p: 2 }}>
          <FormControl fullWidth required>
            <InputLabel>Género</InputLabel>
            <Select
              value={genero}
              label="Género"
              onChange={e => setGenero(e.target.value)}
              sx={{
                '& .MuiSelect-select': {
                  display: 'flex',
                  alignItems: 'center',
                }
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: 'grey.900', // Mismo color que tu fondo
                    '& .MuiMenuItem-root': {
                      padding: '8px 16px',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Efecto hover
                      }
                    }
                  }
                },
                MenuListProps: {
                  sx: {
                    padding: -1, // Elimina padding adicional
                  }
                }
              }}
              startAdornment={
                <InputAdornment position="start">
                  <CategoryIcon />
                </InputAdornment>
              }
            >
              {generos.map((generoOption) => (
                <MenuItem key={generoOption} value={generoOption}>
                  {generoOption}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Container>

        {/* Campo: Sinopsis */}
        <Container sx={{ p: 2 }}>
          <TextField
            fullWidth
            label="Sinopsis"
            name="sinopsis"
            value={sinopsis}
            onChange={e => setSinopsis(e.target.value)}
            required
            multiline
            rows={4}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <DescriptionIcon />
                </InputAdornment>
              ),
            }}
          />
        </Container>
              <CardActions>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    py: 1.5,
                    background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
                    '&:hover': {
                      background: 'linear-gradient(90deg, #e52e71, #ff8a00)',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                    }
                  }}
                >
                  Agregar Producto
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Paper>
      </Box>
    </>
  );
}