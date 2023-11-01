import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import React from 'react'

const Agricultural = () => {
  return (
    <>
    <Navbar/>
    <div className='mt-16 mb-8'>
      <div className='grid grid-cols-1 items-center lg:max-w-[35rem] max-w-lg mx-auto  '>
      <img src="https://images.pexels.com/photos/10804653/pexels-photo-10804653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="agricultural_image" className='shadow-lg object-cover transition transform scale-100 hover:scale-110' />
      </div>
      <div className=""><h1 className='text-3xl text-center mt-6   capitalize font-base font-bold '>Our Fasclilating Agricultural Lands</h1></div>
      <hr className="w-1/2 mx-auto my-4 font-bold" />
      <div className=" text-left lg:mx-[15rem] mx-6">
        Lorem, ipsum dolor sit amet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis dicta neque numquam maxime dolores libero placeat, aliquam quod voluptates eius. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dicta non, soluta consectetur excepturi quasi dolorum voluptatem! Rem corporis voluptatibus hic voluptatum facilis nostrum quo praesentium, amet necessitatibus, sit ducimus omnis earum tenetur, odio quidem optio saepe! Itaque odio cupiditate dolorem. Totam consectetur fugiat sapiente numquam pariatur magnam quam ducimus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, accusamus distinctio ullam commodi dolor qui officia. Dolorem deleniti esse assumenda atque maiores, sed doloremque eveniet? Fugiat iste, dolores veritatis repellendus tempora debitis provident animi error temporibus, magni numquam ipsam. Aliquid blanditiis dolore laudantium similique atque accusamus optio delectus iusto porro!
      </div>
    </div>
    <Footer/>
    </>
  )
  
}

export default Agricultural
