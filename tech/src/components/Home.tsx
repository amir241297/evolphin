import React from 'react'

const Home = () => {
    return (
        <div className='lg:flex md:grid m-auto mt-24 mb-24 w-3/4'>
            <div className='lg:w-2/4 md:w-4/4 p-10'>
                <span className='flex'>
                    <h1 className='text-4xl text-left'>Searching for<h1 className='font-semibold'>Augmented Development</h1>Teams to steer your product towards your product towards triumph?"</h1>
                </span>
                <div className='flex justify-between mt-10'>
                    <div className='w-32'>
                        <h1 className='font-bold text-4xl text-left'>50+</h1>
                        <p className='text-s text-gray-300 text-left'>Clients</p>
                    </div>
                    <div className='w-1/3'>
                        <h1 className='text-4xl font-bold text-left'>80+</h1>
                        <p className='text-s text-left text-gray-300'>Projects successfully completed</p>
                    </div>
                    <div className='w-1/2'>
                        <h1 className='font-bold text-4xl text-left'>60%</h1>
                        <p className='text-s text-left text-gray-300'>of the clients converted into long term engagement partners</p>
                    </div>
                </div>
            </div>

            <div className='lg:w-2/4 md:w-4/4 bg-white p-10 rounded-2xl'>
                <form action="" className='grid'>
                    <h1 className='text-3xl text-black font-semibold text-left mt-5'>Fill out the form.</h1>
                    <p className='text-lg text-left text-gray-800 mt-2'>Our team will touch with you within 24 hours.</p>
                    <div className='flex justify-between p-2 mt-5'>
                        <input type="text" placeholder='Full Name*' className='border-b-2 border-black focus:outline-none'/>
                        <input type="mail" placeholder='Email ID*' className='border-b-2 border-black focus:outline-none'/>
                    </div>
                    <div className='flex justify-between p-2 mt-5'>
                        <input type="text" placeholder='Country' className='border-b-2 border-black focus:outline-none'/>
                        <input type="number" placeholder='Contact Number' className='border-b-2 border-black focus:outline-none' />
                    </div>
                    <input type="text" placeholder='Tell us about your requirements*' className='border-b-2 border-black p-2 w-100 mt-5 focus:outline-none'/>
                    <input type="submit" value={"Submit"} className='text-white mt-5 bg-gray-600 w-24 p-1 rounded-3xl font-semibold cursor-pointer'/>
                </form>
            </div>
        </div>
    )
}

export default Home