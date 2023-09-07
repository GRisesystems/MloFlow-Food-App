import React from 'react'; // Make sure to import React
import { Box, Grid, Container } from '@mui/material';
import ChefCard from '../../components/chefs/ChefCard';

const ChefsScreen = () => {
    const chefs = ['Jamie Oliver', 'Heston Blumenthal', 'Gordon Ramsay', 'Yannick Alléno', 'Alain Ducasse'];

    return (
        <Box sx={{ minHeight: '80vh', mt: 2 }}>
            <Container>
                <Grid container spacing={1}>
                    {chefs.map((chef, index) => ( // Added index as a key
                        <Grid item xs={12} md={3} key={index}> {/* Added key prop */}
                            <ChefCard chef_name={chef} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default ChefsScreen;
