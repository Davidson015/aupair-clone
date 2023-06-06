import { Box } from "@mui/material"
import { Navbar } from "./components"
import Landing from "./pages/Landing"


function App() {

  return (
    <Box width="100%" height="100vh">
      <Navbar />
      <Landing />
    </Box>
  )
}

export default App
