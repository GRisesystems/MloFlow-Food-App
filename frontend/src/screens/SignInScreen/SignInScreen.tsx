
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container, ThemeProvider, Paper } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme();

const SignIn = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <Paper elevation={2} style={{ padding: "1rem" }}>
          <CssBaseline />
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar alt="MloFlow Logo" src="/src/assets/mloflowlogo.jfif" sx={{ width: '150px', height: '150px' }} />
            <Typography component="h1" variant="h4">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{
                  "& label.Mui-focused": { color: "#000" },
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#000",
                    },
                  },
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                sx={{
                  "& label.Mui-focused": { color: "#000" },
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#000",
                    },
                  },
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "#FFA000",
                  "&:hover": { color: "#FFA000", backgroundColor: "#000" },
                }}
              >
                Sign In
              </Button>
              <FormControlLabel
                control={<Checkbox value="remember" sx={{ color: "#FFA000", "&:hover": { color: "#FFA000" }, "&:checked": { backgroundColor: "#FFA000" } }} />}
                label="Remember me"
                sx={{ color: "#FFA000" }}
              />
              <Grid container>
                <Grid item xs>
                  <Link href="/reset_password" variant="body2" sx={{ color: "#000", fontSize: ".9rem", fontWeight: 600, textDecoration: "none", "&:hover": { color: "#FFA000", textDecoration: "underline" } }}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2" sx={{ color: "#000", fontSize: ".9rem", fontWeight: 600, textDecoration: "none", "&:hover": { color: "#FFA000", textDecoration: "underline" } }}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default SignIn;
