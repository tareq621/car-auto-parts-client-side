import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    console.log(user);

    const handleSubmit = event => {
        event.preventDefault();
        const profile = {
            id: user._id,
            name: user.name,
            email: user.email,
            city: event.target.city.value,
            zip: event.target.zip.value,
            education: event.target.education.value,
            phoneNumber: event.target.phoneNumber.value
        };

        fetch('http://localhost:5000/profile', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Doctor added successfully')
                    event.target.reset();
                }
                else {
                    toast.error('failed to add doctor');
                }
            })
    }

    return (

        <div>
            <form onSubmit={handleSubmit} class="w-full max-w-lg mt-10">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Name
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" name='name' value={user.displayName} />
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            Email
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="email" name='email' value={user.email} readOnly disabled />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            City/District
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" name='city' placeholder='City' />
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            ZIP
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="tel" name='zip' placeholder='Code' />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            Education
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" name='education' placeholder='Education' />
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            Phone Number
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" name='phoneNumber' placeholder='+880' />
                    </div>
                </div>
                <div className='flex justify-center mt-3 px-18'>
                    <input type="submit" value="SAVE" class="btn btn-primary ml-18 px-28" />
                </div>
            </form>
            <Link to={`/updateProfile/profile/${user.id}`}>
                <div className='flex justify-center mt-3 px-18'>
                    <input type="submit" value="UPDATE PROFILE" onClick={() => navigate("/profile._id")} class="btn btn-primary -ml-1 px-28" />
                </div>
            </Link>
        </div>

    );
};

export default MyProfile;