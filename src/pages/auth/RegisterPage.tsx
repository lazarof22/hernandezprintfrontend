import { Box, Button, Card, CardActions, TextField, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from "react";
import CardContent from '@mui/material/CardContent';
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
    const navigate = useNavigate();
    const styles = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: 600,
        bgcolor: 'grey.900',
        boxShadow: 24,
        p: 3,
        borderRadius: '16px',
        outline: 'none'
    };
    return (
        <>
            <Card sx={styles}>
                <CardContent>
                    <Typography
                        variant="h5"
                        sx={{
                            textAlign: 'center',
                            mb: 2,
                            background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                        }}
                    >
                        Registrate
                    </Typography>
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
                            helperText="Inserte un nombre para su usuario"
                            variant="outlined"
                            sx={{

                            }}
                            InputProps={{
                                startAdornment: (
                                    <AccountCircleIcon
                                        sx={{
                                            color: 'action.active',
                                            mr: 1,
                                        }}
                                    />
                                ),
                            }}
                        />

                        <TextField
                            fullWidth
                            label="Email"
                            placeholder="Email"
                            type="email"
                            helperText="Inserte su correo electronico"
                            variant="outlined"
                            sx={{

                            }}
                            InputProps={{
                                startAdornment: (
                                    <EmailIcon
                                        sx={{
                                            color: 'action.active',
                                            mr: 1,
                                        }}
                                    />
                                ),
                            }}
                        />

                        <TextField
                            fullWidth
                            label="Contraseña"
                            type="password"
                            placeholder="Contraseña"
                            helperText="Inserte una contraseña"
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

                        <TextField
                            fullWidth
                            label="Confirmar contraseña"
                            type="password"
                            placeholder="Confirmar contraseña"
                            helperText="Confirme la contraseña"
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <LockIcon sx={{
                                        color: 'action.active',
                                        mr: 1
                                    }} />
                                ),
                            }}
                        />
                    </Box>
                </CardContent>
                <CardActions sx={{ display: "grid" }}>
                    <Button
                        fullWidth
                        variant="contained"
                        startIcon={<LockIcon />}
                        sx={{
                            color: 'HighlightText',
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
                        ¿Ya tienes cuenta?{' '}
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
                            onClick={()=> navigate('/loginpage')}
                        >
                            Inciar Sesión
                        </Box>
                    </Typography>
                </CardActions>
            </Card>
        </>
    );
}