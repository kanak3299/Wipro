import React, { useState, useEffect } from 'react';
import axios from 'axios';
import'./Admin.css';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/users')
            .then(response => setUsers(response.data))
            .catch(error => console.error('Error fetching users', error));
    }, []);

    const handleEdit = (user) => {
        setEditingUser(user);
    };

    const handleDelete = (userId) => {
        axios.delete(`http://localhost:5000/api/users/${userId}`)
            .then(() => {
                setUsers(users.filter(user => user.id !== userId));
            })
            .catch(error => console.error('Error deleting user', error));
    };

    const handleSave = () => {
        axios.put(`http://localhost:5000/api/users/${editingUser.id}`, editingUser)
            .then(() => {
                setUsers(users.map(user => user.id === editingUser.id ? editingUser : user));
                setEditingUser(null);
            })
            .catch(error => console.error('Error updating user', error));
    };

    return (
        <div class="dashboard">
    <h1 class="dashboard-title">Admin Dashboard</h1>
    <table class="user-table">
        <thead>
            <tr>
                <th class="table-header">Name</th>
                <th class="table-header">Email</th>
                <th class="table-header">Address</th>
                <th class="table-header">Phone Number</th>
                <th class="table-header">Actions</th>
            </tr>
        </thead>
        <tbody>
            {users.map(user => (
                <tr key={user.id} class="user-row">
                    <td class="user-data">{user.name}</td>
                    <td class="user-data">{user.email}</td>
                    <td class="user-data">{user.address}</td>
                    <td class="user-data">{user.phoneNumber}</td>
                    <td class="user-actions">
                        <button onClick={() => handleEdit(user)} class="edit-button">Edit</button>
                        <button onClick={() => handleDelete(user.id)} class="delete-button">Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
    {editingUser && (
        <div class="edit-user-form">
            <h2 class="form-title">Edit User</h2>
            <label class="form-label">
                Name:
                <input type="text" value={editingUser.name} onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })} class="form-input" />
            </label>
            <br />
            <label class="form-label">
                Email:
                <input type="email" value={editingUser.email} onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })} class="form-input" />
            </label>
            <br />
            <label class="form-label">
                Address:
                <input type="text" value={editingUser.address} onChange={(e) => setEditingUser({ ...editingUser, address: e.target.value })} class="form-input" />
            </label>
            <br />
            <label class="form-label">
                Phone Number:
                <input type="text" value={editingUser.phoneNumber} onChange={(e) => setEditingUser({ ...editingUser, phoneNumber: e.target.value })} class="form-input" />
            </label>
            <br />
            <button onClick={handleSave} class="save-button">Save</button>
        </div>
    )}
</div>

       
    );
};

export default AdminDashboard;
