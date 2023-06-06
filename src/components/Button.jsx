import { Button as MUIBtn } from "@mui/material";
import { styled } from "@mui/material";

const Button = styled(MUIBtn)({
  borderRadius: "7px",
  backgroundColor: "#00CCFF",
  color: "#ffffff",
  padding: "10px 20px",
  textTransform: "none",
  fontsize: "14px",
  fontWeight: '700',
  fontFamily: [
    '"Century Gothic"',
    'Arial',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  
  "&:hover": {
    backgroundColor: '#00BCEE'
  }
});

export default Button