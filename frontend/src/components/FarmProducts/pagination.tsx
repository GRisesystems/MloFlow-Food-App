import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';

const  Paginated = () => {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box 
    sx={{
      margin: "auto",
      width: "fit-content",
      alignItems: "center",
  }}
    >
    <Stack spacing={2} margin={'auto'}>
      <Typography  sx={{
                    color: "#FFA000",
                    fontWeight:700,
                }}>Page: {page}</Typography>
      <Pagination count={5} page={page} onChange={handleChange}      
                    color='warning' />
    </Stack>
    </Box>
  );
}
export default Paginated;