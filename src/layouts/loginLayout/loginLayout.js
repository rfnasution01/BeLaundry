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
              bgcolor: '#fff',
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              justifyContent: 'space-between',
              padding: '2rem',
              border: '1px solid red'
            }}
          >
           
           {/* --- Head Login Layout --- */}
           <HeadLayout />

            {/* --- Main Content --- */}
           <LoginRouting/>

           {/* --- Footer Login Layout --- */}
           <FooterLayout />
          </Grid>
        </Grid>
        

        {/* <Grid container columns={2}>
          <Grid item xl={1} lg={1} md={2} sm={2} xs={2} bgcolor={'#fff'} sx={{
            height: {
              xl: '100vh',
              lg: isMainRoute ? 'auto': '100vh',
              md: '100vh',
              sm: '100vh',
              xs: '100vh',
            }
          }}>
            <Box 
              display={'flex'} p={'20px 30px'} 
              flexDirection={'column'}
              justifyContent={'space-between'}
              sx={{
                height: {
                  xl: '100vh',
                  lg: isMainRoute ? 'auto': '93vh',
                  md: '100vh',
                  sm: '100vh',
                  xs: '100vh',
                }
              }}
            >
              Test
             
              <Box my={'20px'}>
              </Box>
              
            </Box>
          </Grid>
        </Grid> */}
      </Box>
    );
  };
  
  export default LoginLayout;