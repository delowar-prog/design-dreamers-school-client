import Logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <div className=''>
      <footer className="footer p-2 md:p-14 bg-gray-700 text-base-content flex flex-col sm:flex-row justify-between">
        <div>
          <img src={Logo} className="w-48 grayscale"></img>
        </div>
        <div className='text-white'>
          <span className="footer-title">Contact</span>
          <p className='text-md'>15/A Gausepak Bhaban <br /> Motijheel, Dhaka-1000</p>
          <p className='text-md'>Phone : +288 9653, +288 9652 <br /> Email : fds1990@hotmail.com </p>
        </div>
        <div className='text-white'>
          <span className="footer-title">Social Links</span>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Twitter</a>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">Youtube</a>
        </div>
        <div className='text-white'>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label ">
              <span className="label-text text-white">Enter your email address</span>
            </label>
            <div className="relative">
              <input type="text" placeholder="username@site.com" className="input input-bordered w-[50%] md:w-full md:pr-16" />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none text-sm mr-14 md:mr-0 lg:text-lg">Subscribe</button>
            </div>
          </div>
        </div>
      </footer>
      <div className='copyright bg-gray-600'>
          <p className='text-center text-white py-4 text-sm'>Copyright by Delowar&copy;2023</p>
      </div>
    </div>
  )
}

export default Footer