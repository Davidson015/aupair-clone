/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
  ThemeProvider,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  useScrollTrigger,
  Link,
  Tooltip,
  MenuList,
  MenuItem,
  tooltipClasses,
  styled,
  Avatar
} from "@mui/material";
import { Menu as MenuIcon, Search } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { Logo, LogoWhite } from "../assets";
import theme from "../assets/css/theme";
import { Btn } from ".";

const drawerWidth = 240;
const navItems = [
  {
    title: "For Au Pairs",
    options: [
      "Find your Host Family",
      "Register as Au Pair",
      "Become an Au Pair in 7 steps",
      "Requirements for Au pair",
      "Au Pair programs",
      "Jobs by country",
      "Au Pair Experience reports"
    ]
  },
  {
    title: "For Families",
    options: [
      "Find your candidate",
      "Register as family",
      "Become a Host Family in 7 steps",
      "Requirements for Host Families",
      "Host Family's Country",
      "Premium Membership",
      "Search by country",
      "Testimonials",
    ]
  },
  {
    title: "Information",
    options: [
      "About AuPair.com",
      "Au Pair Wiki",
      "FAQ",
      "Blog",
      "Au Pair Visa Requirement",
      "List of Agencies",
      "List of Language Schools",
      "List of Preschools"
    ]
  },
];
const langs = [
  {
    name: "EN",
    flag: "",
  },
];

const Dropdown = styled(({className, ...props}) => (
  <Tooltip {...props} classes={{popper: className}} arrow />
))(({theme}) => ({ 
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'white',
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[15],
  },

  [`& .${tooltipClasses.arrow}`]: {
    color: "#fff",
  }
}))

const Navbar = (props) => {
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  const { window } = props;
  const container = window !== undefined ? () => window().document.body : undefined;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: scrollTrigger ? "#fff" : "transparent",
          px: { xs: 2, md: 20 },
          py: scrollTrigger ? 1 : 2,
          alignItems: "center",
          transition: ".5s"
        }}
        position="fixed"
        elevation={scrollTrigger ? 4 : 0}
      >
        <Toolbar sx={{ justifyContent: "space-between", width: "100%" }}>
          <Link component={RouterLink} to='/' underline='none'>
            <img src={scrollTrigger ? Logo : LogoWhite} style={{ width: "230px", height: "50px" }} />
          </Link>
          <IconButton
            color={scrollTrigger ? "rgba(0, 0, 0, .8)" : "white"}
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 1, display: { sm: "none" }, border: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: 'center' }}>
            {navItems.map((item, key) => (
              <Dropdown key={key} title={
                <MenuList sx={{
                  "& .MuiMenuItem-root": {
                    fontSize: 13,
                    "&:hover": {
                      backgroundColor: 'rgba(0, 0, 0, .15)'
                    },
                  }
                }}>
                  {
                   item.options.map((option, optKey) => (
                    <MenuItem key={optKey} component={RouterLink} divider>
                      {option}
                    </MenuItem>
                   )) 
                  }
                </MenuList>
              }>
                <Typography sx={{ color: scrollTrigger ? "rgba(0, 0, 0, .8)" : "#fff", mr: 2.5, fontSize: 13, cursor: 'pointer' }}>
                  {item.title}
                </Typography>
              </Dropdown>
            ))}
            <Link component={RouterLink} underline="none" sx={{ display: 'flex', alignItems: 'center', color: scrollTrigger ? "rgba(0, 0, 0, .8)" : '#fff', mr: 2 }}>
              <Avatar src="" alt="lang" sx={{ height: 24, width: 24 }} />
              <Typography fontSize={13} ml={.5} >EN</Typography>
            </Link>
            <Link component={RouterLink} sx={{mr: 2}} >
              <Search sx={{ color: scrollTrigger ? "rgba(0, 0, 0, .8)" : "#fff", mt: 1 }}/>              
            </Link>
            <Btn sx={{ mr: 1, backgroundColor: scrollTrigger ? '#00CCFF' : '#fff', color: scrollTrigger ? '#fff' : '#00CCFF', '&:hover': {color: "#fff"} }}>
              Login
            </Btn>
            <Btn sx={{ backgroundColor: scrollTrigger ? '#00CCFF' : '#fff', color: scrollTrigger ? '#fff' : '#00CCFF', '&:hover': {color: "#fff"} }}>
              Register
            </Btn>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor="right"
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </ThemeProvider>
  );
};

export default Navbar;
