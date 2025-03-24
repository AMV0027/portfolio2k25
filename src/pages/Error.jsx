import React from 'react'

function Error() {
    return (
        <div className='min-h-screen bg-black flex flex-col justify-center items-center'>
            <h1 className='text-4xl text-transparent bg-gradient-to-tr from-zinc-500 to-blue-500 bg-clip-text font-semibold font-poppins'>Page not available</h1>
            <a href="/" className='bg-blue-500 p-1 text-xl font-poppins rounded-xl w-44 text-center mt-4'>
                Go to Home
            </a>
        </div>
    )
}

export default Error