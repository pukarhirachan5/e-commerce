import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../components/home/NewsLetter'

const Contact = () => {
  return (
  <div>


    <div className='text-center text-2xl pt-10 border-t'>
      <Title text1={'Contact'} text2={'Us'} />
    </div>

    <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
      <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
      <div className='flex flex-col justify-center items-start gap-6'>
        <p className='font-semibold text-xl text-gray-600'>Our Store</p>
        <p className='text-gray-500'>kapan,katmandu</p>
        <p className='text-gray-500'>Tel:+97785548558 <br />email:78855@gmail.com</p>
        <p className='font-semibold text-xl text-gray-600'>careers at forever</p>
        <p className='text-gray-500'>  Learn More</p>
        <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Us</button>
      </div>
    </div>
    <NewsLetter />

  </div>  
  )
}

export default Contact