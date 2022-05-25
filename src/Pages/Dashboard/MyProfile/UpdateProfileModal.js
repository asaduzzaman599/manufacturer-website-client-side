import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { privateUrl } from '../../../Api/PrivateApi';

const UpdateProfileModal = ({ user, setUpdating, refetch }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = ({ phone, education, location, linkedin }) => {
        if (!user) {
            return
        }
        if (!phone && !education && !location && !linkedin) {
            return toast.error('Nothing to update')
        }
        const userInfo = {
            phone,
            education,
            location,
            linkedin
        }
        privateUrl.patch(`/user/${user.email}?email=${user.email}`, userInfo).then(({ data }) => {
            if (data?.matchedCount) {
                toast.success('Data update successfully')
                refetch()
                setUpdating(false)
            } else {

                toast.success('Something went wrong!')
            }
        })

    };
    return (
        <>
            {/*  <!-- The button to open modal --> */}


            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="update-profile-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle bg-base ">
                <div className="modal-box relative z-10 mt-6 w-full">
                    <label htmlFor="update-profile-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form className='w-full' onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" value={user?.name} className="input input-bordered w-full" readOnly disabled />

                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" value={user?.email} className="input input-bordered w-full" readOnly disabled />
                        </div>

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="text" placeholder='Your Phone No' className="input input-bordered w-full" defaultValue={user?.phone} {...register("phone",)} />

                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Education</span>
                            </label>
                            <input type="text" placeholder='Your Education' defaultValue={user?.education} className="input input-bordered w-full" {...register("education")} />

                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="text" placeholder='Your City/District' className="input input-bordered w-full" defaultValue={user?.location} {...register("location",)} />

                        </div>
                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text">Linkedin Profile </span>
                            </label>
                            <input type="text" placeholder='Your Linkedin Profile ' className="input input-bordered w-full" defaultValue={user?.linkedin} {...register("linkedin")} />

                        </div>





                        <input className='btn btn-outline w-full' type="submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default UpdateProfileModal;