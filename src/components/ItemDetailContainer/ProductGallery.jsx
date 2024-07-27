import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from "../../context/CartContext"
import { ProductsContext } from '../../context/ProductsContext'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import ImageGallery from 'react-image-gallery'
import styles from './ProductGallery.module.scss'
import 'react-image-gallery/styles/scss/image-gallery.scss';




const ProductGallery = () => {
    const {products} = useContext(ProductsContext);
    // const [product, setProduct] = useState({})
    const [key, setKey] = useState(0);
    const { productId } = useParams();
    const selectedProducts = products.find(item => item.id === productId);

    useEffect(() => {

    }, [productId]);

    const isValidProduct = selectedProducts;
    const images = isValidProduct ? [
        {
            original: isValidProduct.img,
            thumbnail: isValidProduct.img,
            originalHeight: "350px",
            originalWidth: "350px",

        },
        {
            original: isValidProduct.img,
            thumbnail: isValidProduct.img,
            originalHeight: "350px",
            originalWidth: "350px",

        },
        {
            original: isValidProduct.img,
            thumbnail: isValidProduct.img,
            originalHeight: "450px",
            originalWidth: "450px",

        }
    ]
        : [];

    return (
        <div className={styles["gallery-container"]}>
        <div className={styles["gallery-wrapper"]}>
            <ImageGallery key={key} items={images} thumbnailPosition='top' 
              showBullets={false} // Oculta los indicadores
              showPlayButton={false} // Oculta el botón de reproducción (si aplicable)
              showFullscreenButton={false} // Oculta el botón de pantalla completa
              showNav={false}
             />
        </div>
    </div>
    )
}

export default ProductGallery




