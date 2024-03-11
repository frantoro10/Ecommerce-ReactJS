import React from 'react'
import styles from './FiltersMenu.module.scss'
import { useState, useContext, useEffect } from 'react'
import Modal from 'react-modal';
import { ProductsContext } from '../../context/ProductsContext'



const FiltersMenu = () => {
    const [openModal, setOpenModal] = useState(false);
    const { filters, setFilters } = useContext(ProductsContext) 

    const filterCategory = (e) => {
        const { name, value, checked } = e.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            selectedCheckboxes: {
                ...prevFilters.selectedCheckboxes,
                [value]: checked
            }
        }));
    };


    const handleShow = () => {
        setOpenModal(true);
    }

    const handleClose = () => {
        setOpenModal(false);
    }

    const closeButtonStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        cursor: 'pointer'
    };

   useEffect(() => {

   }, [filters.selectedCheckboxes]);


    return (
        <>
            <div className={`${styles["filter-menu"]} d-none d-md-block `}>
                <h2 className='fs-3'>Filtrar</h2>
                <div>
                    <h3>Componente</h3>
                    {/* Primer Filtro por Marca */}
                    <ul>
                        <li>
                            <label>
                                <input type="checkbox" name="category" value="placa de video" onChange={filterCategory} checked={filters.selectedCheckboxes['placa de video'] || false} />
                                Placas de video
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" name="category" value="procesador" onChange={filterCategory} checked={filters.selectedCheckboxes['procesador'] || false} />
                                Procesadores
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" name="category" value="memoria ram" onChange={filterCategory} checked={filters.selectedCheckboxes['memoria ram'] || false} />
                                Memorias Ram
                            </label>
                        </li>
                    </ul>
                    {/* Segundo filtro por modelo */}
                    <h3>Marca</h3>
                    <ul>
                        <li>
                            <label>
                                <input type="checkbox" name="brand" value="amd" onChange={filterCategory} checked={filters.selectedCheckboxes['amd'] || false} />
                                AMD
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" name="brand" value="nvidia" onChange={filterCategory} checked={filters.selectedCheckboxes['nvidia'] || false} />
                                Nvidia
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" name="brand" value="corsair" onChange={filterCategory} checked={filters.selectedCheckboxes['corsair'] || false} />
                                Corsair
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" name="brand" value="intel" onChange={filterCategory} checked={filters.selectedCheckboxes['intel'] || false} />
                                Intel
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" name="brand" value="adata" onChange={filterCategory} checked={filters.selectedCheckboxes['adata'] || false} />
                                Adata
                            </label>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3>Precio</h3>
                    <input type="range" min="0" max="1000" step="10" value="900" id="precio-slider" />
                    <span id="precio-value">$50</span>
                </div>
            </div>

            {/* Modal SM  */}

            {/* Open Modal */}
            <div className='text-center d-block d-md-none my-3'>
                <span onClick={handleShow} className={`${styles["filter-button"]}`}>Filtrar por:</span>
            </div>
            {/* Modal */}
            <Modal isOpen={openModal}   >
                <button onClick={handleClose} style={closeButtonStyle}>
                    X
                </button>
                <div className={styles['filter-menu']}>
                    <h2 className='fs-3'>Filtrar</h2>
                    <div>
                        <h3>Componente</h3>
                        {/* Primer Filtro por Marca */}
                        <ul>
                            <li>
                                <label>
                                    <input type="checkbox" name="category" value="placa de video" onChange={filterCategory} checked={filters.selectedCheckboxes['placa de video'] || false} />
                                    Placas de video
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" name="category" value="procesador" onChange={filterCategory} checked={filters.selectedCheckboxes['procesador'] || false} />
                                    Procesadores
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" name="category" value="memoria ram" onChange={filterCategory} checked={filters.selectedCheckboxes['memoria ram'] || false} />
                                    Memorias Ram
                                </label>
                            </li>
                        </ul>
                        {/* Segundo filtro por modelo */}
                        <h3>Marca</h3>
                        <ul>
                            <li>
                                <label>
                                    <input type="checkbox" name="brand" value="amd" onChange={filterCategory} checked={filters.selectedCheckboxes['amd'] || false} />
                                    AMD
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" name="brand" value="nvidia" onChange={filterCategory} checked={filters.selectedCheckboxes['nvidia'] || false} />
                                    Nvidia
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" name="brand" value="corsair" onChange={filterCategory} checked={filters.selectedCheckboxes['corsair'] || false} />
                                    Corsair
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" name="brand" value="intel" onChange={filterCategory} checked={filters.selectedCheckboxes['intel'] || false} />
                                    Intel
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" name="brand" value="adata" onChange={filterCategory} checked={filters.selectedCheckboxes['adata'] || false} />
                                    Adata
                                </label>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3>Precio</h3>
                        <input type="range" min="0" max="1000" step="10" value="900" id="precio-slider" />
                        <span id="precio-value">$50</span>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default FiltersMenu