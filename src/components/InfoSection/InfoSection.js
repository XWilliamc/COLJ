import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from './InfoSection.elements';

import {Carousel,Card,CardGroup} from "react-bootstrap"
function InfoSection({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start
}) {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link to='/Contactanos'>
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
              <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.bazzarbog.com/37439-large_default/combo-colchon-dublin-gris-queenbase-cama-divididaalmohadascabecero.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5> </h5>
      <p>Lo mejor para tu comodidad a los mejores precios</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://casaoutlet.com.co/wp-content/uploads/2020/08/basecama-madera-colchon-confort-s1-6.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5> </h5>
      <p>Contactanos y recibe las mejores ofertas </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://colchonesnaturals.co/wp-content/uploads/2020/01/base-cama-clasica-naturals-home-cafe.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5> </h5>
      <p>Comodidad para tu hogar</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
      
      <CardGroup>
    <Card>
      <Card.Img variant="top" src="https://casaoutlet.com.co/wp-content/uploads/2020/08/basecama-madera-colchon-confort-s1-6.jpg" />
      <Card.Body>
        <Card.Title>              $830.000</Card.Title>
        <Card.Text>
           Base Cama y colchon ortopedico
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"></small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAyL9j64i0EpjhPJYWmhYTRT9oFz2K3AvQt5KL62avWEbazH6_Bqn_1wTlUm4xj8LXPKM&usqp=CAU" />
      <Card.Body>
        <Card.Title>$1.100.000</Card.Title>
        <Card.Text>
       Base Cama completa con cabecero y colchon ortopedico{' '}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"></small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDNmdUQ1_34I0K1wlIB1oMJXJequwNiST3tQ&usqp=CAU" />
       <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <Card.Body>
       
        <Card.Title>$400.000</Card.Title>
        <Card.Text>
       Base Cama tapizada gris 
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"></small>
      </Card.Footer>
    </Card>
  </CardGroup>
    </>
    
  );
}

export default InfoSection;
