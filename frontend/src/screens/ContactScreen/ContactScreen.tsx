import { Box, Grid, Typography } from "@mui/material";
import ContactCard from "../../components/ContactScreen/ContactCard"; // Import your ContactCard component here
import ContactForm from "../../components/ContactScreen/ContactForm"; // Import your ContactForm component here
import ContactTopSection from "../../components/ContactScreen/ContactTopSection";

const ContactScreen = () => {
  return (
    <Box>
      <ContactTopSection />
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        {/* ContactCard component */}
        <ContactCard />
      </Grid>
      <Grid item xs={12} md={6}>
        {/* ContactForm component */}
        <ContactForm />
      </Grid>
    </Grid>
    </Box>
  );
};

export default ContactScreen;