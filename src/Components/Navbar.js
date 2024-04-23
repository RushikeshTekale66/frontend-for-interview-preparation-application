import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light text-light bg-secondary p-3 mb-2'>
      <div className='container-fluid fs-3 '>
        <Link className='' to = '/getquestion'>Home</Link>
        <Link to = '/java'>Java</Link>
        <Link to = '/html'>HTML</Link>
        <Link to = '/css'>CSS</Link>
        <Link to = '/javascript'>JavaScript</Link>
        <Link to = '/mysql'>MySQL</Link>
        <Link to = '/mongodb'>MongoDB</Link>
        <Link to = '/getquestion'>Get Question</Link>
        <Link to = '/setquestion'>Set Question</Link>
        </div>
    </nav>

  )
}

export default Navbar