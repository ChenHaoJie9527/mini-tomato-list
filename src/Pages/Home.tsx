import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Container from "../components/Container";
export default function Home() {
  return (
    <Box sx={{ flexGrow: 1, width: "100vw", height: "100vh" }}>
      <Grid2 className="w-full" container>
        <Grid2 xs={12} sm={12} md={12} lg={12} xl={12}>
          <Header size={8} content={"Header"}></Header>
        </Grid2>
        <Grid2 xs={4} sm={4} md={4} lg={4} xl={2}>
          <Sidebar />
        </Grid2>
        <Grid2 xs={8} sm={8} md={8} lg={8} xl={10}>
          <Container />
        </Grid2>
      </Grid2>
    </Box>
  );
}
