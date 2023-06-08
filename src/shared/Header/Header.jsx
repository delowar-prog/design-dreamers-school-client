import { Fragment, useContext } from 'react'
import Container from '../../components/Container/Container'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../provider/AuthProvider'

const Header = () => {
  const { user, logoutUser } = useContext(AuthContext)
  const handleLogout=()=>{
    logoutUser()
    .then()
  }
  const navbarLink =
    <Fragment>
      <li><Link to="/" className='hover:bg-inherit'>Home</Link></li>
      <li><Link to="/instructors" className='hover:bg-inherit'>Instructors</Link></li>
      <li><Link to="/classes" className='hover:bg-inherit'>Classes</Link></li>
      {
        user ? <Fragment>
        <li><Link to="/dashboard" className='hover:bg-inherit'>Dashboard</Link></li>
        <li className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>
          <ul tabIndex={0} className="text-white menu menu-sm dropdown-content p-2 shadow bg-pink-700 border rounded-box w-36">
            <li>
              <a className="justify-between">
                Profile
              </a>
            </li>
            <li><button type='submit' onClick={handleLogout}>Logout</button></li>
          </ul>
        </li>
        </Fragment>:<li><Link to="/login" className='hover:bg-inherit'>Login</Link></li>
      }
    </Fragment>

  return (
    <div className='bg-pink-700 nav-section py-2 z-10 border-b-4 border-gray-500 sticky top-0'>
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