import React, { useEffect, useState } from 'react';
import { Image, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';
import './ManageTours.css';

const ManageTours = () => {
    const [tours, setTours] = useState([]);
    useEffect(() => {
        fetch('https://glacial-garden-93428.herokuapp.com/tours')
            .then(res => res.json())
            .then(data => setTours(data))
    }, [tours]);
    // const handleDelete = id => {
    //     const url = `https://glacial-garden-93428.herokuapp.com/getservices/${id}`;
    //     fetch(url, {
    //         method: 'DELETE'
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data);
    //             if (data.deletedCounted) {
    //                 alert('Deleted');
    //                 const remaining = tours.filter(tour => tour._id !== id);
    //                 setTours(remaining);
    //             }
    //         })
    // }


    const handleDelete = id => {
        // console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you really want to delete this Tour",
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
        const url = `https://glacial-garden-93428.herokuapp.com/getservices/${id}`;
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
                const remaining = tours.filter(tour => tour._id !== id);
                setTours(remaining);
            });
    };
    return (
        <div className="container">
            <h1>All Tours ({tours.length})</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Sl.</th>
                        <th>Booking Title</th>
                        <th>Booking Image</th>
                        <th>Details</th>
                        <th>Days</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {tours?.map((tour, index) => (
                    <tbody>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{tour.title}</td>
                            <td><Image className='img img-fluid' src={tour.image} alt="" /></td>
                            <td>{tour.details}</td>
                            <td>{tour.days}</td>
                            <td>{tour.price}</td>
                            <td>
                                <button className="btn-delete px-2 py-1" onClick={() => handleDelete(tour._id)}>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};


export default ManageTours;