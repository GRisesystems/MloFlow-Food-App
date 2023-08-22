import { Box, Typography, TextField, InputAdornment} from '@mui/material';
import {ArrowRightAltSharp, Drafts }from '@mui/icons-material';
const Newsletter = () => {
  return (
    <Box
        sx={{
            position:'relative',
            marginTop:'8px',
            height: 'auto',
            padding: '1rem',
            backgroundColor: '#FFA000',
            textAlign: 'center',
        }}
    >
            <Drafts  sx={{color:'#ffffff', fontSize:'4rem', margin: '8px',}}/>
          <Typography variant="h3" component="div" sx={{mb:4}}>
          Sign up for our newsletter
          </Typography>
          <TextField 
          id='email'
          placeholder='Email address...'
          sx={ { borderRadius: '3rem', backgroundColor:'#ffffff',  "& fieldset": { border: 'none'}, width:'40%', paddingRight:0,}}
          InputProps = {{
            endAdornment: (
                <InputAdornment position='start' sx={{fontWeight:900,}}>
                    <ArrowRightAltSharp sx={{ "&:hover": {
    backgroundColor: "#FFA000",  padding: '1rem 1.6rem', color: '#ffffff', right:0, outline:'1px solid #000000', borderRadius:'0 3rem 3rem 0'
  },
  }}/>
                </InputAdornment>
            ) }}
          />
    </Box>
  );
}

export default Newsletter;