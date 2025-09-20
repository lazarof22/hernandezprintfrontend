import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CardPersonalizada from './CardPersonalizada';
import PrintIcon from '@mui/icons-material/Print';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabsPanel() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{}}>
        <svg width="0" height="0" style={{ position: 'absolute' }}>
          <defs>
            <linearGradient id="tabGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff8a00" />
              <stop offset="100%" stopColor="#e52e71" />
            </linearGradient>
          </defs>
        </svg>
        <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example">
          <Tab
            icon={<PrintIcon />}
            iconPosition="start"
            sx={{
              width: 160,
              '& .MuiTab-wrapper': { // Este selector apunta al contenedor del label e icono
                background: (theme) => theme.palette.gradient.primary,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                display: 'flex',
                alignItems: 'center',
                gap: 1
              },
              '& .MuiSvgIcon-root': { // Aplicar gradiente también al icono
                fill: 'url(#tabGradient)'
              }
            }}
            label="Impresiones"
            {...a11yProps(0)}
          />
          <Tab icon={<LiveTvIcon />} iconPosition="start" label="Catalogo" sx={{
            width: 160,
            '& .MuiTab-wrapper': { // Este selector apunta al contenedor del label e icono
              background: (theme) => theme.palette.gradient.primary,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'flex',
              alignItems: 'center',
              gap: 1
            },
            '& .MuiSvgIcon-root': { // Aplicar gradiente también al icono
              fill: 'url(#tabGradient)'
            }
          }} {...a11yProps(1)} />
          <Tab icon={<ShoppingCartIcon />} iconPosition="start" label="Tienda" sx={{
            width: 160,
            '& .MuiTab-wrapper': { // Este selector apunta al contenedor del label e icono
              background: (theme) => theme.palette.gradient.primary,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'flex',
              alignItems: 'center',
              gap: 1
            },
            '& .MuiSvgIcon-root': { // Aplicar gradiente también al icono
              fill: 'url(#tabGradient)'
            }
          }} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          justifyContent: 'center'
        }}>
          {[...Array(1)].map((_, index) => (
            <Box sx={{ width: { xs: '100%', sm: '48%', md: '23%' } }} key={index}>
              <CardPersonalizada />
            </Box>
          ))}
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          justifyContent: 'center'
        }}>
          {[...Array(8)].map((_, index) => (
            <Box sx={{ width: { xs: '100%', sm: '48%', md: '23%' } }} key={index}>
              <CardPersonalizada />
            </Box>
          ))}
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          justifyContent: 'center'
        }}>
          {[...Array(8)].map((_, index) => (
            <Box sx={{ width: { xs: '100%', sm: '48%', md: '23%' } }} key={index}>
              <CardPersonalizada />
            </Box>
          ))}
        </Box>
      </CustomTabPanel>
    </Box>
  );
}
