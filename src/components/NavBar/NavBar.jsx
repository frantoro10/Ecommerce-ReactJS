// para practicar hook / estado
import { useState } from "react";
import { Link } from "react-router-dom";
// Componentes de bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Modal } from 'react-bootstrap';
// Styles                               
import styles from "./NavBar.module.scss"

const NavBar = () => {

  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  }


  return (
    <>
      {/* Modal boton hamburguesa en sm display */}
      <Modal show={showModal} onHide={handleToggleModal} className={` mt-5 d-md-none`} >
        <div className={`${styles.modalSm}`}>
          <Modal.Header closeButton>
            <Link to={"/"} className={`${styles.homeSm}`}><span>Go Home</span></Link>
          </Modal.Header>
          <Modal.Body>
            <div className={`d-md-none ${styles.navLiContainer}`}>
              <h3>Categorias:</h3>
              <ul className={``}>
                <li><Link to={"products"} className={``} >Productos</Link></li>
                <li><span className={`text-white`}>Ofertas de la semana</span></li>
                <li><Link to={"category/procesadores"} className={``} >Procesadores</Link></li>
                <li><Link to={"category/placas-de-video"} className={``} >Placas de video</Link></li>
                <li><Link to={"category/memorias"} className={``} > Memorias ram </Link></li>
              </ul>
            </div>
          </Modal.Body>
        </div>
      </Modal>

      {/* Boton hamburguesa que abre modal para pantallas pequeñas */}
      <Navbar expand="lg" className={`${styles.navBar}`}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggleModal
        } className={`d-block d-md-none ${styles.btnBurger}`} />

        {/* NavBar pantallas grandes */}
        <Container  >
          <div className={`${styles.navLgContainer} d-none d-md-block text-white `}>
            <div>
            <NavDropdown title="Categories" className={`${styles.navCategories } `}>
              <ul className={`${styles.ulNavLg}`}>
                <li><Link to={"category/procesadores"} className={`text-black`} >Procesadores</Link></li>
                <li><Link to={"category/placas-de-video"} className={`text-black`} >Placas de video</Link></li>
                <li><Link to={"category/memorias"} className={`text-black`} > Memorias ram </Link></li>
              </ul>
            </NavDropdown>
            </div>
            <span>
              <Link to={"products"}>Productos</Link>
            </span>
            <span style={{ color: "white" }}>Ofertas de la semanas
            </span>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

