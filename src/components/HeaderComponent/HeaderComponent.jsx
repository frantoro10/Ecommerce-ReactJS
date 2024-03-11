import React from 'react'
// import { useContext } from "react";
// import { CartContext } from "../../context/CartContext";
// Componentes
import CartModal from '../CartModal/CartModal';
import SearchBar from '../FiltersComponent/SearchBar';
// import LoginModal from '../LoginModal/LoginModal'
import NavBar from '../NavBar/NavBar'
// Styles
import { Link } from "react-router-dom";
import styles from './HeaderComponent.module.scss'


const HeaderComponent = () => {

    // const { cart, setCar t } = useContext(CartContext)

    return (
        <header className={`${styles.header} `}>
            <div className={` container-fluid `}>
                <div className={` row ${styles.headerContainer}`}>     
                    <div className={`  text-end col-md-3 d-none d-md-block  m-auto`}>
                        <Link to={"/"} className={` text-decoration-none  fs-1 text-white `}>
                            E-Shop
                        </Link>
                    </div>
                    {/* Navbar visible en pantalla pequeña */}
                    <div className={` col-3 d-md-none m-auto `}>
                        <NavBar className={``}/>
                    </div>
                    <div className={`   col-7 col-md-6 m-auto `}>
                        <SearchBar className={` w-100  `} />
                    </div>
                    <div className={` col-2 col-md-3 m-auto `}>
                        <CartModal className={`${styles.cartModal} `} />
                    </div>
                    {/* NavBar visible en pantalla grande */}
                </div>
                    <div className={` col-md-12 d-none d-md-block  `}>
                        <NavBar />
                    </div>
            </div>
        </header>
    )
}

export default HeaderComponent