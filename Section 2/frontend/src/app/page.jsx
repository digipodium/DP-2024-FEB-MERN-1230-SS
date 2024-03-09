import Link from 'next/link';
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1 style={{ color : 'red', textAlign: 'center', fontSize: 70 }}>Welcome to Home Page</h1>

      <button className='my-btn'>My button</button>

      <button className='btn btn-primary'>Login Button</button>

      <hr />
      <img src="" alt="" />
      <input type="text" />
      <br />

      <Link href="/login">Login</Link>
      <Link href="/signup">Signup</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/about">About</Link>

    </div>
  )
}

export default Home;