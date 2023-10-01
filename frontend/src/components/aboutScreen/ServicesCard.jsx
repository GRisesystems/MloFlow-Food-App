import { CardContent, Grid, Paper, Typography } from "@mui/material"

const ServicesCard = () => {
  return (
    <Grid item xs={12} sm={4}>
      <Paper
        elevation={3}
      >
        <CardContent>
          <Typography variant="body1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur eum placeat sint incidunt! Ratione explicabo harum alias cum veniam, neque officia, eaque, repellendus aspernatur natus quae veritatis sit. Asperiores, eveniet?
          </Typography>
        </CardContent>
      </Paper>
    </Grid>
  )
}

export default ServicesCard