import React, { Fragment, useContext } from 'react'
import SectionTitleDeshboard from '../../../components/SectionTitle/SectionTitleDeshboard'
import { useForm } from 'react-hook-form';
import { FaUtensils } from "react-icons/fa"
import { AuthContext } from '../../../Provider/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
const AddClass = () => {
    const { user } = useContext(AuthContext)
   
    const [axiosSecure]=useAxiosSecure()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const image_upload_token = import.meta.env.VITE_image_upload_key
    const img_upload_url = `https://api.imgbb.com/1/upload?expiration=600&key=${image_upload_token}`
    const onSubmit = data => {
        console.log(data)
        const formData = new FormData()
        formData.append('image', data.image[0])
        fetch(img_upload_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(resImg => {
                if (resImg.success) {
                    const { name, seats, price,} = data
                    const imgUrl = resImg.data.display_url
                    const newClass = { name, instructor_name:user.displayName, email:user.email, available_seats:parseInt(seats), price: parseFloat(price), image: imgUrl }
                          axiosSecure.post(`/classes`, newClass)
                        .then(data => {
                            if (data.data.insertedId) {
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Class added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                              const addClassForm=document.getElementById('addClass')
                              addClassForm.reset() 
                            }
                        })
                }
            })
    }

    return (
        <Fragment>
            <div className='w-full'>
                <SectionTitleDeshboard heading={'Add Class'} subHeading={'Add a new class here'}></SectionTitleDeshboard>
            </div>
            <div className='w-[80%] my-10'>
                <form id="addClass" className="mx-auto w-[100%]" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-5">
                        <label className="label">
                            <span className="label-text font-semibold">Class name<span className='text-red-500'>*</span></span>
                        </label>
                        <input type="text" {...register("name", { required: true })} placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-5 my-5">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Instructor name</span>
                            </label>
                            <input type="text" value={user.displayName} readOnly placeholder="Type here" className="input input-bordered w-full bg-gray-200 text-gray-500" />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-semibold">Instructor Email</span>
                            </label>
                            <input type="text" placeholder="Type here" value={user.email} readOnly className="input input-bordered w-full bg-gray-200 text-gray-500" />
                        </div>
                    </div>
                    <div className='flex gap-5 my-5'>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-semibold">Available Seats <span className='text-red-500'>*</span></span>
                            </label>
                            <input type="text" placeholder="Type here" {...register("seats", { required: true })} className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-semibold">Price <span className='text-red-500'>*</span></span>
                            </label>
                            <input type="text" placeholder="Type here" {...register("price", { required: true })} className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className="my-5">
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered file-input-error w-full " />
                    </div>
                    <button className="btn btn-active flex gap-2 bg-indigo-600 hover:bg-indigo-700 border-0 text-white">Add Class</button>
                </form>
            </div>
        </Fragment>
    )
}

export default AddClass