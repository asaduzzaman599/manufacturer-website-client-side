import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { privateUrl } from '../../../Api/PrivateApi';
import CommonTitle from '../../../Components/CommonTitle';
import { auth } from '../../../firebase.init';
import noUser from './../../../images/no-user.jpg'
import UpdateProfileModal from './UpdateProfileModal';
const MyProfile = () => {
    const [user] = useAuthState(auth)
    const [updating, setUpdating] = useState(false)
    const { isLoading, error, data: userData, refetch } = useQuery('profile', () =>
        privateUrl(`/user/${user.email}?email=${user.email}`).then(({ data }) => {
            if (data?.success) {
                return data?.user
            } else {
                toast.error(data.message)
            }
        })
    )

    return (
        <div>
            <CommonTitle>My Profile</CommonTitle>
            <div className='shadow-lg pb-6'>
                <div className=' mx-auto  md:px-12 pb-6 md:flex justify-between gap-10 items-center'>
                    <div className='flex-1'>
                        <img src={userData?.img || noUser} className='w-40 rounded-full mx-auto' alt="" />
                    </div>


                    <div className=' text-center md:text-left flex-1 p-4'>
                        <h3 className='text-2xl font-bold mt-6 mb-4'>{userData?.name}</h3>
                        <p className=''><span className="font-bold w-30 inline-block">Email</span> : {userData?.email}</p>
                        <p className=''><span className="font-bold w-30 inline-block">Role</span> : {userData?.role || "Client"}</p>
                        <p className=''><span className="font-bold w-30 inline-block">Phone NO</span> : {userData?.phone || "N/A"}</p>
                        <p className=''><span className="font-bold w-30 inline-block">Education</span> : {userData?.education || "N/A"}</p>
                        <p className=''><span className="font-bold w-30 inline-block">Location</span> : {userData?.location || "N/A"}</p>
                        <p className='break-words'><span className="font-bold w-30 inline-block">Linkedin</span> : {userData?.linkedin ? <a className='break-words' href={userData?.linkedin} target="_blank" >{userData?.linkedin}</a> : "N/A"}</p>

                    </div>
                </div>
                <label htmlFor="update-profile-modal" className="btn btn-outline modal-button" onClick={() => setUpdating(true)}>Update Profile</label>
            </div>

            {   //update profile modal
                updating && <UpdateProfileModal
                    user={userData}
                    setUpdating={setUpdating}
                    refetch={refetch}
                ></UpdateProfileModal>
            }
        </div>
    );
};

export default MyProfile;