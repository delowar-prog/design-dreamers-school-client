import { Fragment, useRef } from 'react'
import Swal from 'sweetalert2'

const Modal = ({ item }) => {
    const token=localStorage.getItem('user_access_key')
    const feedback = useRef()
    const handleFeedback = (item) => {
        const feedMsg = {feedback:feedback.current.value}
        fetch(`https://summer-camp-fashion-design-server.vercel.app/admin/feedback/${item._id}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${token}`
            },
            body:JSON.stringify(feedMsg)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Feedback send successfully`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <Fragment>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <form>
                        <div>
                            <textarea cols={50} rows={5} ref={feedback} name="feedback" className="w-[100%] textarea textarea-secondary" placeholder="Type Feedback Message Here"></textarea>
                        </div>
                        <div className="modal-action">
                            <label htmlFor="my_modal_6" className="btn btn-error btn-sm">Close!</label>
                            <label htmlFor="my_modal_6" className='btn btn-success btn-sm float-right' onClick={() => handleFeedback(item)}>Send</label>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Modal