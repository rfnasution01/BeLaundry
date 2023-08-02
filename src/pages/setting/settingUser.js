import { Button, Grid, InputLabel, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getIsMobile } from '../../features/isMobileSlice';

const SettingUser = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const isMobile = useSelector(getIsMobile);
    
    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');
    
        setUsername(storedUsername || '');
        setEmail(storedEmail || '');
        setPassword(storedPassword || '');
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
    
        setUsername('');
        setEmail('');
        setPassword('');
    
        alert('Data updated successfully!');
      };

  return (
    <Grid
        container
        columns={2}
    >
        <Grid
            item
            xl={1}
            lg={1}
            md={2}
            sm={2}
            xs={2}
            sx={{
                bgcolor: '#E7F5FD', 
                minHeight: '100vh',
            }}
        >
            <Box
                sx={{
                    mt: isMobile ? '4rem': '2rem',
                    mx: isMobile ? '1.6rem': 0,
                }}
            >
                {/* --- Title --- */}
                <Typography
                    sx={{
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '40px',
                        lineHeight: '130%',
                        color: '#333',
                    }}
                >Edit Profile</Typography>

                <form
                    style={{
                        marginTop: '20px',
                        fontWeight: '600px',
                        fontSize: '13px',
                        lineHeight: '18px',
                        letterSpacing: '0.01em',
                        color: '#171717',
                    }}
                    onSubmit={handleSubmit}
                    >
                    {/* --- Username --- */}
                    <Box 
                        display={'flex'} 
                        flexDirection={'column'} 
                        mb={'9px'}
                    >
                        <InputLabel
                            sx={{
                                marginBottom: '5px',
                                color: '#3B97CB'
                            }} 
                        >Username</InputLabel>
                        <Box display={'flex'}>
                            <TextField
                                variant="outlined"
                                size="small"
                                fullWidth
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        background: '#fff',
                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                          borderColor: '#3B97CB',
                                        },
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                          borderColor: '#3B97CB',
                                        },
                                        '& .MuiOutlinedInput-notchedOutline': {
                                          borderColor: '#3B97CB',
                                        },
                                      },
                                }}
                            />
                        </Box>
                    </Box>
                    {/* --- Email --- */}
                    <Box 
                        display={'flex'} 
                        flexDirection={'column'} 
                        mb={'9px'}
                    >
                        <InputLabel
                            sx={{
                                marginBottom: '5px',
                                color: '#3B97CB'
                            }} 
                        >Email</InputLabel>
                        <Box display={'flex'}>
                            <TextField
                                variant="outlined"
                                size="small"
                                fullWidth
                                type={'email'}
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        background: '#fff',
                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                          borderColor: '#3B97CB',
                                        },
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                          borderColor: '#3B97CB',
                                        },
                                        '& .MuiOutlinedInput-notchedOutline': {
                                          borderColor: '#3B97CB',
                                        },
                                      },
                                }}
                            />
                        </Box>
                    </Box>
                    {/* --- Password --- */}
                    <Box 
                        display={'flex'} 
                        flexDirection={'column'} 
                        mb={'9px'}
                    >
                        <InputLabel
                            sx={{
                                marginBottom: '5px',
                                color: '#3B97CB'
                            }} 
                        >Password</InputLabel>
                        <Box display={'flex'}>
                            <TextField
                                variant="outlined"
                                size="small"
                                fullWidth
                                type={'password'}
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        background: '#fff',
                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                          borderColor: '#3B97CB',
                                        },
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                          borderColor: '#3B97CB',
                                        },
                                        '& .MuiOutlinedInput-notchedOutline': {
                                          borderColor: '#3B97CB',
                                        },
                                      },
                                }}
                            />
                        </Box>
                    </Box>
                    {/* --- Update --- */}
                    <Button
                        variant="contained"
                        color="success"
                        type="submit"
                        sx={{ 
                            width: '100%',
                            color: '#fff'
                        }}
                    >
                        Update
                    </Button>
                </form>
            </Box>
        </Grid>
    </Grid>
  )
}

export default SettingUser
