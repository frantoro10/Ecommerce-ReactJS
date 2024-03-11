import React from 'react'
import styles from './SortSelector.module.scss';
import { useState, useEffect, useContext } from 'react';
import { ProductsContext } from '../../context/ProductsContext'

const SortSelector = () => {

    const { filters, setFilters } = useContext(ProductsContext);

    // Modificador de estado filters del contexto
    const handleSortChange = (e) => {
        const selectedSortOption = e.target.value;
        setFilters({ ...filters, selectedSortOption });
    };

    useEffect(() => {
        console.log("La opción de ordenamiento ha cambiado:", filters.selectedSortOption);
    }, [filters.selectedSortOption]);

    return (
        <div>
            <select value={filters.selectedSortOption} onChange={handleSortChange}>
                <option value="">Ordenar por</option>
                <option value="menorPrecio"> Menor precio </option>
                <option value="mayorPrecio"> Mayor precio </option>
            </select>

        </div>

    )
}

export default SortSelector



// BACKUP

// import React from 'react'
// import styles from './SortSelector.module.scss';
// import { useState, useEffect, useContext } from 'react';
// import { ProductsContext } from '../../context/ProductsContext'

// const SortSelector = () => {

//     const { products, setFilterProducts, filters, setFilters } = useContext(ProductsContext);
//     const [selectedSortOption, setSelectedSortOption] = useState('');

//     // Modificador de estado.
//     const handleSortChange = (e) => {
//         setSelectedSortOption(e.target.value);
//         setFilters({...filters, selectedSortOption});
//     }

//     useEffect(() => {
//         const filteredProducts = [...products];
//         if (selectedSortOption === 'menorPrecio') {
//             filteredProducts.sort((a, b) => a.price - b.price);
//         } else if (selectedSortOption === 'mayorPrecio') {
//             filteredProducts.sort((a, b) => b.price - a.price)
//         };
//         setFilterProducts(filteredProducts);
//     }, [selectedSortOption]);

//     return (
//         <div>
//             <select value={selectedSortOption} onChange={handleSortChange}>
//                 <option value="">Ordenar por</option>
//                 <option value="menorPrecio"> Menor precio </option>
//                 <option value="mayorPrecio"> Mayor precio </option>
//             </select>

//         </div>

//     )
// }

// export default SortSelector