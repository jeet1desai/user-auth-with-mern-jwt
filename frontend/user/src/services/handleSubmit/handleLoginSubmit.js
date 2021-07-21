import { toast } from 'react-toastify';
import axios from 'axios';

export const handleLoginSubmit = async (loginUser) => {
    try {
        const loginResponse = await axios.post("http://localhost:5000/login", loginUser);
        localStorage.setItem("auth-token", loginResponse.data.token);
        toast.success('SucessFully Login!!');
    } catch (err) {
        toast.error(err.response.data.msg);
    }
}