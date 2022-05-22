import { useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../firebase.init";
const useToken = () => {
    const [token, setToken] = useState()
    const [user] = useAuthState(auth)

    return { token }
};

export default useToken;