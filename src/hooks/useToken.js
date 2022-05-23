import { useEffect, useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../Api/BaseUrl";
import { auth } from "../firebase.init";
const useToken = () => {
    const [token, setToken] = useState()
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    useEffect(() => {

        if (user && user?.displayName) {
            baseUrl.put(`/user/${user?.email}`, { name: user?.displayName, email: user?.email, img: user?.photoURL }).then(({ data }) => {
                if (data.success) {
                    localStorage.setItem('access_token', data.accessToken)
                    setToken(data.accessToken)
                }
            })
        }
    }, [user, user?.displayName])

    return { token }
};

export default useToken;