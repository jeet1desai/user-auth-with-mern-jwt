import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import MaterialTable from "material-table";
import { addContact, deleteContact, updateContact } from '../services/handleCrud/crudContact';

function HomePage() {
    const history = useHistory();

    const [users, setUsers] = useState()
    const [contact, setContacts] = useState([])

    useEffect(() => {
        let token = localStorage.getItem("auth-token");
        const varifyToken = async (token) => {
            try {
                const tokenData = { token };
                const result = await axios.post("http://localhost:5000/tokenIsValid/", tokenData);
                setUsers(result.data.user);
                loadContact();
            } catch (err) {
                console.log(err.response.data.msg);
            }
        }
        varifyToken(token);
    }, [])

    const loadContact = async () => {
        try {
            const result = await axios.get("http://localhost:5000/contact/");
            setContacts(result.data);
        } catch (err) {
            console.log(err);
        }
    }

    const logoutUser = () => {
        localStorage.clear();
        history.push('/login');
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container d-flex justify-space-between">
                    <NavLink className="navbar-brand" exact to="/">Dashboard</NavLink>
                    {
                        users ?
                            <div className="d-flex">
                                <p className="me-3 mb-0 align-self-center">
                                    {("hello " + users.displayName)}
                                </p>
                                <button className="btn btn-outline-danger" onClick={logoutUser}>Logout</button>
                            </div>
                            :
                            <div className="d-flex">
                                <NavLink className="nav-link" exact to="/login">Login</NavLink>
                                <NavLink className="nav-link" exact to="/signup">SignUp</NavLink>
                            </div>
                    }

                </div>
            </nav>
            <div className="container my-5">
                {
                    users ?
                        <MaterialTable
                            columns={[
                                { title: "Name", field: "name" },
                                { title: "Email", field: "email" },
                                { title: "Phone", field: "phone" },
                            ]}
                            data={contact}
                            title="Contact Table"
                            options={{
                                exportButton: true
                            }}
                            editable={{
                                onRowAdd: newData =>
                                    new Promise((resolve, reject) => {
                                        setTimeout(() => {
                                            addContact(newData);
                                            loadContact();
                                            resolve();
                                        }, 1000);
                                    }),
                                onRowUpdate: (newData, oldData) =>
                                    new Promise((resolve, reject) => {
                                        setTimeout(async() => {
                                            await updateContact(oldData._id, newData);
                                            loadContact();
                                            resolve();
                                        }, 1000);
                                    }),
                                onRowDelete: oldData =>
                                    new Promise(resolve => {
                                        setTimeout(() => {
                                            deleteContact(oldData._id);
                                            loadContact();
                                            resolve();
                                        }, 1000);
                                    }),
                            }}
                        />
                        : ""
                }

            </div>

        </>
    )
}

export default HomePage;
