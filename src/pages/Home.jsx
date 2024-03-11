import React, { useState, useEffect } from 'react'
import { ProductsContext } from '../context/ProductsContext'
import { useContext } from 'react'
import ProductCarousel from '../components/ProductCarousel/ProductCarousel'
import ControlledCarousel from '../components/ControlledCarousel/ControlledCarousel'
import styles from './Home.module.scss'


const Home = () => {

  const { products } = useContext(ProductsContext);
  const [productsOferta, setProductsOferta] = useState([]);

  useEffect(() => {
    const ProductosOferta = products.filter(products => products.enOferta === true);
    setProductsOferta(ProductosOferta);
    console.log(productsOferta)
  }, [products])

  return (
    <div>
      <div className={``}>
        <ControlledCarousel className={``} />
      </div>
      <div className={`container`}>
        <div className={`row justify-content-center align-items-center`}>
          <div className={`col-lg-10  my-4`}>
            <h2 className={`text-center fw-normal`} >Disfruta de las mejores ofertas del momento</h2>
          </div>
          <div className={`col-lg-10 text-center `}>
            <ProductCarousel products={productsOferta} />
          </div>
        </div>
      </div>
    </div>  



  )
}

export default Home