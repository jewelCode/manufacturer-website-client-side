import React from 'react';
import { useQuery } from 'react-query';
import UserDetail from './UserDetail';


const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://fast-shelf-13273.herokuapp.com/user').then(res => res.json()));
    if (isLoading) {
        return <p>Loading...</p>;
    }
    return (
        <div>
            <h2 className="text-2xl">All Users:{users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>SL No</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserDetail user={user} index={index} key={user._id} refetch={refetch}></UserDetail>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;