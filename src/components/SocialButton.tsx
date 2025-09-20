import React, { type JSX } from "react";
import { Button } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';

type SocialType = 'instagram' | 'facebook' | 'google' | 'whatsapp' | 'telegram';

interface SocialButtonProps {
    type: SocialType;
    text?: string;
    onClick?: () => void;
}

const socialConfig: Record<SocialType, { icon: JSX.Element; gradient: string; hoverGradient: string; boxShadow: string }> = {
    instagram: {
        icon: <InstagramIcon />,
        gradient: 'linear-gradient(90deg, #db273fff, #fdc468)',
        hoverGradient: 'linear-gradient(90deg, #fdc468, #db273fff)',
        boxShadow: '0 0 16px 0px #db273f, 0 0 32px 0px #fdc468',
    },
    facebook: {
        icon: <FacebookIcon />,
        gradient: 'linear-gradient(90deg, #1826f2ff, #00c6ff)',
        hoverGradient: 'linear-gradient(90deg, #00c6ff, #1826f2ff)',
        boxShadow: '0 0 16px 0px #1826f2, 0 0 32px 0px #00c6ff',
    },
    google: {
        icon: <GoogleIcon />,
        gradient: 'linear-gradient(90deg, #4285F4, #34A853, #FBBC05, #EA4335)',
        hoverGradient: 'linear-gradient(90deg, #EA4335, #FBBC05, #34A853, #4285F4)',
        boxShadow: '0 0 16px 0px #4285F4, 0 0 32px 0px #EA4335',
    },
    whatsapp: {
        icon: <WhatsAppIcon />,
        gradient: 'linear-gradient(90deg, #25D366, #128C7E)',
        hoverGradient: 'linear-gradient(90deg, #128C7E, #25D366)',
        boxShadow: '0 0 16px 0px #25D366, 0 0 32px 0px #128C7E',
    },
    telegram: {
        icon: <TelegramIcon />,
        gradient: 'linear-gradient(90deg, #0088cc, #70c9ff)',
        hoverGradient: 'linear-gradient(90deg, #70c9ff, #0088cc)',
        boxShadow: '0 0 16px 0px #0088cc, 0 0 32px 0px #70c9ff',
    },
};

export default function SocialButton({ type, text, onClick }: SocialButtonProps) {
    const config = socialConfig[type];
    const defaultText = {
        instagram: 'Instagram',
        facebook: 'Facebook',
        google: 'Google',
        whatsapp: 'WhatsApp',
        telegram: 'Telegram',
    };
    return (
        <Button
            startIcon={config.icon}
            onClick={onClick}
            sx={{
                color: 'white',
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                background: config.gradient,
                boxShadow:4,
                '&:hover': {
                    background: config.hoverGradient,
                    boxShadow: config.boxShadow,
                },
            }}
        >
            {text || defaultText[type]}
        </Button>
    );
}