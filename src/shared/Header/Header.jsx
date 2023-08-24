import { Fragment } from 'react'
import ContainerLayout from '../../components/Container/ContainerLayout'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import useAuth from '../../hooks/useAuth'

const Header = () => {
  const { user} = useAuth()
  const navbarLink =
    <Fragment>
      <li><Link to="/" className='hover:bg-inherit'>Home</Link></li>
      <li><Link to="/instructors" className='hover:bg-inherit'>Instructors</Link></li>
      <li><Link to="/classes" className='hover:bg-inherit'>Classes</Link></li>
      <li><Link to="/blogs" className='hover:bg-inherit'>Blogs</Link></li>
      <li><Link to="/contact" className='hover:bg-inherit'>Contact</Link></li>
    </Fragment>

  return (
    <div className='bg-slate-800 nav-section z-10 border-b-2 border-gray-500 sticky top-0'>
      <ContainerLayout>
        <div className="navbar text-gray-500 md:text-white">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                {navbarLink}
              </ul>
            </div>
            <a><img src={Logo} className='w-32'></img></a>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-md uppercase">
              {navbarLink}
            </ul>
          </div>
        </div>
      </ContainerLayout>
    </div>

  )
}

export default Header