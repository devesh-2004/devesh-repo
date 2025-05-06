import React from 'react'

const Header = () => {
  return (
    <>
    <div className="flex items-center text-2xl font-bold "> </div>
    <div className='flex gap-15 p-5 bg-gray-400 '>
    <div>
        <div className='font-bold ml-20'>CooKaro</div>
    </div>
    <div className='nav-bar flex gap-90 items-center justify-between ml-90'></div>
    <div className='cursor-pointer font-bold'>Home</div>
    <div className='cursor-pointer font-bold'>About</div>
    <div className='cursor-pointer font-bold'>Need Help ?</div>
    <button className='cursor-pointer rounded-2xl border-amber-900 bg-yellow-400 font-bold p-1'>Login/SignUp</button>
</div>
</>
  )
}

export default Header