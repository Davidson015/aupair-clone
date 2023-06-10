import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Grid, Stack, ThemeProvider, Typography } from "@mui/material"
import { Backdrop, TestPlh } from "../assets"
import theme from "../assets/css/theme"
import { Btn } from "../components"
import { Link } from "react-router-dom"
import { Add } from '@mui/icons-material';
import { useState } from "react"
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import { styled } from '@mui/material';

const Accordion = styled((props) => (
  <MuiAccordion elevation={0} square {...props} />
))(({ theme }) => ({
  borderTop: `3px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  backgroundColor: 'transparent',
  '&:before': {
    display: 'none',
  },
  color: 'white',
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<Add color="white" sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  transition: '.5s',
  backgroundColor: 'rgba(10, 24, 51, .75)',
  '&:hover': {
  backgroundColor: 'rgba(10, 24, 51, .95)',
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(45deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const Landing = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%", height: '100%', pb: 100 }}>
        <Box
          sx={{
            background: `linear-gradient(rgba(7, 113, 154, .75), rgba(7, 113, 154, .25)), url("${Backdrop}")`,
            backgroundSize: 'cover',
            height: "85%",
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
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
        
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', my: 10}}>
          <Typography variant="h4" fontSize={28} fontWeight={400} color="rgba(0, 0, 0, .7)" textAlign='center' mx={2}>
            Why do people from all over the world trust us?
          </Typography>
          
          <Divider sx={{ width: 150, my: 5, borderWidth: 1.5 }} />

          <Typography variant="body1" fontSize={18} fontWeight={400} textAlign="center" mx={{ xs: 2.5, md: 30 }}>
            Our smart solution makes finding an Au Pair or Host Family safe and easy. We take great pride in providing lasting satisfaction to people all over the world, and here is what our users say about us:
          </Typography>
        </Box>

        <Box sx={{ backgroundColor: "#eee", display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={0} mx={{ xs: 3, md: 0 }} >
            {new Array(4).fill().map((i) => (
              <Card key={i}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height={350}
                  image={TestPlh}
                  alt="testmonial imgs"
                />
                <CardContent sx={{ height: 150, alignItems: 'center', display: 'flex', py: 5 }}>
                  <Typography gutterBottom variant="body2" color="text.secondary" textAlign="center">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, dicta cum? Mollitia quae odio autem! Nam, qui vitae aperiam asperiores adipisci culpa tenetur doloribus blanditiis esse optio, accusantium odit et?
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            ))}
          </Stack>

          <Btn component={Link} to="/" sx={{ width: {xs: 'auto', md: '30%' }, height: 55, backgroundColor: '#FFCC00', color: '#000', px: 5, my: 10, fontSize: 14, transition: '.8s', '&:hover': {backgroundColor: '#00CCFF'} }}>
            MORE TESTIMONIALS OR REVIEWS
          </Btn>
        </Box>

        <Box
          className="parallax"
          sx={{
            height: {xs: 'auto', md: 600},
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              backgroundImage: 'linear-gradient(rgba(7, 113, 154, .75), rgba(7, 113, 154, .25))',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}
          >
            <Typography variant="h4" fontSize={28} fontWeight={400} color="#fff" textAlign='center'>
              How to use AuPair.com
            </Typography>
            
            <Divider sx={{ width: 150, my: 4, borderWidth: 1.5, borderColor: '#fff8' }} />

            <Typography variant="body1" fontSize={18} fontWeight={400} color="#fff" textAlign="center" mx={{ xs: 5, md: 0 }} mb={7}>
              There is no easier way to find a candidate or a Host Family!
            </Typography>

            <Box sx={{ width: '75%' }}>
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    Registration
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    The first step in your Au Pair search is the online registration on AuPair.com. Register for free and start a once-in-a-lifetime experience. Create your profile now! » » »
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Find Au Pair/Family</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Are you looking for a flexible childcare solution? Do you want to work abroad and already have experience in the field of childcare? Then the Au Pair program is just right for you! Find Au Pairs/ Host Families who match your search criteria and become a Premium member. » » »
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    Get together!
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Use our secure messaging system to get in touch with your future Au Pair or Host Family. Make an appointment for an Au Pair interview. Are you wondering how? We will show you! » » »
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Agreement</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    The most important step in your Au Pair search is the agreement between both sides. Make sure to discuss important matters such as duties, hours and pocket money and sign the contract! » » »
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
        </Box>

        

      </Box>
    </ThemeProvider>
  )
}

export default Landing