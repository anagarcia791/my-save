import '../../styles/Banner.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/img2.jpg'
import img3 from '../../assets/images/img3.jpg'

const Banner = ()=>{
  return (
<div className= "contenedor">
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <p className= "mensaje">Si no consumes carne 1 dia a la semana disminuyes la produccion  de gas carbónico en 3kg/eq, lo que equivale a no conducir 2 dias.  </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <p className= "mensaje">Los plásticos pueden pasar 500 años contaminando nuestros ecosistemas, porque no son biodegradables en condiciones naturales.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <p  className= "mensaje">
            Si consumes frutas y verduras de temporada en cambio  de las importadas apoyas la economia local y a su vez reduces la huella de carbono de la agricultura
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</div>
  );
}
export default Banner;