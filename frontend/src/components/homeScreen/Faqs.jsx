import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

const   Faqs = () => {
    return (
        <Container maxWidth='md'>
          <Typography variant='h2' sx={{textAlign:'center', mb:3}}> Frequently Asked Questions</Typography>
            <Accordion>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ bgcolor: 'primary.main' }}
                >
                    <Typography sx={{ color: 'white' }} variant='body1'>How can I reset my password? </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='body1' sx={{ mt: 1, mb: 1 }}>
                    It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ bgcolor: 'primary.main' }}
                >
                    <Typography sx={{ color: 'white' }} variant='body1'>Can I create more that one account? </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='body1' sx={{ mt: 1, mb: 1 }}>
                    It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ bgcolor: 'primary.main' }}
                >
                    <Typography sx={{ color: 'white' }} variant='body1'>How can I subscribe to monthly newsletter?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='body1' sx={{ mt: 1, mb: 1 }}>
                    It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ bgcolor: 'primary.main' }}
                >
                    <Typography sx={{ color: 'white' }} variant='body1'>Do you store credit card information securely?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='body1' sx={{ mt: 1, mb: 1 }}>
                    It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ bgcolor: 'primary.main' }}
                >
                    <Typography sx={{ color: 'white' }} variant='body1'>What payment systems to you work with? </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='body1' sx={{ mt: 1, mb: 1 }}>
                    It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </Container>
    );
}
export default Faqs