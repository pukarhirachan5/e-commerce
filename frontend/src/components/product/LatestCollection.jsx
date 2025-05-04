import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from '../../context/ShopContext'
import Title from '../Title';
import ProductItem from '../product/ProductItem';

const LatestCollection = () => {
    const { products} = useContext(ShopContext);
    const[latestProducts,setLatestProdects] = useState ([]);

    useEffect(()=>{
        setLatestProdects(products.slice(0,10));
    },[])
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'Latest'} text2={'Collection'} />
        <p className='w-3/4 m-auto text-xs sm;text-sm md:text-base text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis odit vitae saepe nisi quasi deleniti sunt quis illum eum ipsam, mollitia aperiam aut debitis aliquid consequuntur, eveniet dicta maxime voluptatum.</p>
      </div>

      {/* product display
       */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {
            latestProducts.map((item,index)=>(
              <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
            ))
          }
        </div>

    </div>
  )
}

export default LatestCollection