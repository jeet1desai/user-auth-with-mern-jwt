import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { handleLoginSubmit } from '../services/handleSubmit/handleLoginSubmit';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            let loginUser = { email, password };
            handleLoginSubmit(loginUser);
            history.push("/");
        } catch (e) {
            history.push("/login");
        }
    }
    return (
        <div className="container my-5">
            <h3 className="my-4">Login</h3>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address *</label>
                    <input type="email" className="form-control"
                        id="email" placeholder="Email..."
                        onChange={(e) => setEmail(e.target.value)} value={email}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password *</label>
                    <input type="password" className="form-control"
                        id="password" placeholder="Password..."
                        onChange={(e) => setPassword(e.target.value)} value={password}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default Login