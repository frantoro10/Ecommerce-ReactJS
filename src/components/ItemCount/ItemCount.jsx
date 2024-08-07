import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { CartContext } from "../../context/CartContext"
import { useParams } from 'react-router-dom'
import styles from './ItemCount.module.scss'


const ItemCount = ({ onCountChange }) => {
    const [count, setCount] = useState(1);
  
    const handleAddProduct = () => {
      setCount(count + 1);
    }
  
    const handleRemoveProduct = () => {
      if (count > 1) {
        setCount(count - 1);
      }
    }
  
    useEffect(() => {
      onCountChange(count);
    }, [count, onCountChange]);
  
    return (
      <div>
        <button onClick={handleRemoveProduct} className={`${styles["subtract-button"]}`}>-</button>
        {count}
        <button onClick={handleAddProduct} className={`${styles["add-button"]}`} >+</button>
      </div>
    )
  }
  
  export default ItemCount;

// const existingProductIndex = cartProducts.findIndex((item) => item.id === productData.id);

// if (existingProductIndex !== -1) {
//     const updatedCartProducts = [...cartProducts];
//     updatedCartProducts[existingProductIndex].price += productData.price;
//     updatedCartProducts[existingProductIndex].quantify += productData.quantify;
//     setCartProducts(updatedCartProducts);
// } else {
//     setCartProducts([...cartProducts, { ...productData }]);
// }