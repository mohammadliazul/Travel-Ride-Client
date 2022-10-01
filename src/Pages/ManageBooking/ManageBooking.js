import React, { useEffect, useState } from "react";
import { Image, Table } from "react-bootstrap";
import Swal from "sweetalert2";
import './ManageBooking.css';

const ManageBooking = () => {
    const [booking, setBooking] = useState([]);

    const [status, setStatus] = useState("");

    const handleStatus = (e) => {
        setStatus(e.target.value);
    };
    // console.log(status);
    useEffect(() => {
        fetch("https://travel-ride.onrender.com/allBooking")
            .then((res) => res.json())
            .then((data) => setBooking(data));
    }, [booking, status]);


    // const status = "apporved";
    const handleUpdate = (id) => {
        fetch(`https://travel-ride.onrender.com/updateStatus/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        });
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Successfully Updated.',
            showConfirmButton: false,
            timer: 2000
        })
        // console.log(id);
    };

    // Delete Booking
    const handleDelete = id => {
        // console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you really want to delete this Booking",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(result => {
            if (result.value) {
                deleteTour(id);
            }
        });
    };
    const deleteTour = id => {
        const url = `https://travel-ride.onrender.com/delete_booking/${id}`;
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);


                if (!data?.deletedCounted) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your tour has been delete',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            });
    };

    return (
        <div className="container mt-5">
            <h1>All Booking ({booking.length})</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Sl.</th>
                        <th>Booking Title</th>
                        <th>Booking Image</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {booking?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{pd.title}</td>
                            <td><Image className='img img-fluid' src={pd.image} alt="" /></td>
                            <td>{pd.email}</td>

                            <td>
                                {/* <input
                                    onChange={handleStatus}
                                    type="text"
                                    defaultValue={pd.status}
                                /> */}

                                <select onChange={handleStatus}>
                                    <option value={pd?.status}>{pd?.status}</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Confirm">Confirm</option>
                                </select>


                            </td>
                            <td>
                                <button className="btn-delete px-2 py-1" onClick={() => handleDelete(pd?._id)}>Delete</button>
                                <button
                                    onClick={() => handleUpdate(pd._id)}
                                    className="btn-update ms-3 px-2 py-1"
                                >
                                    Update
                                </button>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default ManageBooking;