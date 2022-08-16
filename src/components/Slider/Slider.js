import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../Imagen/Img1.jpg';
import Img2 from '../Imagen/Img2.jpg';
import Img3 from '../Imagen/Img3.jpg';


function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100" src={Img2} alt="First slide"/>
        <Carousel.Caption>
          <h3>Star Wars</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" src={Img1} alt="Second slide"/>
        <Carousel.Caption>
          <h3>Star Wars</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" src={Img3} alt="Third slide"/>
        <Carousel.Caption>
          <h3>Star Wars</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;