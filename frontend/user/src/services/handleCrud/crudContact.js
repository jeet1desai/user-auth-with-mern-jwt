import axios from 'axios';
import { toast } from 'react-toastify';

export const addContact = async (newData) => {
    try {
        await axios.post("http://localhost:5000/contact/", newData);
        toast.success("Successfully added new contact");
    } catch (err) {
        toast.success(err.response.data.msg);
        console.log(err);
    }
}

export const updateContact = async (id, newData) => {
    try {
        await axios.put(`http://localhost:5000/contact/${id}`, newData);
        toast.success("Successfully update contact");
    } catch (err) {
        toast.success(err.response.data.msg);
        console.log(err);
    }
}

export const deleteContact = async (id) => {
    try {
        await axios.delete(`http://localhost:5000/contact/${id}`);
        toast.success("Successfully delete contact");
    } catch (err) {
        toast.success(err.response.data.msg);
        console.log(err);
    }
}