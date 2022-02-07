import React from 'react';
import { InfoSection } from '../../components';
import { homeObjOne, homeObjTwo } from './Data';
import {Carousel,Card,CardGroup} from "react-bootstrap"

function Products() {
  return (
     
   
    <>
     
      <InfoSection {...homeObjTwo} />
     <CardGroup>
    <Card>
      <Card.Img variant="top" src="https://colchonesspring.vteximg.com.br/arquivos/ids/174644-980-980/304056079999_1.jpg?v=637097232649970000" />
      <Card.Body>
        <Card.Title>              $30.000</Card.Title>
        <Card.Text>
           Almohadas
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"></small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="https://lirp.cdn-website.com/6bd06695/dms3rep/multi/opt/colchones-semiortopedicos-640w.jpg" />
      <Card.Body>
        <Card.Title>$960.000</Card.Title>
        <Card.Text>
      colchon semiortopedico{' '}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"></small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="https://http2.mlstatic.com/D_NQ_NP_770585-MCO41048729719_032020-O.jpg" />
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
       
        <Card.Title>$120.000</Card.Title>
        <Card.Text>
       Base Cama tapizada para tu mascota
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"></small>
      </Card.Footer>
    </Card>
  </CardGroup></>
  );
}

export default Products;
