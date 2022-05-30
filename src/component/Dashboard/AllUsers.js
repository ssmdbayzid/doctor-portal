import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Share/Loading';

const AllUsers = () => {

    const { data: allUser, isLoading } = useQuery('user', () => fetch('http://localhost:5000/user').then(res => res.json()))

    if (isLoading) {
        <Loading></Loading>
    }
    if(allUser){
        console.log(allUser)
    }

    return (
        <div>
            {allUser && <h1>All Users No : {allUser.length}</h1>}
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>User</th>
                            <th>Job Catagory</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                        {
                            allUser && allUser.map((user, index)=>
                                <tbody>
                                <tr>
                                    <th>{index + 1}</th>
                                    <th>{user.email}</th>
                                    <th>Job Catagory</th>
                                    <th>Remove</th>
                                </tr>
                            </tbody>)
                        }

                </table>
            </div>
        </div>
    );
};

export default AllUsers;