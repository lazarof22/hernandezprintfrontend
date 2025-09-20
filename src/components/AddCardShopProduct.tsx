import { Box, Typography, TextField, Button, Paper, Avatar, InputAdornment, FormControl, InputLabel, Select, MenuItem, Card, CardActions, Container, ListItemIcon, ListItemText, } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import MovieIcon from '@mui/icons-material/Movie';
import PrintIcon from '@mui/icons-material/Print';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import React from "react";

export default function AddCardShopProduct() {
  const [servicio, setServicio] = React.useState('');
  const [nombre, setNombre] = React.useState('');
  const [descripcion, setDescripcion] = React.useState('');
  const [precio, setPrecio] = React.useState('');
  const [imagen, setImagen] = React.useState('');

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
              Añadir Nuevo Producto
            </Typography>
          </Box>

          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel id="demo-simple-select-label">Tipo de Servicio</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={servicio}
              label="Tipo de Servicio"
              onChange={e => setServicio(e.target.value)}
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
                    padding: 0, // Elimina padding adicional
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
              <MenuItem value="impresion">
                <ListItemIcon><PrintIcon fontSize="medium" /></ListItemIcon>
                <ListItemText primary="Servicio de Impresión" />
              </MenuItem>
              <MenuItem value="producto">
                <ListItemIcon><ShoppingBasketIcon fontSize="medium" /></ListItemIcon>
                <ListItemText primary="Producto de Tienda" />
              </MenuItem>
            </Select>
          </FormControl>

          <Box>
            <Card sx={{}}>
              <Container sx={{ p: 2 }}>
                <TextField
                  fullWidth
                  label="URL de la imagen"
                  name="imagenProducto"
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
                  helperText="Ingresa una URL válida para la imagen del producto"
                />
              </Container>
              <Container>
                <TextField
                  fullWidth
                  label="Nombre"
                  name="nombre"
                  value={nombre}
                  onChange={e => setNombre(e.target.value)}
                  required
                  variant="outlined"
                />
              </Container>
              <Container sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  label="Descripción"
                  name="descripcion"
                  value={descripcion}
                  onChange={e => setDescripcion(e.target.value)}
                  required
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </Container>
              <Container sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  label="Precio"
                  name="precio"
                  type="number"
                  value={precio}
                  onChange={e => setPrecio(e.target.value)}
                  required
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AttachMoneyIcon />
                      </InputAdornment>
                    ),
                    inputProps: {
                      min: 0,
                      step: 0.01
                    }
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