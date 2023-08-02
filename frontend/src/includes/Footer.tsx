import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

// Footer component
const Footer: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <Container
      component="footer"
      sx={{
        py: 8,
        background: "#0b490b",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        m: 0,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        //maxHeight: "120px",
        overflow:"visible",
       
      }}
    maxWidth="xl"
    
    >
      {children}
    </Container>
  );
};

// FooterWrapper component
const FooterWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return(
    <Box
  sx={{
    maxWidth:"1200px",
    margin: "0",
    
  }}
  >{children}
  </Box>
  );
};

// FooterColumn component
const FooterColumn: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div>{children}</div>;
};

// FooterRow component
const FooterRow: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Grid container spacing={2}>
      {children}
    </Grid>
  );
};

// FooterLink component
const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  children,
  href,
}) => {
  return (
    <Link
      href={href}
      color="inherit"
      underline="none"
      sx={{
        display: "block",
        marginBottom: 2,
        fontSize: 18,
        color: "#a69b9b",
        "&:hover": { color: "#82c12a", transition: "200ms ease-in" },
      }}
    >
      {children}
    </Link>
  );
};

// FooterTitle component
const FooterTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Typography
      variant="h5"
      component="h2"
      sx={{ color: "white", fontWeight: "bold", marginBottom: 4 }}
    >
      {children}
    </Typography>
  );
};

// FooterSocialLink component
const FooterSocialLink: React.FC<{ href: string; icon: React.ReactNode }> = ({
  href,
  icon,
}) => {
  return (
    <Link
      href={href}
      color="inherit"
      underline="none"
      sx={{
        display: "block",
        marginBottom: 2,
        fontSize: 18,
        color: "#a69b9b",
        "&:hover": { color: "#82c12a", transition: "200ms ease-in" },
      }}
    >
      {icon}
    </Link>
  );
};
const NewFooterColumn: React.FC = () => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <FooterColumn>
        <FooterTitle>Store Location</FooterTitle>
        <FooterLink href="#">Store location TBD</FooterLink>
      </FooterColumn>
    </Grid>
  );
};

const SocialFooterRow: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Grid container spacing={2} style={{
      display: "flex", 
    flexDirection: "row" }}>
      {children}
    </Grid>
  );
};

const FooterColumnWithHorizontalIcons: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {React.Children.map(children, (child, index) => (
        <>
          {index > 0 && <div style={{ margin: "0 10px" }} /> /* Add spacing between icons */}
          {child}
        </>
      ))}
    </div>
  );
};

const FooterTitleWithSpace: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Typography
      variant="h5"
      component="h2"
      sx={{ color: "white", fontWeight: "bold", marginBottom: 4}}
    >
      {children}
    </Typography>
  );
};




// FooterContainer function
export function FooterContainer() {
  return (
    <Footer>
      <FooterWrapper>  
      <SocialFooterRow>
      <Grid item xs={12} sm={6} md={3}>
            <FooterColumnWithHorizontalIcons>
              <FooterTitleWithSpace>Contact Us</FooterTitleWithSpace>
              <FooterSocialLink href="#" icon={<FacebookIcon />} />
              <FooterSocialLink href="#" icon={<InstagramIcon />} />
              <FooterSocialLink href="#" icon={<YouTubeIcon />} />
              <FooterSocialLink href="#" icon={<TwitterIcon />} />
            </FooterColumnWithHorizontalIcons>
          </Grid>
        </SocialFooterRow>
    
                         
        <FooterRow>
          <NewFooterColumn />
          <Grid item xs={12} sm={6} md={3}>
          
            <FooterColumn>
              <FooterTitle>Information</FooterTitle>
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Check Out</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
              <FooterLink href="#">Service</FooterLink>
            </FooterColumn>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FooterColumn>
              <FooterTitle>Services</FooterTitle>
              <FooterLink href="#">Marketing</FooterLink>
              <FooterLink href="#">Consulting</FooterLink>
              <FooterLink href="#">Development</FooterLink>
              <FooterLink href="#">Design</FooterLink>
            </FooterColumn>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FooterColumn>
              <FooterTitle>Contact Us</FooterTitle>
              <FooterLink href="#">Kenya</FooterLink>
              <FooterLink href="#">Uganda</FooterLink>
              <FooterLink href="#">Nigeria</FooterLink>
              <FooterLink href="#">Sierra Leone</FooterLink>
            </FooterColumn>
          </Grid>
          
        </FooterRow>
        
      </FooterWrapper>
    </Footer>
  );
}

export default Footer;