import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { privateUrl } from '../Api/PrivateApi';
import { auth } from '../firebase.init';

const useAdmin = () => {
    const [user] = useAuthState(auth)
    const [admin, setAdmin] = useState(false)
    const [loading, setLoading] = useState(true)
    console.log('hello')
    useEffect(() => {
        if (user) {
            setLoading(true)
            privateUrl.get(`/admin?email=${user?.email}`)
                .then(({ data }) => {

                    setLoading(false)
                    if (data.success) {
                        setLoading(false)
                        setAdmin(data.admin)
                        console.log(loading)
                    }
                }).catch(err => {
                    setLoading(false)
                })
        }


        return
    }, [user])

    return { admin, loading }

};

export default useAdmin;