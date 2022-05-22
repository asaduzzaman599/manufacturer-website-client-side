import { useEffect, useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { baseUrl } from "../Api/BaseUrl";
import { auth } from "../firebase.init";
const useToken = () => {
    const [token, setToken] = useState()
    const [user] = useAuthState(auth)

    useEffect(() => {
        if (user) {
            baseUrl.put(`/user/${user?.email}`, { name: user?.displayName, email: user?.email, img: user?.photoURL }).then(({ data }) => {
                if (data.success) {
                    setToken(data.accessToken)
                }
            })
        }
    }, [user])

    return { token }
};

export default useToken;