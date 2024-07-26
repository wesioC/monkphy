import * as React from 'react';
import { styled, useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import { useMediaQuery } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center', // Alinha a imagem ao centro horizontalmente
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Navbar() {
  const theme = useTheme();
  const prefersDesktop = useMediaQuery(theme.breakpoints.up('md')); // Determina se a tela é de tamanho desktop (largura >= 960px)
  const isMobile = !prefersDesktop; // Verifica se é uma tela móvel
  const [open, setOpen] = React.useState(prefersDesktop); // Define o estado inicial com base no tamanho da tela

  React.useEffect(() => {
    setOpen(prefersDesktop); // Atualiza o estado do drawer quando o tamanho da tela muda
  }, [prefersDesktop]);

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  const appliedTheme = createTheme({
    palette: {
      mode: theme.palette.mode, // Mantém o modo do tema atual (light ou dark)
    },
  });

  // Imagem do logo a ser usada
  const logoImage = isMobile ? 'https://github.com/wesioC/monkphy/blob/main/src/assets/monkphyBlueSm.png?raw=true' : 'https://github.com/wesioC/monkphy/blob/main/src/assets/monkphyBlue.png?raw=true';
  const tam = isMobile ? '40px' : '120px';

  // Array contendo as informações de texto, ícone e rota para cada item da lista
  const menuItems = [
    { text: 'Página inicial', icon: <HomeIcon />, route: '/' },
    { text: 'Pesquisar', icon: <SearchIcon />, route: '/search' },
    { text: 'Explorar', icon: <ExploreIcon />, route: '/explore' },
    { text: 'Sair', icon: <LogoutIcon />, route: '/logout' },
  ];

  return (
    <ThemeProvider theme={appliedTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <img src={logoImage} alt="Logo" style={{ width: tam }} />
          </DrawerHeader>
          <Divider />
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  component="a"
                  href={item.route}
                  sx={{
                    minHeight: 48,
                    justifyContent: 'center',
                    px: 2.5,
                    ...(index === menuItems.length - 1 && { marginTop: 'auto' }), // Alinha "Sair" no final
                  }}
                >
                  <ListItemIcon sx={{ justifyContent: 'center' }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}
