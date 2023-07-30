import { Box, Grid } from "@mui/material";
import { ImgLoginBackground } from "../../assets/img";
import HeadLayout from "./component/headLayout";
import FooterLayout from "./component/footerLayout";
import LoginRouting from "../../routes/loginRouting";

const LoginLayout = () => {
    
    return (
      <Box
        sx={{
          backgroundImage: `linear-gradient(to top, rgba(173, 216, 230, 0.2), rgba(173, 216, 230, 0.2)), url(${ImgLoginBackground})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
          minHeight: '100vh',
        }}
      >
        <Grid container columns={2}>
          <Grid 
            item xl={1} 
            lg={1} 
            md={2} 
            sm={2} 
            xs={2}  
            sx={{
              bgcolor: '#E7F5FD',
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              justifyContent: 'space-between',
              padding: '2rem',
            }}
          >
           
           {/* --- Head Login Layout --- */}
           <HeadLayout />

            {/* --- Main Content --- */}
            <Box
              component='section'
              sx={{
                  display: 'flex',
                  alignItems: 'center', 
                  justifyContent: 'center',
                  width: '100%',
              }}
          >
            <LoginRouting/>
          </Box>
           

           {/* --- Footer Login Layout --- */}
           <FooterLayout />
          </Grid>
        </Grid>
      </Box>
    );
  };
  
  export default LoginLayout;