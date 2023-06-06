import { Box, ThemeProvider } from "@mui/material"
import { Backdrop } from "../assets"
import theme from "../assets/css/theme"
import { Btn } from "../components"

const Landing = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: '#ddd', width: "100%", height: '100%' }}>
        <Box
          sx={{
            backgroundImage: `url("${Backdrop}")`,
            backgroundSize: 'cover',
            height: "85%",
            width: '100%'
          }}
        >
          <Box sx={{
            width: '100%',
            height: '100%',
            backgroundImage: "linear-gradient(rgba(7, 113, 154, .75), rgba(7, 113, 154, .25))",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Btn>Button</Btn>
          </Box>
        </Box>
        
      </Box>
    </ThemeProvider>
  )
}

export default Landing