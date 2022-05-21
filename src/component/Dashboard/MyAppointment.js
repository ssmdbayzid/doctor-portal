import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Share/Loading'

const MyAppointment = () => {
    const [user, loading] = useAuthState(auth)

    const [appointment, setAppointment] = useState()

    useEffect(() => {
        if (user) {
            console.log(user.email)
            fetch(`http://localhost:5000/booking?patient=${user.email}`)
                .then(res => res.json())
                .then(data => setAppointment(data))
        }

    }, [user])

    if (loading) {
        return <Loading></Loading>
    }

    console.log(appointment)
    return (
        <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Treatment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointment && appointment.map((a, index) => <tr>
                            <th>{index +1 }</th>
                            <td>{a.patient}</td>
                            <td>{a.date}</td>
                            <td>{a.slot}</td>
                            <td>{a.treatment}</td>
                            </tr>
                        )
                    }
                    
                </tbody>
            </table>
        </div>
    );
};

export default MyAppointment;