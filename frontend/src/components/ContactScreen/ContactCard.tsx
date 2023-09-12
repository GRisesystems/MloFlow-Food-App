import { Box, Typography, Icon } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const ContactCard = () => {
  return (
    <Box
      sx={{
        top: 20,
        p: 2,              
        // left: 0,
        m: 2,
        
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)', // Add box shadow
        borderRadius: '30px', // Add border radius for an attractive style
      }}
    >
      <Box sx={{ m: 3, left:0 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          We would love to help you if you have any questions or comments!
        </Typography>

        <Typography variant="body1" sx={{ mt: 2, mb: 2 }}>
          <Icon sx={{ color: '#fbb31d' }}> {/* Change icon color */}
            <PhoneIcon />
          </Icon>
          <span style={{ marginLeft: '8px' }}>Phone Number: +1 123-456-7890</span>
        </Typography>

        <Typography variant="body1" sx={{ mt: 2, mb: 2 }}>
          <Icon sx={{ color: '#fbb31d' }}> {/* Change icon color */}
            <EmailIcon />
          </Icon>
          <span style={{ marginLeft: '8px' }}>Email: example@example.com</span>
        </Typography>

        <Typography variant="body1" sx={{ mt: 2, mb: 2 }}>
          <Icon sx={{ color: '#fbb31d' }}> {/* Change icon color */}
            <LocationOnIcon />
          </Icon>
          <span style={{ marginLeft: '8px' }}>Location: New York, USA</span>
        </Typography>

        {/* Social Media Icons */}
        <Box
          sx={{
            marginTop: '30px',
            display: 'flex',
            justifyContent:'center',
            // alignItems: 'center',
            gap: '40px',
          }}
        >
          <a href="https://www.facebook.com/">
            <Icon sx={{ color: '#fbb31d' }}> {/* Change icon color */}
              <FacebookIcon />
            </Icon>
          </a>
          <a href="https://www.linkedin.com/">
            <Icon sx={{ color: '#fbb31d' }}> {/* Change icon color */}
              <LinkedInIcon />
            </Icon>
          </a>
          <a href="https://twitter.com/">
            <Icon sx={{ color: '#fbb31d' }}> {/* Change icon color */}
              <TwitterIcon />
            </Icon>
          </a>
          <a href="https://www.instagram.com/">
            <Icon sx={{ color: '#fbb31d' }}> {/* Change icon color */}
              <InstagramIcon />
            </Icon>
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactCard;

