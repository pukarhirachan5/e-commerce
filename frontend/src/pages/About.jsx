import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsLetterBox from '../components/home/NewsLetter'

const About = () => {
  return (
  <div>

    <div className='text-2xl text-center pt-8 border-t'>
      <Title text1="About" text2={'Us'} />
    </div>

    <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img src={assets.about_img} alt="" className='w-full md:max-w-[450px]' />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, tempore.
      </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, at? Iusto et modi eum magni esse minus perspiciatis nulla reprehenderit, tempora non rerum quisquam quaerat?</p>
      <b className='text-gray-800'>Our Mission</b>
      <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda reprehenderit autem cupiditate beatae sint corporis iste dolores illo quos suscipit!</p>
      </div>
    </div>

    <div className='text-xl py-4'>
      <Title text1={'Why'} text2={'Choose Us'} />
    </div>

    <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
        <b>Quality Assurance</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sequi obcaecati mollitia doloribus modi similique hic eos, odio atque non!</p>
      </div>
      <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
        <b>Convinence</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sequi obcaecati mollitia doloribus modi similique hic eos, odio atque non!</p>
      </div>
      <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
        <b>customer Service</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sequi obcaecati mollitia doloribus modi similique hic eos, odio atque non!</p>
      </div>
      
    </div>

    <NewsLetterBox />
  </div>
  )
}

export default About