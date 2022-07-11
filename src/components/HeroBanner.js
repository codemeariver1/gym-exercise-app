import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HeroBannerImage from '../assets/images/banner-1.png'

const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
        <Typography color="#0779E4" fontWeight="600" fontSize="26px">Gym Buffs</Typography>
        <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
                Sweat, Sleep <br /> and Repeat
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={4}>
            Browse from 1300+ effective exercises!
        </Typography>
        <Stack>
          <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', 
          textAlign: 'center', background: '#0779E4', padding: '14px', fontSize: '22px', 
          textTransform: 'none', color: 'white', borderRadius: '4px' }}>
            Explore Exercises
          </a>
        </Stack>
        <Typography fontWeight={600} color="#0779E4" sx={{ opacity: 0.1, display: { lg: 'block', xs: 'none' } }} 
            fontSize="200px">
            Fitness
        </Typography>
        <img src={HeroBannerImage} alt="banner" className='hero-banner-img'></img>
    </Box>
  )
}

export default HeroBanner