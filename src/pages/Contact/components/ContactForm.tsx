import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from "@mui/material/Button";

export default function AddressForm() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Связаться с нами
            </Typography>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="Имя"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Фамилия"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        // required
                        id="address1"
                        name="address1"
                        label="Воспрос"
                        fullWidth
                        autoComplete="Например: Как с вами связаться? "
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="mobile"
                        name="mobile"
                        label="Мобильный телефон"
                        fullWidth
                        autoComplete="+7 "
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="mail"
                        name="mail"
                        label="email"
                        fullWidth
                        autoComplete="____@gmail.com"
                        variant="standard"
                    />
                </Grid>

                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox name="saveAddress" value="yes" />}
                        label="Нажимая на кнопку я согласен что бы со мной связались"
                    />
                    <Button style={{width:'100%'}} > Отправить</Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}