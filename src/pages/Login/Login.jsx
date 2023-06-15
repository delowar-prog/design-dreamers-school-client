import { Link, useLocation, useNavigate } from "react-router-dom";
import ContainerLayout from "../../components/Container/ContainerLayout";
import Lottie from "lottie-react";
import animationLoginForm from "../../assets/140844-fashion-designer.json";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import SocialLogin from "./SocialLogin";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const [show, setShow]=useState(false)
  const navigate=useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const {loginUserWithPass}=useContext(AuthContext)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    loginUserWithPass(data.email,data.password)
    .then(result=>{
      return navigate(from, { replace: true })
    })
  }
  return (
    <div className='bg-base-100'>
    <Helmet><title>SCFDS || Login</title></Helmet>
      <ContainerLayout>
        <div className='flex flex-col lg:flex-row justify-around items-center gap-20' data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000">
          <div className="lg:w-[40%]">
            <div className="text-center lg:text-left">
            <Lottie animationData={animationLoginForm} loop={true} />
            </div>
          </div>
          <div className="bg-slate-800 lg:w-[30%]">
            <div className="hero-content flex-col">
              <h2 className='text-3xl font-bold text-white mt-5'>Login Now</h2>
              <div className="card flex-shrink-0 w-full shadow-3xl border">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white">Email</span>
                      </label>
                      <input type="text" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                      {errors.email && <span className="text-red-500">Email is required</span>}
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white">Password</span>
                      </label>
                      <input type={show?"text":'password'} {...register("password", { required: true })} placeholder="password" className="input input-bordered" />
                      {errors.password && <span className="text-red-500">password is required</span>}

                     <p onClick={()=>setShow(!show)}>
                        <small>
                          {
                            show?<span  className="text-cyan-600 cursor-pointer">Hide Password</span>:<span className="text-white cursor-pointer">Show Password</span>
                          }
                        </small>
                     </p>
                    </div>
                    <div className="form-control mt-6">
                      <button type="submit" className="py-2 w-[100%] mx-auto text-white uppercase bg-cyan-500">Login</button>
                    </div>
                    <p className="text-white">Create an Account? <Link to="/register" className="link link-info">Sign up</Link></p>
                  </div>
                </form>
              </div>
              <div className="divider">OR</div>
             <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </div>
  )
}

export default Login