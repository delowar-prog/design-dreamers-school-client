import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import Lottie from "lottie-react";
import animationLoginForm from "../../assets/140844-fashion-designer.json";

const Register = () => {
  return (
    <div className='bg-base-100'>
      <Container>
        <div className='flex flex-col lg:flex-row justify-around items-center gap-20' data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000">
          <div className="lg:w-[40%]">
            <div className="text-center lg:text-left">
              <Lottie animationData={animationLoginForm} loop={true} />
            </div>
          </div>
          <div className="bg-pink-600 lg:w-[80%]">
            <div className="hero-content flex-col">
              <h2 className='text-3xl font-bold text-white mt-5'>Register Here</h2>
              <div className="card flex-shrink-0 w-full shadow-3xl border">
                <form onSubmit="">
                  <div className="card-body text-white">

                    <div className="flex gap-5">
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text text-white">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" />
                      </div>
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text text-white">Email</span>
                        </label>
                        <input type="text" name="email" placeholder="email" className="input input-bordered" />
                      </div>
                    </div>
                    <div className="flex gap-5">
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text text-white">Phone</span>
                        </label>
                        <input type="text" name="phone" placeholder="phone" className="input input-bordered" />
                      </div>
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text text-white">Address</span>
                        </label>
                        <input type="text" name="address" placeholder="address" className="input input-bordered" />
                      </div>
                    </div>
                    <div className="flex gap-5">
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text text-white">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" />
                        <label className="label">
                          <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                        </label>
                      </div>
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text text-white">Confirm Password</span>
                        </label>
                        <input type="password" name="confirm" placeholder="confirm password" className="input input-bordered" />
                      </div>
                    </div>
                    <div className="flex gap-5">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-white">Photo Url</span>
                        </label>
                        <input type="file" name="photo" />
                      </div>
                      <div>
                        <label className="label">
                          <span className="label-text text-white">Gender</span>
                        </label>
                        <span className="flex items-center gap-2">
                          <input type="radio" name="radio-3" className="radio radio-accent" /> Male
                          <input type="radio" name="radio-3" className="radio radio-accent" />Female
                          <input type="radio" name="radio-3" className="radio radio-accent" />Third
                        </span>
                      </div>
                    </div>
                    <div className="form-control mt-6">
                      <button type="submit" className="py-2 w-[100%] mx-auto text-white uppercase bg-cyan-500">Sign In</button>
                    </div>
                    <p>If already have an Account? <Link to="/login" className="link link-info">Login</Link></p>
                  </div>
                </form>
              </div>
              <div className="divider">OR</div>
              <button onClick="" className="btn btn-outline border-gray-400 hover:bg-gray-300 hover:text-gray-800 gap-2">
                <FcGoogle className='text-xl'></FcGoogle>
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Register