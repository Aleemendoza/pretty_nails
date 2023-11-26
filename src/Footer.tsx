// Footer.tsx

import React from 'react';
import { Container, Grid, Link, Typography } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material'; // Importa los iconos de redes sociales que necesites

const Footer: React.FC = () => {
  return (
    <footer>
        <Container style={{ height: '500', border: 'solid 1px red', marginTop: 45, padding: 35}}>   

        <Grid container spacing={3}>
          {/* Columna 1 - Logo */}
          <Grid item xs={6} sm={3}>
            {/* Aquí puedes agregar el logo de tu empresa */}
            <Typography variant="h6">Logo</Typography>
          </Grid>

          {/* Columna 2 */}
          <Grid item xs={6} sm={3}>
            <Typography variant="h6">Oficina central</Typography>
            <Typography variant="body1">+34 934 189 300</Typography>
            <Typography variant="body1">info@hellonails.es</Typography>
            <Typography variant="body1">C/ Capitán Arenas, 48 08034 - Barcelona</Typography>
            <Typography variant="body1">C/ Jorge Juan, 77 28009 - Madrid</Typography>
          </Grid>

          {/* Columna 3 - Enlaces */}
          <Grid item xs={6} sm={3}>
            <Link href="/">INICIO</Link><br/>
            <Link href="/sobre-nosotros">SOBRE NOSOTROS</Link><br/>
            <Link href="/nuestros-centros">NUESTROS CENTROS</Link><br/>
            <Link href="/tratamientos">TRATAMIENTOS</Link><br/>
            <Link href="/reserva-tu-cita">RESERVA TU CITA</Link><br/>
            <Link href="/abre-tu-franquicia">ABRE TU FRANQUICIA</Link><br/>
            <Link href="/academy">ACADEMY</Link><br/>
            <Link href="/politica-de-privacidad">POLÍTICA DE PRIVACIDAD</Link><br/>
          </Grid>

          {/* Columna 4 - Redes Sociales */}
          <Grid item xs={6} sm={3}>
            <Typography variant="h6">Redes Sociales</Typography>
            <Link href="https://facebook.com"><Facebook /></Link>
            <Link href="https://instagram.com"><Instagram /></Link>
            <Link href="https://twitter.com"><Twitter /></Link>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
