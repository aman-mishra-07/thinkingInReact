import React from 'react'
import { PRODUCTS } from './products.js'
import FilterableProductTable from '../components/FilterableProductTable.jsx'

const Home = () => {

  return (
    <div className='w-full h-screen px-10 py-5 space-y-4 bg-zinc-800 text-white'>
      <h1 className='text-4xl font-semibold'>Home Page</h1>
     <FilterableProductTable products={PRODUCTS}/>
    </div>
  )
}

export default Home
