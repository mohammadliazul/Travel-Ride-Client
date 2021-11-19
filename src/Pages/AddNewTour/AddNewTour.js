import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import './AddNewTour.css'

const AddNewTour = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://glacial-garden-93428.herokuapp.com/tours', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Added New Tour Successfully.',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    // alert('Added Successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-tour">
            <h1 className='text-center mb-3'>Add New Tour</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title", { required: true, maxLength: 25 })} placeholder="Title" />
                <textarea {...register("details")} placeholder="Details" />
                <input type="number" {...register("days")} placeholder="Days" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("image")} placeholder="Image url" />
                <input className='add-new-tour' type="submit" value="Add New Tour" />
            </form>
        </div>
    );
};

export default AddNewTour;