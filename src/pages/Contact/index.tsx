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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ContactForm from "./components/ContactForm";
import {Divider, Icon} from "@mui/material";
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function ContactPage() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />

            <Container maxWidth="lg">
                <Typography variant="h3" gutterBottom>
                    Контакты
                </Typography>
                <main>  <Divider/>
                    <Grid container spacing={2}>
                        <Grid item xs={6} md={6}>
                            <Grid item>

                                <PublicOutlinedIcon/>
                                <Typography variant="h6">Наш Адрес</Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography>г. Москва, ул. Сельскохозяйственная, д. 17, к. 5, офис 502</Typography>
                            </Grid>
                            <Grid item>
                                <Divider/>
                                <LocalPhoneOutlinedIcon/>
                                <Typography variant="h6">Наш Телефон</Typography>

                            </Grid>
                            <Grid item xs>
                                <Typography>+7 923 324 32 32</Typography>
                            </Grid>
                            <Grid item>
                                <Divider/>
                                <EmailOutlinedIcon/>
                                <Typography variant="h6">Наш email</Typography>

                            </Grid>
                            <Grid item xs>
                                <Typography>softbox@softbox.ru</Typography>
                            </Grid>
                            <Grid item>
                                <Divider/>
                                <AccountBalanceWalletOutlinedIcon/>
                                <Typography variant="h6">Наши реквизиты</Typography>

                            </Grid>
                            <Grid item xs>
                                <Typography>ИНН  : 123456688</Typography>
                                <Typography>ОГРН : 123456688</Typography>
                                <Typography>Р/С  : 123456688123442</Typography>
                                <Typography>Банк : СберБанк</Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <ContactForm/>
                        </Grid>
                    </Grid>
                </main>
            </Container>

        </ThemeProvider>
    );
}