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
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  useScrollTrigger,
  Link,
  Tooltip
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { Logo, LogoWhite } from "../assets";
import theme from "../assets/css/theme";

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
]

const Navbar = (props) => {
  const scrollTrigger = useScrollTrigger();
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
        sx={{ backgroundColor: "transparent",
        px: { xs: 2, md: 20 },
        py: 2,
        alignItems: "center", }}
        position="fixed"
        elevation={scrollTrigger ? 4 : 0}
      >
        <Toolbar sx={{ justifyContent: "space-between", width: "100%" }}>
          <Link component={RouterLink} to='/' underline='none'>
            <img src={LogoWhite} style={{ width: "230px", height: "50px" }} />
          </Link>
          <IconButton
            color="white"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 1, display: { sm: "none" }, border: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "flex" }, justifyContent: 'space-evenly' }}>
            {navItems.map((item) => (
              <Tooltip key={item} title="Drop" arrow>
                <Typography sx={{ color: "#fff", mr: 2.5, fontSize: 14 }}>
                {item.title}
              </Typography>
              </Tooltip>
            ))}
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
