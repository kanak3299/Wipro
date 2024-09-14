import React, { useState } from 'react';
import axios from 'axios';
import'./Register.css';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        phoneNumber: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/register', formData)
            .then(response => {
                alert('User registered successfully');
                setFormData({
                    name: '',
                    email: '',
                    address: '',
                    phoneNumber: ''
                });
            })
            .catch(error => {
                console.error('There was an error registering the user!', error);
            });
    };

    return (
        <><div className="registerimage">
            <img src="https://png.pngtree.com/png-vector/20221224/ourmid/pngtree-register-now-banner-design-transparent-background-png-image_6535781.png" alt="" className="registerimage" />
        </div><form className="form-containr" onSubmit={handleSubmit}>
                <label className="form-labl">
                    Name:
                    <input className="form-input" type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <br />
                <label className="form-label">
                    Email:
                    <input className="form-input" type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <br />
                <label className="form-label">
                    Address:
                    <input className="form-input" type="text" name="address" value={formData.address} onChange={handleChange} required />
                </label>
                <br />
                <label className="form-label">
                    Phone Number:
                    <input className="form-input" type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                </label>
                <br />
                <button className="form-button" type="submit">Register</button>
            </form></>
    
    );
};

export default RegistrationForm;
