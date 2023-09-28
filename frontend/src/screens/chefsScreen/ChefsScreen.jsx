import React from 'react'; // Make sure to import React
import { Box, Grid, Container } from '@mui/material';
import ChefCard from '../../components/chefs/ChefCard'

const ChefsScreen = () => {
    const chefs = [
        { name: 'Jamie Oliver', status: 'available' },
        { name: 'Heston Blumenthal', status: 'unavailable' },
        { name: 'Gordon Ramsay', status: 'available' },
        { name: 'Yannick Alléno', status: 'unavailable' },
        { name: 'Alain Ducasse', status: 'available' },
    ];

    return (
        <Box sx={{ minHeight: '80vh', mt: 2 }}>
            <Container>
                <Grid container spacing={1}>
                    {chefs.map((chef, index) => (
                        <Grid item xs={12} md={3} key={index}>
                            <ChefCard chef_name={chef.name} status={chef.status} key={index} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default ChefsScreen;
