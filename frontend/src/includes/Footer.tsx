import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
//import h1, { h1Props }from "@mui/material/h1";
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
        py: 4,
        background: "#FBB31D",
        position: "relative",
        bottom: 0,
        left: 0,
        right: 0,
        marginTop: 3,
        p:0,
        width: "100%",
        display: "flex",
        flexDirection: "column",            
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
        color: "#0C0B0B",
        "&:hover": { color: "#AC8F00", transition: "200ms ease-in" },
      }}
    >
      {children}
    </Link>
  );
};

// FooterTitle component
const FooterTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <h5 style={{
     color: "#0C0B0B", fontWeight: "bold", fontSize: 18, marginBottom: 4 }}
    >
      {children}
    </h5>
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
        color: "#0C0B0B",
        "&:hover": { color: "#0b490b", transition: "200ms ease-in" },
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
        <Box style ={{ color: "#0C0B0B" }}>
        <p>P.O. BOX 1234</p>
        <p>Kisumu, Kenya</p>
        </Box>
       
      </FooterColumn>
    </Grid>
  );
};

const SocialFooterRow: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Grid container spacing={2} style={{
      display: "flex", 
    flexDirection: "row"}}>
       <FooterColumnOne /> 
      {children}
    </Grid>
  );
};
const FooterColumnOne: React.FC = () => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <FooterColumn>
        <Box style ={{ fontSize: "18px", marginTop:22 }}>
        <FooterTitleFirst>Call us 24/7</FooterTitleFirst>
        </Box>
      </FooterColumn>
    </Grid>
  );
};


const FooterColumnTwo: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop:20,
        marginBottom: 20,
      }}
    >
      {React.Children.map(children, (child, index) => (
        <>
          {index > 0 && <div style={{ margin: "0 20px" }} /> /* Add spacing between icons */}
          {child}
        </>
      ))}
    </div>
  );
};

const FooterTitleFirst: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <h5 style={{color: "#0C0B0B", overflow: "visible", fontSize: '18px', fontWeight: "bold", marginBottom: 2, marginTop: 2  }}
    >
      {children}
    </h5>
  );
};




// FooterContainer function
export function FooterContainer() {
  return (
    <Footer>
      <FooterWrapper>  
      <SocialFooterRow>
      
      <Grid item xs={12} sm={6} md={3}>
            <FooterColumnTwo>              
              <FooterSocialLink href="#" icon={<FacebookIcon />} />
              <FooterSocialLink href="#" icon={<InstagramIcon />} />
              <FooterSocialLink href="#" icon={<YouTubeIcon />} />
              <FooterSocialLink href="#" icon={<TwitterIcon />} />
            </FooterColumnTwo>
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
              <FooterLink href="#">Ghana</FooterLink>
              <FooterLink href="#">Nigeria</FooterLink>
              <FooterLink href="#">South Africa</FooterLink>
            </FooterColumn>
          </Grid>
          
        </FooterRow>
        
        
      </FooterWrapper>
      <FooterRow>
     <p style={{display: "center", color: "#0C0B0B",fontSize: 12, marginBottom: 2, marginTop: 2}}>Copyright GRISE Systems 2023.</p>
        </FooterRow>
    </Footer>
  );
}

export default Footer;