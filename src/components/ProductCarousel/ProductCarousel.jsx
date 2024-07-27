import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RenderStars from '../ItemListContainer/RenderStars'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './ProductCarousel.module.scss'
import '../../styles.scss'

const ProductCarousel = ({ products }) => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  useEffect(() => {
    // Forzar actualización del slider después de que el componente se haya montado
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0, true);
    }
  }, [products]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1
        }
      },
      {
        breakpoint: 300,
        settings: {
          initialSlide: 2,
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  };

  return (
    <div className={` ${styles.carouselContainer}`}>
      <Slider ref={sliderRef} {...settings}>
        {products.map(product => (
          <div key={product.id} className={styles.productBox}>
            <img src={product.img} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.version}</p>
            <p className="p-price"> ${product.price}</p>
            <button onClick={() => navigate(`/item/${product.id}`)} style={{ marginBottom: "1em", borderRadius: "0.4em", backgroundColor: "#0d6efd", color: "white", padding: "0.5em" }}>
              Ver más
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;