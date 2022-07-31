import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/img2.jpg'
import img3 from '../../assets/images/img3.jpg'

const Banner = ()=>{
  return (

    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className= "tema">Sabias que?</h3>
          <p className= "mensaje">La ganaderia intensiva genera el 14.4 % del total de  gases de efecto invernadero, si no consumes carne 1 dia a la semana disminuyes la produccion  de gas carbónico en 3kg/lt, lo que equivale a no conducir 2 dias.  </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Sabias que?</h3>
          <p>Plásticos de un solo uso son aquellos que se usan una sola vez, pero que, en cambio, pueden pasar 500 años contaminando nuestros ecosistemas, porque no son biodegradables en condiciones naturales.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Sabias que?</h3>
          <p>
           Si consumes de manera consciente frutas y verduras de temporada y de tu región en cambio  de las importadas apoyas la economia local y a su vez reduces la huella de carbono de la agricultura
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  );
}

export default Banner;