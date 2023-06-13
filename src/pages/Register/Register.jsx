import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import ContainerLayout from "../../components/Container/ContainerLayout";
import Lottie from "lottie-react";
import animationLoginForm from "../../assets/140844-fashion-designer.json";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { registerUser, updateUserProfile, logoutUser } = useContext(AuthContext)
  const navigate = useNavigate()
  const [customError, setCustomError] = useState('')
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    if (data.password !== data.confirm) {
      setCustomError('Password & Confirm Password Not Matched')
    }
    registerUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user
        console.log(loggedUser)
        updateUserProfile(data.name, data.photo)
          .then(result => {
            const userData = { name: data.name, email: data.email }
            fetch('http://localhost:5000/users', {
              method: "POST",
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(userData)
            })
              .then(res => res.json())
              .then(data => {
                if (data.insertedId) {
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Registration completed successfully',
                    showConfirmButton: false,
                    timer: 1000
                  })
                  logoutUser().then(() => {
                    navigate('/login')
                  })
                }
              })

          })
      })
      .catch(error => {
        setCustomError(error.message)
      })

  }
  return (
    <div className='bg-base-100'>
      <Helmet><title>SCFDS || Register</title></Helmet>
      <ContainerLayout>
        <div className='flex flex-col lg:flex-row justify-around items-center gap-20' data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000">
          <div className="lg:w-[40%]">
            <div className="text-center lg:text-left">
              <Lottie animationData={animationLoginForm} loop={true} />
            </div>
          </div>
          <div className="bg-slate-800 lg:w-[80%]">
            <div className="hero-content flex-col">
              <h2 className='text-3xl font-bold text-white mt-5'>Register Here</h2>
              <div className="card flex-shrink-0 w-full shadow-3xl border">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="card-body text-white">

                    <div className="flex gap-5">
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text text-white">Name<span className="font-bold text-red-500"> *</span></span>
                        </label>
                        <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered text-gray-500" />
                        {errors.name && <span className="text-red-500">Name is required</span>}
                      </div>
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text text-white">Email <span className="font-bold text-red-500"> *</span></span>
                        </label>
                        <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered text-gray-500" />
                        {errors.email && <span className="text-red-500">Email is required</span>}
                      </div>
                    </div>
                    <div className="flex gap-5">
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text text-white">Phone</span>
                        </label>
                        <input type="text" {...register("phone")} placeholder="phone" className="input input-bordered text-gray-500" />
                      </div>
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text text-white">Address</span>
                        </label>
                        <input type="text" {...register("address")} placeholder="address" className="input input-bordered text-gray-500" />
                      </div>
                    </div>
                    <div className="flex gap-5">
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text text-white">Password <span className="font-bold text-red-500"> *</span></span>
                        </label>

                        <input type="password" {...register("password",
                          {
                            required: true,
                            minLength: 6,
                            pattern: {
                              value: /(?=.*[a-z])[a-z0-9]/,
                              message: 'Password holds at least one letter & one digit, Capital letter & Special characters are not allowed.',
                            },
                          })} placeholder="password" className="input input-bordered text-gray-500" />
                        {errors.password?.type === 'required' && <p role="alert" className="text-red-500">Password is required</p>}
                        {errors.password?.type === 'minLength' && <p role="alert" className="text-red-500">Password is at least 6 characters</p>}
                        {errors.password?.type === 'pattern' && <p role="alert" className="text-red-500">{errors.password.message}</p>}
                        <label className="label">
                          <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                        </label>
                      </div>
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text text-white">Confirm Password <span className="font-bold text-red-500"> *</span></span>
                        </label>
                        <input type="password" {...register("confirm", { required: true })} placeholder="confirm password" className="input input-bordered text-gray-500" />
                        {errors.confirm && <span className="text-red-500">Confirm Password is required</span>}
                        {
                          customError ? <span className="text-red-500">{customError}</span> : ''
                        }
                      </div>
                    </div>
                    <div className="flex gap-5">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-white">Photo Url <span className="font-bold text-red-500"> *</span></span>
                        </label>
                        <input type="text" {...register("photo", { required: true })} />
                        {errors.photo && <span className="text-red-500">Photo url is required</span>}
                      </div>
                      <div>
                        <label className="label">
                          <span className="label-text text-white">Gender <span className="font-bold text-red-500"> *</span></span>
                        </label>
                        <span className="flex items-center gap-2">
                          <input type="radio" {...register("gender", { required: true })} className="radio radio-accent radio-xs" value={'Male'} /> Male
                          <input type="radio" {...register("gender", { required: true })} className="radio radio-accent radio-xs" value={'Female'} />Female
                          <input type="radio" {...register("gender", { required: true })} className="radio radio-accent radio-xs" value={'Third'} />Third
                        </span>
                        {errors.gender && <span className="text-red-500">Gender is required</span>}
                      </div>
                    </div>
                    <div className="form-control mt-6">
                      <button type="submit" className="py-2 w-[100%] mx-auto text-white uppercase bg-cyan-500">Sign Up</button>
                    </div>
                    <p>If already have an Account? <Link to="/login" className="link link-info">Login</Link></p>
                  </div>
                </form>
              </div>
              <div className="divider">OR</div>
              <button type="submit" className="btn btn-outline border-gray-400 hover:bg-gray-300 hover:text-gray-800 gap-2">
                <FcGoogle className='text-xl'></FcGoogle>
                <span className="text-red-500">Continue with Google</span>
              </button>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </div>
  )
}

export default Register