// somos-nosotros.tsx

import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Footer from '../src/Footer';
import { Instagram } from '@mui/icons-material'; 
import { Grid, IconButton } from '@mui/material';
import axios from 'axios';

const SobreNosotros: React.FC = () => {
  const [images, setImages] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         'https://graph.instagram.com/v12.0/{user-id}/media?fields=id,media_type,media_url,permalink&access_token={your-access-token}'
  //       );

  //       setImages(response.data.data);
  //     } catch (error) {
  //       console.error('Error fetching images from Instagram:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  useEffect(() => {
    const fetchData = async () => {
          try {
            const response = await axios.get(
                'https://www.instagram.com/p/CzhgIOgOiBK/?img_index=3'
              );
    
            setImages(response.data);
          } catch (error) {
            console.error('Error fetching images from Instagram:', error);
          }
        };
    
        fetchData();
    
  }, []);

  // const images = [
  //   ,
  //   'https://www.instagram.com/p/CzhgIOgOiBK/?img_index=3',
  //   'https://www.instagram.com/p/CzhgIOgOiBK/?img_index=3',
  //   'https://www.instagram.com/p/CzhgIOgOiBK/?img_index=3',
  //   'https://www.instagram.com/p/CzhgIOgOiBK/?img_index=3',
  //   'https://www.instagram.com/p/CzhgIOgOiBK/?img_index=3'
  // ]
  return (
    <React.Fragment>
      <CssBaseline />
      <Container style={{ marginTop: '2rem', border: 'solid 1px black', height: '100px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Somos Nosotros
        </Typography>
      </Container>
      <Container style={{ display: 'flex', marginTop: '2rem' }}>   
        <Container style={{ marginTop: '2rem', border: 'solid 1px red' }}>
          aca va una imagen
        </Container>
        <Container style={{ border: 'solid 1px red' }}>
          <Typography variant="body1" paragraph>
            "En el año 2022, nace My Pretty Nails, un espacio concebido por Diamela 
            con la visión de ofrecer un cuidado excepcional para tus uñas.
          </Typography>
          <Typography variant="body1" paragraph>

          Diamela, la fundadora y propulsora de esta iniciativa, se embarcó en este proyecto con el fin de crear un entorno de belleza centrado en la calidad, 
          la accesibilidad y tratamientos personalizados que se adaptan a las necesidades individuales de cada persona.
          </Typography >

          <Typography variant="body1" paragraph>
              Los salones de My Pretty Nails son más que lugares estéticamente atractivos; son refugios contemporáneos que fusionan el estilo nórdico con un toque de elegancia, diseñados para brindar comodidad y relajación. El objetivo es crear una atmósfera de conexión y serenidad para todos nuestros visitantes.
          </Typography >
          <Typography variant="body1" paragraph>
            "Queremos que cada persona pueda llevar unas uñas impecables durante todo el año, integrando estos cuidados en sus rutinas sin afectar sus agitados estilos de vida. En My Pretty Nails, ofrecemos tarifas flexibles para que puedas disfrutar de nuestros tratamientos sin comprometer tu ajetreado día a día".
          </Typography >
          <Typography variant="body1" paragraph>
            En My Pretty Nails, nos enorgullece recibir a individuos de todas las edades que valoran cuidar de sí mismos. Desde jóvenes explorando su estilo hasta mujeres maduras que entienden que unas manos bien cuidadas proyectan seguridad, estado de ánimo y personalidad en cada detalle.
            Únete a la experiencia de My Pretty Nails, un espacio liderado por Diamela, donde el cuidado de tus uñas se convierte en un acto de amor propio y autenticidad.
          </Typography >
        </Container>
      </Container>
        <Container style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', alignItems:'center', border: 'solid 1px black', height: '100px' }}>
          <Typography variant="h4" align="center" gutterBottom>
            sigue las ultimas tendencias
          </Typography>
        </Container>
      <Container style={{ display: 'flex', marginTop: '2rem' }}>   
      <Container style={{ marginTop: '2rem', border: 'solid 1px black', height: '450px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          <IconButton>
            <Instagram fontSize="large" />
          </IconButton>
          My.Pretty.Nails8
        </Typography>
        <Grid container spacing={1} justifyContent="center">
        {images.map((image, index) => (
            <Grid item xs={4} key={index}>
              <img src={image} alt={`Instagram ${index + 1}`} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            </Grid>
          ))}
        </Grid>
      </Container>
        <Container style={{ marginTop: '2rem', border: 'solid 1px black', height: '450px' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Somos Nosotros
          </Typography>
        </Container>
        
      </Container>
    <Footer />
    </React.Fragment>
  );
};

export default SobreNosotros;
