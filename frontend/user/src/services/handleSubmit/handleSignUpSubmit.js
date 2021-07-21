import { toast } from 'react-toastify';
import axios from 'axios';

export const handleSignUpSubmit = async (newUser) => {
    try {
        await axios.post("http://localhost:5000/register", newUser);
        toast.success('Signup SucessFully!!');
        toast.info('Now Login..');
    } catch (err) {
        toast.error(err.response.data.msg);
    }
}