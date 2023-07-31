import React, { useState } from 'react';
import { Box, Divider, FormControl, MenuItem, Select, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { getIsMobile } from '../../features/isMobileSlice';
import Chart from '../../component/chart';

const SalesAdmin = () => {
  const [produkTime, setProdukTime] = useState('daily');
  const isMobile = useSelector(getIsMobile);

  const labels = ['11/05', '12/05', '13/05', '14/05', '15/05', '16/05', '17/05', '18/05'];
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Product Sale',
        data: [5, 6, 4, 7, 8, 8, 7, 9],
        backgroundColor: [
          '#B2C5D4',
          '#B2C5D4',
          '#B2C5D4',
          '#B2C5D4',
          '#B2C5D4',
          '#3E7DAB',
          '#B2C5D4',
          '#B2C5D4',
        ],
        borderColor: [
            '#B2C5D4',
            '#B2C5D4',
            '#B2C5D4',
            '#B2C5D4',
            '#B2C5D4',
            '#3E7DAB',
            '#B2C5D4',
            '#B2C5D4',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        display: false, 
      },
    },
    plugins: {
      legend: {
        display: false, 
      },
    },
  };

  return (
    <Box sx={{ mt: '2rem' }}>
      {/* --- Product Sold --- */}
      <Box
        sx={{
          p: '1rem',
          bgcolor: '#fff',
          borderRadius: '12px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '130%',
              color: '#333',
            }}
          >
            Product Sold
          </Typography>

          <FormControl sx={{ minWidth: 120 }}>
            <Select
              value={produkTime}
              onChange={(e) => setProdukTime(e.target.value)}
              displayEmpty
              inputProps={{ 'aria-label': 'Select Produk Time' }}
              sx={{
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '12px',
                color: '#333',
              }}
            >
              <MenuItem value="daily" sx={{ fontFamily: 'Roboto' }}>
                Daily
              </MenuItem>
              <MenuItem value="weekly" sx={{ fontFamily: 'Roboto' }}>
                Weekly
              </MenuItem>
              <MenuItem value="monthly" sx={{ fontFamily: 'Roboto' }}>
                Monthly
              </MenuItem>
              <MenuItem value="yearly" sx={{ fontFamily: 'Roboto' }}>
                Yearly
              </MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Grafik Bar */}
        <Box
            sx={{
                marginY: '1rem'
            }}
        >
            <Chart data={data} config={options} />
        </Box>
        
      </Box>

      {/* --- Top Selling Product --- */}
      <Box
            sx={{
                py: '1rem',
                bgcolor: '#fff',
                borderRadius: '12px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                maxWidth: isMobile ? '100%' : '30%',
                my: '2rem',
            }}
        >
            <Box
                sx={{
                    px: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    justifyContent: 'start',
                }}
            >   
                {/* --- Title --- */}
                <Box
                    sx={{
                        display: 'flex',
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            fontSize: '16px',
                            lineHeight: '130%',
                            color: '#333'
                        }}
                    >Top selling product</Typography>
                    
                    <FormControl sx={{ minWidth: 120 }}>
                        <Select
                            value={produkTime}
                            onChange={(e) => setProdukTime(e.target.value)}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Select Produk Time' }}
                            sx={{
                                fontStyle: 'normal',
                                fontWeight: 400,
                                fontSize: '12px',
                                color: '#333'
                            }}
                        >
                            <MenuItem value="daily" sx={{fontFamily: 'Roboto'}}>Daily</MenuItem>
                            <MenuItem value="weekly" sx={{fontFamily: 'Roboto'}}>Weekly</MenuItem>
                            <MenuItem value="monthly" sx={{fontFamily: 'Roboto'}}>Monthly</MenuItem>
                            <MenuItem value="yearly" sx={{fontFamily: 'Roboto'}}>Yearly</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        mt: '1rem',
                    }}
                >
                    <Typography  
                        sx={{
                            fontFamily: 'Robot',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '12px',
                            lineHeight: '130%',
                            color: '#333'
                        }}
                    >Name</Typography>
                    <Typography  
                        sx={{
                            fontFamily: 'Robot',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '12px',
                            lineHeight: '130%',
                            color: '#333'
                        }}
                    >Value</Typography>
                </Box>

                <Divider sx={{ margin: '0 1rem', background: 'red' }} />

            </Box>
            {/* --- List Top Selling --- */}
            <Box
                sx={{
                    width: '100%',
                    marginY: '4px',
                }}
            >
                {
                    listTopSelling?.map((item, idx)=>(
                        <Box
                            key={idx}
                            sx={{
                                p: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                cursor: 'pointer',
                                ':hover': {
                                    background: '#f2f7fb'
                                }
                            }}
                        >
                        <Typography  
                            sx={{
                                fontFamily: 'Robot',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                fontSize: '12px',
                                lineHeight: '130%',
                                color: '#808080'
                            }}
                        >{item.name}</Typography>
                        <Typography  
                            sx={{
                                fontFamily: 'Robot',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                fontSize: '12px',
                                lineHeight: '130%',
                                color: '#808080'
                            }}
                        >{item.total}</Typography>                            </Box>
                    ))
                }
            </Box>
        </Box>

    </Box>
  );
};

const listTopSelling = [
  {
    name: 'item A',
    total: '120.00',
  },
  {
    name: 'item B',
    total: '120.00',
  },
  {
    name: 'item C',
    total: '80.00',
  },
];

export default SalesAdmin;
