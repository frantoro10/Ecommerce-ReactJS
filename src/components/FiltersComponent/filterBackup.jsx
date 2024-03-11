// import React from 'react'
// import styles from './FiltersMenu.module.scss'
// import { useState, useContext, useEffect } from 'react'
// import Modal from 'react-modal';
// import { ProductsContext } from '../../context/ProductsContext'



// const FiltersMenu = () => {
//     const [openModal, setOpenModal] = useState(false);
//     const { products, setFilterProducts } = useContext(ProductsContext)

//     const [selectedCheckBoxes, setSelectedCheckBoxes] = useState({});


//     const filterCategory = (e) => {
//         const category = e.target.value.toLowerCase();
//         const isChecked = e.target.checked;

//         // Actualiza el estado de los checkbox seleccionados
//         setSelectedCheckBoxes((prevState) => ({
//             ...prevState,
//             [category]: isChecked,
//         }));
//     };

//     const handleShow = () => {
//         setOpenModal(true);
//     }

//     const handleClose = () => {
//         setOpenModal(false);
//     }

//     const closeButtonStyle = {
//         position: 'absolute',
//         top: '10px',
//         right: '10px',
//         cursor: 'pointer'
//     };

//     useEffect(() => {
//         // Filtra los productos según los checkbox seleccionados
//         const filteredProducts = products.filter((item) => {
//             if (Object.keys(selectedCheckBoxes).length === 0) {
//                 // Si no hay ningún checkbox seleccionado, muestra todos los productos
//                 return true;
//             }
            // return selectedCheckBoxes[item.title.toLowerCase()] || selectedCheckBoxes[item.brand.toLowerCase()];
//         });

//         setFilterProducts(filteredProducts);
//         console.log(filteredProducts)
//     }, [selectedCheckBoxes, setFilterProducts, products]);


//     return (
//         <>
//             <div className={`${styles["filter-menu"]} d-none d-md-block `}>
//                 <h2 className='fs-3'>Filtrar</h2>
//                 <div>
//                     <h3>Componente</h3>
//                     {/* Primer Filtro por Marca */}
//                     <ul>
//                         <li>
//                             <label>
//                                 <input type="checkbox" name="category" value="placa de video" onChange={filterCategory} checked={selectedCheckBoxes['placa de video'] || false} />
//                                 Placas de video
//                             </label>
//                         </li>
//                         <li>
//                             <label>
//                                 <input type="checkbox" name="category" value="procesador" onChange={filterCategory} checked={selectedCheckBoxes['procesador'] || false} />
//                                 Procesadores
//                             </label>
//                         </li>
//                         <li>
//                             <label>
//                                 <input type="checkbox" name="category" value="memoria ram" onChange={filterCategory} checked={selectedCheckBoxes['memoria ram'] || false} />
//                                 Memorias Ram
//                             </label>
//                         </li>
//                     </ul>
//                     {/* Segundo filtro por modelo */}
//                     <h3>Marca</h3>
//                     <ul>
//                         <li>
//                             <label>
//                                 <input type="checkbox" name="brand" value="amd" onChange={filterCategory} checked={selectedCheckBoxes['amd'] || false} />
//                                 AMD
//                             </label>
//                         </li>
//                         <li>
//                             <label>
//                                 <input type="checkbox" name="brand" value="nvidia" onChange={filterCategory} checked={selectedCheckBoxes['nvidia'] || false} />
//                                 Nvidia
//                             </label>
//                         </li>
//                         <li>
//                             <label>
//                                 <input type="checkbox" name="brand" value="corsair" onChange={filterCategory} checked={selectedCheckBoxes['corsair'] || false} />
//                                 Corsair
//                             </label>
//                         </li>
//                         <li>
//                             <label>
//                                 <input type="checkbox" name="brand" value="intel" onChange={filterCategory} checked={selectedCheckBoxes['intel'] || false} />
//                                 Intel
//                             </label>
//                         </li>
//                         <li>
//                             <label>
//                                 <input type="checkbox" name="brand" value="adata" onChange={filterCategory} checked={selectedCheckBoxes['adata'] || false} />
//                                 Adata
//                             </label>
//                         </li>
//                     </ul>
//                 </div>

//                 <div>
//                     <h3>Precio</h3>
//                     <input type="range" min="0" max="1000" step="10" value="900" id="precio-slider" />
//                     <span id="precio-value">$50</span>
//                 </div>
//             </div>

//             {/* Modal SM  */}

//             {/* Open Modal */}
//             <div className='text-center d-block d-md-none my-3'>
//                 <span onClick={handleShow} className={`${styles["filter-button"]}`}>Filtrar por:</span>
//             </div>
//             {/* Modal */}
//             <Modal isOpen={openModal}   >
//                 <button onClick={handleClose} style={closeButtonStyle}>
//                     X
//                 </button>
//                 <div className={styles['filter-menu']}>
//                     <h2 className='fs-3'>Filtrar</h2>
//                     <div>
//                         <h3>Componente</h3>
//                         {/* Primer Filtro por Marca */}
//                         <ul>
//                             <li>
//                                 <label>
//                                     <input type="checkbox" name="category" value="placa de video" onChange={filterCategory} checked={selectedCheckBoxes['placa de video'] || false} />
//                                     Placas de video
//                                 </label>
//                             </li>
//                             <li>
//                                 <label>
//                                     <input type="checkbox" name="category" value="procesador" onChange={filterCategory} checked={selectedCheckBoxes['procesador'] || false} />
//                                     Procesadores
//                                 </label>
//                             </li>
//                             <li>
//                                 <label>
//                                     <input type="checkbox" name="category" value="memoria ram" onChange={filterCategory} checked={selectedCheckBoxes['memoria ram'] || false} />
//                                     Memorias Ram
//                                 </label>
//                             </li>
//                         </ul>
//                         {/* Segundo filtro por modelo */}
//                         <h3>Marca</h3>
//                         <ul>
//                             <li>
//                                 <label>
//                                     <input type="checkbox" name="brand" value="amd" onChange={filterCategory} checked={selectedCheckBoxes['amd'] || false} />
//                                     AMD
//                                 </label>
//                             </li>
//                             <li>
//                                 <label>
//                                     <input type="checkbox" name="brand" value="nvidia" onChange={filterCategory} checked={selectedCheckBoxes['nvidia'] || false} />
//                                     Nvidia
//                                 </label>
//                             </li>
//                             <li>
//                                 <label>
//                                     <input type="checkbox" name="brand" value="corsair" onChange={filterCategory} checked={selectedCheckBoxes['corsair'] || false} />
//                                     Corsair
//                                 </label>
//                             </li>
//                             <li>
//                                 <label>
//                                     <input type="checkbox" name="brand" value="intel" onChange={filterCategory} checked={selectedCheckBoxes['intel'] || false} />
//                                     Intel
//                                 </label>
//                             </li>
//                             <li>
//                                 <label>
//                                     <input type="checkbox" name="brand" value="adata" onChange={filterCategory} checked={selectedCheckBoxes['adata'] || false} />
//                                     Adata
//                                 </label>
//                             </li>
//                         </ul>
//                     </div>

//                     <div>
//                         <h3>Precio</h3>
//                         <input type="range" min="0" max="1000" step="10" value="900" id="precio-slider" />
//                         <span id="precio-value">$50</span>
//                     </div>
//                 </div>
//             </Modal>
//         </>
//     )
// }

// export default FiltersMenu