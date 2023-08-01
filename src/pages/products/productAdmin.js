import { Box, Button, Grid, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { ImgTemplate } from '../../assets/img';
import { useSelector } from 'react-redux';
import { getIsMobile } from '../../features/isMobileSlice';

const ProductAdmin = () => {
    const isMobile = useSelector(getIsMobile);
    const [productName, setProductName] = useState('')
    const [description, setDescription] = useState('');
    const [sku, setSku] = useState('');
    const [stock, setStock] = useState(0);
    const [category, setCategory] = useState(listCategory[0])
    const [price, setPrice] = useState(0);
    const isLoading = false;
    // const [isLoading, setIsLoading] = useState(false);
    // const [image, setImage] = useState('');

  return (
    <Grid
        container
        columns={3}
    >
        <Grid
            item
            xl={2}
            lg={2}
            md={3}
            sm={3}
            xs={3}
            sx={{
                bgcolor: '#E7F5FD', 
                minHeight: '100vh',
                padding: isMobile ? '0px 1.6rem' : '4rem 1.6rem'
            }}
        >
            <Box
                sx={{
                    mt: '2rem',
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
                >Add New Product</Typography>

                {/* --- Form --- */}
                <form
                    style={{
                        marginTop: '20px',
                        fontWeight: '600px',
                        fontSize: '13px',
                        lineHeight: '18px',
                        letterSpacing: '0.01em',
                        color: '#171717',
                    }}
                    // onSubmit={handleSubmit}
                    >
                    {/* --- Product Name --- */}
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
                        >Product Name</InputLabel>
                        <Box display={'flex'}>
                            <TextField
                                variant="outlined"
                                size="small"
                                fullWidth
                                required
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
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
                    
                    {/* --- Description --- */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            mb: '9px'
                        }}
                    >
                       <InputLabel
                            sx={{
                                marginBottom: '5px',
                                color: '#3B97CB'
                            }} 
                        >
                            Description
                        </InputLabel>
                        <OutlinedInput
                            fullWidth
                            required
                            multiline
                            minRows={5}
                            variant="outlined"
                            size="small"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            sx={{
                                fontSize: 'normal',
                                background: '#f9f9f9',
                                '& .MuiOutlinedInput-root': {
                                    background: '#3B97CB',
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#3B97CB',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#3B97CB',
                                },
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#3B97CB',
                                },
                            }}
                        />
                    </Box>

                    
                    <Grid container columns={3} spacing={2}>
                        {/* --- SKU --- */}
                        <Grid item xl={1} lg={1} md={3} sm={3} xs={3}>
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
                                >SKU</InputLabel>
                                <Box display={'flex'}>
                                    <TextField
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        required
                                        value={sku}
                                        onChange={(e) => setSku(e.target.value)}
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
                        </Grid>

                        {/* --- Stock --- */}
                        <Grid item xl={1} lg={1} md={3} sm={3} xs={3}>
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
                                >Stock</InputLabel>
                                <Box display={'flex'}>
                                    <TextField
                                        variant="outlined"
                                        size="small"
                                        type={'number'}
                                        fullWidth
                                        required
                                        value={stock}
                                        onChange={(e) => setStock(e.target.value)}
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
                        </Grid>
                    </Grid>
                   

                    {/* --- Category --- */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            mb: '9px'
                        }}
                    >
                       <InputLabel
                            sx={{
                                marginBottom: '5px',
                                color: '#3B97CB'
                            }} 
                        >
                            Category
                        </InputLabel>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                justifyContent: 'start',
                                gap: '10px'
                            }}
                        >
                            {
                                listCategory?.map((item, idx)=>(
                                    <Typography
                                        key={idx}
                                        onClick={()=>setCategory(item)}
                                        sx={{
                                            bgcolor: 
                                                item === category ?
                                                    '#3B97CB'    
                                                :
                                                    '#CAECFF'
                                                ,
                                            borderRadius: '8px',
                                            cursor: 'pointer',
                                            fontFamily: 'Roboto',
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            fontSize: '16px',
                                            lineHeight: '130%',
                                            boxShadow: '0px 4px 4px 0px #3B97CB4A',
                                            color: 
                                                item === category ?
                                                    '#fff'    
                                                :
                                                    '#3B97CB',
                                            padding: '0.5rem',
                                        }}
                                    >{item}</Typography>
                                ))
                            }
                        </Box>
                    </Box>

                    <InputLabel
                        sx={{
                            marginBottom: '5px',
                            color: '#3B97CB'
                        }} 
                    >Price</InputLabel>

                    <Grid container columns={6} spacing={2}>
                        {/* --- Price --- */}
                        <Grid item xl={2} lg={2} md={3} sm={3} xs={3}>
                            <Box 
                                display={'flex'} 
                                flexDirection={'column'} 
                                mb={'9px'}
                            >
                                
                                <Box display={'flex'}>
                                    <TextField
                                        variant="outlined"
                                        size="small"
                                        type={'number'}
                                        fullWidth
                                        required
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
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
                        </Grid>

                        {
                            isMobile ?
                                ''
                            : 
                                <Grid item xl={2} lg={2} md={3} sm={3} xs={3} />
                        }
                        {/* --- Button --- */}
                        {
                            isMobile ?
                                ''
                            :
                            <Grid item xl={2} lg={2} md={3} sm={3} xs={3}>
                                <Button
                                    disabled={isLoading}
                                    variant="contained"
                                    color="success"
                                    type="submit"
                                    sx={{ 
                                        width: '100%',
                                        color: '#fff'
                                    }}
                                >
                                    Publish
                                </Button>
                            </Grid>
                        }
                    </Grid>   
                </form>
            </Box>
        </Grid>

        {/* --- Upload Image --- */}
        <Grid
            item
            xl={1}
            lg={1}
            md={3}
            sm={3}
            xs={3}
            sx={{
                bgcolor: isMobile ? 'transparent' : '#F2F7FB', 
                minHeight: isMobile? 'auto' : '100vh',
                padding: isMobile? '0px 1.6rem'  : '1rem 1.6rem',
            }}
        >
            <Box
                sx={{
                    mt: isMobile ? '1rem': '5rem',
                    p: '2rem',
                    bgcolor: '#fff',
                    borderRadius: '8px',
                    textAlign: 'center'
                }}
            >
                <img
                    src={ImgTemplate}
                />
                <Typography
                    sx={{
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '20px',
                        lineHeight: '130%',
                        color: '#3B97CB'
                    }}
                >Upload Image Here</Typography>
            </Box>
        </Grid>

        {
            isMobile ?
                <Grid
                    item
                    xl={1}
                    lg={1}
                    md={3}
                    sm={3}
                    xs={3}
                    sx={{
                        bgcolor: isMobile ? 'transparent' : '#F2F7FB', 
                        minHeight: 'auto',
                        padding: '2rem 1.6rem',
                    }}
                >
                    <Button
                        disabled={isLoading}
                        variant="contained"
                        color="success"
                        type="submit"
                        sx={{ 
                            width: '100%',
                            color: '#fff'
                        }}
                    >
                        Publish
                    </Button>
                </Grid>    
            :
                ''
        }
    </Grid>
  );
};

const listCategory = [
    'Wash and Fold',
    'Dry Clean',
    'Home',
    'Others',
]

export default ProductAdmin;
