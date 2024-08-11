import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light p-3 mb-2'>
        <div className='container-fluid fs-4'>
          <Link className='navbar-brand fs-2 fw-bold p-1 shadow' to='/getquestion'>IntPreparation</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to='/java' class="nav-link active" aria-current="page" >Home</Link>
              </li>
              <li class="nav-item">
                <Link to='/html' class="nav-link active" aria-current="page" >HTML</Link>
              </li>
              <li class="nav-item">
                <Link to='/css' class="nav-link active" aria-current="page" >CSS</Link>
              </li>
              <li class="nav-item">
                <Link to='/javascript' class="nav-link active" aria-current="page" >JavaScript</Link>
              </li>
              <li class="nav-item">
                <Link to='/mysql' class="nav-link active" aria-current="page" >MySQL</Link>
              </li>
              <li class="nav-item">
                <Link to='/mongodb' class="nav-link active" aria-current="page" >MongoDB</Link>
              </li>
              <li class="nav-item">
                <Link to='/setquestion' class="nav-link active" aria-current="page" >Upload Question</Link>
              </li>
            </ul>
          </div>

          {/* <Link to='/java'>Java</Link>
        <Link to='/html'>HTML</Link>
        <Link to='/css'>CSS</Link>
        <Link to='/javascript'>JavaScript</Link>
        <Link to='/mysql'>MySQL</Link>
        <Link to='/mongodb'>MongoDB</Link>
        <Link to='/getquestion'>Get Question</Link>
        <Link to='/setquestion'>Set Question</Link> */}
        </div>
      </nav>
    </div>

  )
}

export default Navbar