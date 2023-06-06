import { Fragment } from 'react'
import Container from '../../components/Container/Container'
import { Link } from 'react-router-dom'

const Header = () => {
  const navbarLink =
    <Fragment>
      <li><Link to="/" className='hover:bg-inherit'>Home</Link></li>
      <li><Link to="/instructors" className='hover:bg-inherit'>Instructors</Link></li>
      <li><Link to="/classes" className='hover:bg-inherit'>Classes</Link></li>
      <li><Link to="/dashboard" className='hover:bg-inherit'>Dashboard</Link></li>
      <li><Link to="/picture" className='hover:bg-inherit'>Picture</Link></li>
      <li><Link to="/login" className='hover:bg-inherit'>Login</Link></li>
    </Fragment>

  return (
    <div className='bg-pink-700 nav-section py-2 z-10 sticky'>
    <Container>
      <div className="navbar text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navbarLink}
            </ul>
          </div>
          <a><h2 className='text-xl text-center'>Summer camp fashion<br /> design school</h2></a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-md">
            {navbarLink}
          </ul>
        </div>
      </div>
    </Container>
    </div>
    
  )
}

export default Header