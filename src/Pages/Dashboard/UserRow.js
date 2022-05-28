import React from 'react';

const UserRow = ({ user, index }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`

            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <tr class="hover">
            <th>{index}</th>
            <td>{email}</td>
            <td>
                {role !== 'admin' && <button class="btn btn-primary btn-xs" onClick={() => makeAdmin()}>Make Admin</button>}

            </td>
        </tr>
    );
};

export default UserRow;