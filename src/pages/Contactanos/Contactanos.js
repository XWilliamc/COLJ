import React from 'react';
import './Contactanos.css' 
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';

function Contactanos() {
  return (
    <div className="Contactanos"> 
   
    <Typography gutterBottom variant="h3" align="center" >
    Bienvenido Contáctanos aqui
    <p></p>
     </Typography>
    <Grid>
      <Card style={{  maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
        <CardContent>
          <Typography gutterBottom variant="h5">
          ¿Tienes alguna pregunta sobre nuestros productos?
        </Typography> 
          <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
          Agrega tu información y solicitud a continuación.
              Te contactaremos lo más pronto posible.
        </Typography> 
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField placeholder="Enter first name" label="Esccribe tu nombre" variant="outlined" fullWidth required />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField placeholder="Enter last name" label="Escribe tus apellidos" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField type="email" placeholder="Enter email" label="Escribe tu Email" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField type="number" placeholder="Enter phone number" label="Escribe tu numero de contacto" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Escribe tu mensaje aqui." multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>Enviar</Button>
              </Grid>

            </Grid>
          </form>
        </CardContent>
      </Card>
    </Grid>
  </div>
);
}

export default Contactanos;
