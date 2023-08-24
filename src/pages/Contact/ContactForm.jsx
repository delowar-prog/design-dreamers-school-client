import React from 'react'

const ContactForm = () => {
    return (
        <div className='w-[60%]'>
            <h1 className='text-xl uppercase text-gray-300 font-bold mb-5'>SEND YOUR MASSAGE</h1>
            <form>
                <div className="flex w-[100%] gap-5 justify-between">
                    <div className='w-full'>
                        <label className="label text-white">Name</label>
                        <input type="text" placeholder="Type your name" className="input input-bordered w-full" />
                    </div>
                    <div className='w-full'>
                        <label className="label text-white">Email</label>
                        <input type="text" placeholder="Type your email" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className='w-[100%]'>
                    <label className="label text-white">Message</label>
                    <textarea className="textarea w-full" placeholder="Your message" rows={3}></textarea>
                </div>
                <div className='mt-3'>
                    <button className='px-5 py-2 bg-slate-900 hover:bg-slate-800 uppercase text-white'>Send Message</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm