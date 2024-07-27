import React from 'react';
import Modal from 'react-modal';
import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import styles from './CartModal.module.scss'
import { CartContext } from "../../context/CartContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons'


const CartModal = () => {

  const [openModal, setOpenModal] = useState(false);
  const { cartProducts, setCartProducts } = useContext(CartContext);
  const [selectedCount, setSelectedCount] = useState(1);

  const priceCart = () => {
    let price = 0;
    cartProducts.forEach((item) => {
      price += item.price;
    });
    return price
  };

  const handleShow = () => {
    setOpenModal(true);
  }

  const handleClose = () => {
    setOpenModal(false);
  }
  const handleRemoveProduct = (indexToRemove) => {
    console.log("Eliminar producto con ID:", indexToRemove);
    const updatedCart = cartProducts.filter((_, index) => index !== indexToRemove)
    setCartProducts(updatedCart);

  }

  useEffect(() => {
    console.log("producto agregado")

  }, [cartProducts]);


  return (
    <>

      {<div>
        <FontAwesomeIcon icon={faCartShopping} class="fa-xs" style={{ color: "#eaecf1", width: "30" }} onClick={handleShow} />
      </div>}

      <Modal isOpen={openModal}
        className={`${styles.modal}`} >
        <div className={`${styles.modalContainer}`}>
          {cartProducts.length === 0 ? (<p>No hay productos en su carrito</p>) : (cartProducts.map((item) => {

            return (
              <div key={item} className={`${styles.modalProduct} `}>
                <div className={styles.modalImg}>
                  <img src={item.img} alt="Error en cargar la imagen" />
                </div>
                <div className={styles.modalText}>
                  <span ><strong>{item.version}
                  </strong>
                  </span>
                  <span>Precio: ${item.price}</span>
                  <span>Cantidad: {item.quantify}</span>
                  <span><FontAwesomeIcon icon={faTrash} style={{ color: "#0d0c0c", }} size="lg" onClick={() => handleRemoveProduct(cartProducts.indexOf(item))} /> </span>

                </div>
              </div>
            )

          }))}
        </div>
        <span className='fs-4 ms-3'>
          Total: ${priceCart()}
        </span>
        <div>
          <button onClick={handleClose} style={{ margin: "1em 1em" }}> Volver </button>
          <button>Comprar</button>
          {/* <button><Link to={"/shoppingCart"}>Comprar</Link></button> */}
        </div>
      </Modal>

    </>
  )
}

export default CartModal



