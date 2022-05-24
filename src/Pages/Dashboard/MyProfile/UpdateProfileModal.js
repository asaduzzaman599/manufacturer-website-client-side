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
            <input type="checkbox" id="update-profile-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle bg-base ">
                <div class="modal-box relative mt-6 w-full">
                    <label for="update-profile-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form className='w-full' onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full ">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" value={user?.name} class="input input-bordered w-full" readOnly disabled />

                        </div>
                        <div class="form-control w-full ">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" value={user?.email} class="input input-bordered w-full" readOnly disabled />
                        </div>

                        <div class="form-control w-full ">
                            <label class="label">
                                <span class="label-text">Phone</span>
                            </label>
                            <input type="text" placeholder='Your Phone No' class="input input-bordered w-full" defaultValue={user?.phone} {...register("phone", { required: true })} />
                            <label class="label">
                                {errors.phone && <span className='text-error'>This field is required</span>}
                            </label>
                        </div>
                        <div class="form-control w-full ">
                            <label class="label">
                                <span class="label-text">Education</span>
                            </label>
                            <input type="text" placeholder='Your Education' defaultValue={user?.education} class="input input-bordered w-full" {...register("education", { required: true })} />
                            <label class="label">
                                {errors.education && <span className='text-error'>This field is required</span>}
                            </label>
                        </div>
                        <div class="form-control w-full ">
                            <label class="label">
                                <span class="label-text">Location</span>
                            </label>
                            <input type="text" placeholder='Your City/District' class="input input-bordered w-full" defaultValue={user?.location} {...register("location", { required: true })} />
                            <label class="label">
                                {errors.education && <span className='text-error'>This field is required</span>}
                            </label>
                        </div>
                        <div class="form-control w-full ">
                            <label class="label">
                                <span class="label-text">Linkedin Profile </span>
                            </label>
                            <input type="text" placeholder='Your Linkedin Profile ' class="input input-bordered w-full" defaultValue={user?.linkedin} {...register("linkedin", { required: true })} />
                            <label class="label">
                                {errors.linkedin && <span className='text-error'>This field is required</span>}
                            </label>
                        </div>





                        <input className='btn btn-outline w-full' type="submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default UpdateProfileModal;