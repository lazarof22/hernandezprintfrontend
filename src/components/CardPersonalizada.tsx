import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ModernCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  borderRadius: '16px',
  boxShadow: theme.shadows[6],
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[12],
  },
}));

const GradientOverlay = styled(Box)({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: '40%',
  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
});


export default function CardPersonalizada() {
  // Función para enviar el mensaje a Telegram
  const handleOrderClick = async () => {
    const message = "¡Nuevo pedido de Modern Cuisine! Precio: $24.99";
    try {
      await fetch("http://localhost:3000/telegram/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message })
      });
      alert("¡Pedido enviado a Telegram!");
    } catch (error) {
      alert("Error al enviar el pedido.");
    }
  };

  return (
    <ModernCard>
      <CardActionArea>
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            height="220"
            image="https://m.media-amazon.com/images/M/MV5BYTU3ZDVhNmMtMDVlNC00MDc0LTgwNDMtYWE5MTI2ZGI4YWIwXkEyXkFqcGc@._V1_FMjpg_UX1013_.jpg"
            alt="Modern Food"
          />
          <GradientOverlay />
        </Box>
        <CardContent sx={{ px: 3, pt: 3, pb: 2 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontWeight: 700,
              letterSpacing: '-0.5px'
            }}
          >
            Modern Cuisine
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              mb: 1.5,
              lineHeight: 1.6
            }}
          >
            Discover the art of contemporary cooking with our chef's selection of innovative dishes that blend tradition with modern techniques.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                color: 'primary.main'
              }}
            >
              $24.99
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: 'text.disabled',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
            >
              Seasonal
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ px: 2, py: 1, justifyContent: 'space-between' }}>
        <Box>
          <IconButton aria-label="add to favorites" size="small">
            <FavoriteBorderIcon fontSize="small" />
          </IconButton>
          <IconButton aria-label="share" size="small">
            <ShareIcon fontSize="small" />
          </IconButton>
        </Box>
        <Button
          size="small"
          variant="contained"
          disableElevation
          sx={{
            borderRadius: '12px',
            textTransform: 'none',
            px: 2,
            py: 0.5,
            fontWeight: 600
          }}
          onClick={handleOrderClick}
        >
          Order Now
        </Button>
      </CardActions>
    </ModernCard>
  );
}