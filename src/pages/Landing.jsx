import { Box, Divider, Grid, ThemeProvider, Typography } from "@mui/material"
import { Backdrop } from "../assets"
import theme from "../assets/css/theme"
import { Btn } from "../components"
import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%", height: '100%', pb: 100 }}>
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
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              maxWidth: { md: '50%'},
              mt: {xs: 15, md: 0},
              mb: {xs: 5, md: 0},
              mx: {xs: 5, md: 0}
            }}>
              <Grid container spacing={{ xs: 1, md: 5}} justifyContent='center' mb={5}>
                <Grid item xs={12} md={6}>
                  <Btn component={Link} to="/" sx={{ width: "100%", backgroundColor: 'transparent', border: '1px solid #fff', px: 5, fontSize: 17 }}>
                    Register for free as Family
                  </Btn>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Btn component={Link} to="/" sx={{ width: "100%", backgroundColor: 'transparent', border: '1px solid #fff', px: 5, fontSize: 17 }}>
                    Register for free as Candidate
                  </Btn>
                </Grid>
              </Grid>

              <Typography sx={{
                fontSize: {xs: 28, md: 36},
                lineHeight: '38px',
                textAlign: 'center',
                color: '#fff',
                mb: 5
              }}>
                Find your Au Pair or your Host Family safe & easy!
              </Typography>

              <Grid container spacing={{ xs: 1, md: 5}} justifyContent='center'>
                <Grid item xs={12} md={6}>
                  <Btn component={Link} to="/" sx={{ width: "100%", backgroundColor: '#FFCC00', color: '#000', px: 5, fontSize: 17, '&:hover': {backgroundColor: '#EFBC00'} }}>
                    Find Au Pair
                  </Btn>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Btn component={Link} to="/" sx={{ width: "100%", px: 5, color: '#000', fontSize: 17 }}>
                    Find Family
                  </Btn>
                </Grid>
              </Grid>
            </Box>
            
          </Box>
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: 10}}>
          <Typography variant="h4" fontSize={28} fontWeight={400} color="rgba(0, 0, 0, .7)" textAlign='center' mx={2}>
            Why do people from all over the world trust us?
          </Typography>
          
          <Divider sx={{ color: '#000', width: 150, my: 5, borderWidth: 1.5 }} />

          <Typography variant="body1" fontSize={18} fontWeight={400} textAlign="center" mx={ theme.breakpoints.down("sm") ? 2.5 : 30 }>
            Our smart solution makes finding an Au Pair or Host Family safe and easy. We take great pride in providing lasting satisfaction to people all over the world, and here is what our users say about us:
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default Landing