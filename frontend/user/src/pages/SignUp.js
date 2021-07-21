import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { handleSignUpSubmit } from '../services/handleSubmit/handleSignUpSubmit';


function SignUp() {

    const history = useHistory();

    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    
    const handleSignUp = (e) =>{
        e.preventDefault();
        const newUser = { displayName, email, password, confirmPassword };
        handleSignUpSubmit(newUser);
    }

    return (
        <div className="container my-5">
            <h3 className="my-4">SignUp</h3>
            <form onSubmit={handleSignUp}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Display Name *</label>
                    <input type="text" className="form-control"
                        id="name" placeholder="Display Name..."
                        onChange={(e) => setDisplayName(e.target.value)} value={displayName}
                    />
                </div>
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
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password *</label>
                    <input type="password" className="form-control"
                        id="cpassword" placeholder="Confirm Password..."
                        onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}
                    />
                </div>
                <button type="submit" className="btn btn-primary">SignUp</button>
            </form>
        </div>
    )
}

export default SignUp
