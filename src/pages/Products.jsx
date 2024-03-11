import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import FiltersMenu from '../components/FiltersComponent/FiltersMenu'
import SortSelector from "../components/FiltersComponent/SortSelector";
import styles from './Products.module.scss'
import { useContext } from 'react'
import { ProductsContext } from '../context/ProductsContext'
import { useNavigate } from 'react-router-dom'



const Products = () => {

  const { products, loading, filterProducts } = useContext(ProductsContext)


  return (
    <div className={`container my-2 `} >
      <div className={`row justify-content-center`} >
        {/* Filtros desde MD */}
        <div className={`  d-md-block d-none col-md-2  `}>
          <div className=' '>
            <SortSelector />
          </div>
          <div className=''>
            <FiltersMenu className={``} />
          </div>
        </div>
        {/* Filtros desde SM */}
        <div className={` d-flex align-items-center justify-content-center d-block d-md-none`}>
          <div className='me-4'>
            <FiltersMenu className={``} />
          </div>
          <div className=''>
            <SortSelector />
          </div>
        </div>
        <div className={` col-md-10 `}>
          {filterProducts.length > 0 ? (
            <ItemListContainer productsData={filterProducts} />
          ) : (
            <ItemListContainer productsData={products} />
          )}
        </div>
      </div>
    </div>

  )
}

export default Products

{/* <div className={`  col-md-2 d-flex align-items-center justify-content-center d-block d-md-none`}>
          <div className='border me-4'>
            <SortSelector />
          </div>
          <div className='border'>
            <FiltersMenu className={``} />
          </div>
        </div> */}