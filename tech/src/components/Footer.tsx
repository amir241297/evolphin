import React from 'react'

const Footer = () => {
    type obj={
        img:string
    }
    let array:obj[]=[
        {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFuq0sZs0WCtel8Bbu-VHMG7g_CXvy0DxFSA&usqp=CAU"},
        {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFuq0sZs0WCtel8Bbu-VHMG7g_CXvy0DxFSA&usqp=CAU"},
        {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFuq0sZs0WCtel8Bbu-VHMG7g_CXvy0DxFSA&usqp=CAU"},
        {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFuq0sZs0WCtel8Bbu-VHMG7g_CXvy0DxFSA&usqp=CAU"},
        {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFuq0sZs0WCtel8Bbu-VHMG7g_CXvy0DxFSA&usqp=CAU"},
        {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFuq0sZs0WCtel8Bbu-VHMG7g_CXvy0DxFSA&usqp=CAU"},
        {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFuq0sZs0WCtel8Bbu-VHMG7g_CXvy0DxFSA&usqp=CAU"},
        {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFuq0sZs0WCtel8Bbu-VHMG7g_CXvy0DxFSA&usqp=CAU"},
        {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFuq0sZs0WCtel8Bbu-VHMG7g_CXvy0DxFSA&usqp=CAU"},
        {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFuq0sZs0WCtel8Bbu-VHMG7g_CXvy0DxFSA&usqp=CAU"},
        {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFuq0sZs0WCtel8Bbu-VHMG7g_CXvy0DxFSA&usqp=CAU"},
        {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFuq0sZs0WCtel8Bbu-VHMG7g_CXvy0DxFSA&usqp=CAU"},
    ]
  return (
    <div className='w-4/4'>
        <p>Loading the charge of industries!</p>
        <div className='flex m-auto'>
        {
           array.map((ele)=>(
             <img src={ele.img} alt="" className='lg:w-24 sm:w-8 rounded-full mr-8'/>
           )) 
        }
        </div>
    </div>
  )
}

export default Footer