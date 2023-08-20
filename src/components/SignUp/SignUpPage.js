import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link as RouterLink } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AccountDetailsDisplay from './AccountDetailsDisplay';
import { Card, CardContent, CardHeader, List, ListItem, ListItemIcon } from '@mui/material';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import CheckIcon from '@mui/icons-material/Check';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Sphinx Team
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="md" sx={{
            marginTop: 8,
          }}>
        <CssBaseline />
        <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
        </Typography>
        </Box>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card variant="elevation">
              <CardHeader title="Account Creation Instructions" />
                <CardContent>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <PriorityHighIcon />
                      </ListItemIcon>
                        <Typography>Create an account ONLY if you have never done so before. Do NOT create duplicate accounts. If you already have an account, <Link component={RouterLink} to="/signin">click here to sign in.</Link> If you attempt to create a duplicate account, your assets will be frozen and your account deleted.
                        </Typography>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckIcon />
                      </ListItemIcon>
                      Enter a unique, identifiable name into "Display Name." You will not use this to sign in, but it will be used by our internal services to identify your account.   
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <PriorityHighIcon />
                      </ListItemIcon>
                        Failure to use an identifiable name will result in account cancellation, asset seizure, or worse.
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <PriorityHighIcon />
                      </ListItemIcon>
                        Do NOT impersonate another person. Impersonation will result in your assets being seized and transferred to the name listed. 
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="display-name"
                name="displayName"
                required
                fullWidth
                id="displayName"
                label="Display Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <Card variant="elevation">
                <CardContent>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <PriorityHighIcon />
                      </ListItemIcon>
                      Again, you will NOT use the name you have entered to sign in. 
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <LightbulbIcon />
                      </ListItemIcon>
                      We have generated an Authentication Token, also henceforth referred to as the "Auth Token" for you below. This is your unique token which you must save in a secure place, and never share. You will use this and ONLY this token to sign in, NOT the display name you entered. If you lose this token, you will permanently lose access to your account.
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <LightbulbIcon />
                      </ListItemIcon>
                      We have generated an Account ID for you below. This is your unique Account Identifier which will be used by other users to transfer funds to you. Save it in a secure place as well, but you will be able to view it again as long as you are signed in with your Auth Token.
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <AccountDetailsDisplay 
                id="loremipsumdolarsitamet"
                token="loremipsumdolarsitamet"
              />
            </Grid>
            <Grid item xs={12}>
            <FormControlLabel
                control={<Checkbox value="terms" color="primary" />}
                label={<Typography>I agree to the <Link component={RouterLink} to="/terms">Terms of Service.</Link></Typography>}
              />
              <FormControlLabel
                control={<Checkbox value="privacy" color="primary" />}
                label={<Typography>I agree to the <Link component={RouterLink} to="/privacypolicy">Privacy Policy.</Link></Typography>}
              />
              <FormControlLabel
                control={<Checkbox value="sellMySoul" color="primary" checked disabled />}
                label="I agree to sell my soul to the creators of SRV Coin."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link component={RouterLink} to="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
        {/* </Box> */}
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}