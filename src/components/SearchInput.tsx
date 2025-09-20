import SendIcon from '@mui/icons-material/Send';
import { IconButton, Paper, InputBase, Divider, Box } from "@mui/material";

export default function SearchInput() {
    return (
        <Box>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, boxShadow:4 }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Buscar"
                    inputProps={{ 'aria-label': 'Buscar' }}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton
                    sx={{
                        p: '10px',
                        '& .MuiSvgIcon-root': { // Aplicar gradiente también al icono
                            fill: 'url(#buttonGradient)'
                        }
                    }}
                    aria-label="directions"
                >
                    <SendIcon />
                </IconButton>
            </Paper>
        </Box>
    );
}