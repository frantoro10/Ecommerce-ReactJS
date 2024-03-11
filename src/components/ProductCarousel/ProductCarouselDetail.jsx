import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RenderStars from '../ItemListContainer/RenderStars'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './ProductCarouselDetail.module.scss'
import '../../styles.scss'

const ProductCarouselDetail = ({ products }) => {

  const navigate = useNavigate();

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
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          initialSlide: 1,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <div className={styles.carouselContainer}>
        <Slider {...settings} >
          {products.map(product => (
            <div key={product.id} className={styles.productBox} onClick={() => navigate(`/item/${product.id}`)}>
              <img src={product.img} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.version}</p>
              <p className="p-price"> ${product.price}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductCarouselDetail;