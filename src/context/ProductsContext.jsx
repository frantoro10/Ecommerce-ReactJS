import React, { createContext, useContext, useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';


export const ProductsContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterProducts, setFilterProducts] = useState([]);
  // filtrado estado para sort y checkboxes
  const [filters, setFilters] = useState({
    selectedCheckboxes: {},
    selectedSortOption: ''
  });

  // useEffect para consumir base de datos de firestore

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, "products");

    getDocs(productsCollection)
      .then((snapshot) => {
        const productsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProducts(productsData);

        // Agrega un console.log para verificar el contenido de 'products'
        console.log('Productos cargados desde Firebase:', productsData);

        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  // useEffect para logica de filtrados consumiendo componentes "FiltersMenu" y "SortSelector"

  useEffect (() => {
    const applyFilters = () => {

      // array de filtrado utilizando al array original "products" con un (spread ...)
      let filtered = [...products];

      // Filtrar por categorías seleccionadas
      
      // selectedCategories tiene un valor de array con todas las keys del objeto que se encuentra dentro del objeto padre filters "filters.selectedCheckboxes". Creamos el array en base a las propiedades de ese objeto con el metodo Object.keys, luego a este array lo concatenamos "." con un metodo de array "filter" para filtrar todas las propiedades y luego avanzar con las condicionales de filtro.

      // Recordar que el valor de estas propiedades se sacan del componente "FiltersMenu" en el cual esta hecha la logica para obtener estas propiedades de objeto "KEYS", consumiendo el objeto "filters" proporcionado en este contexto.

      const selectedCategories = Object.keys(filters.selectedCheckboxes).filter(
          key => filters.selectedCheckboxes[key]
      );

      // Aqui se genera la condicional en base al array de keys. Si es mayor a 0 (Si existen valores), filtramos al array filtered (que tiene los valores de los productos {objetos}). Que se filtra?, se filtra en base al array selectedCategories usando el metodo .includes para filtrar los valores que coincidan con los valores de la propiedad .title || (o) .brand

      if (selectedCategories.length > 0) {
        filtered = filtered.filter(product =>
          selectedCategories.includes(product.title.toLowerCase()) ||
          selectedCategories.includes(product.brand.toLowerCase())
      );
      }

      // Iniciamos la siguiente logica de filtrado en base al componente "SortSelector"

      // Aplicar ordenamiento si hay una opción seleccionada.   
      if (filters.selectedSortOption === 'menorPrecio') {
          filtered.sort((a, b) => a.price - b.price);
      } else if (filters.selectedSortOption === 'mayorPrecio') {
          filtered.sort((a, b) => b.price - a.price);
      }

      // Actualizar el estado de los productos filtrados
      setFilterProducts(filtered);
  };

  applyFilters();
}, [products, filters]);

  return (
    <ProductsContext.Provider value={{ products, setProducts, loading, setLoading,filterProducts, setFilterProducts, filters, setFilters }}>
      {children}
    </ProductsContext.Provider>
  );
};





// Backup logica sin filtrados.

// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { getFirestore, collection, getDocs } from 'firebase/firestore';


// export const ProductsContext = createContext();

// export const ProductProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [filterProducts, setFilterProducts] = useState([]);
//   // filtrado
//   const [filters, setFilters] = useState({
//     selectedCheckboxes: {},
//     selectedSortOption: ''
//   });

//   useEffect(() => {
//     const db = getFirestore();
//     const productsCollection = collection(db, "products");

//     getDocs(productsCollection)
//       .then((snapshot) => {
//         const productsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//         setProducts(productsData);

//         // Agrega un console.log para verificar el contenido de 'products'
//         console.log('Productos cargados desde Firebase:', productsData);

//         setLoading(false);
//       })
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <ProductsContext.Provider value={{ products, setProducts, loading, setLoading,filterProducts, setFilterProducts, filters, setFilters }}>
//       {children}
//     </ProductsContext.Provider>
//   );
// };