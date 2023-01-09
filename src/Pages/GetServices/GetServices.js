import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import './GetServices.css';



const GetServices = () => {
    const { id } = useParams();
    const [servicesData] = useServices();
    const singleItem = servicesData?.find((services) => services._id === id);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        // console.log(data);

        data.title = singleItem.title;
        data.image = singleItem.image;
        data.price = singleItem.price;
        data.status = "Pending";


        fetch(`${process.env.REACT_APP_SERVER_API}/tour_booking`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your booking has been successfully processed.',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    // alert('Your booking has been successfully processed.');
                    reset();
                }
            })
    };

    return (
        <>
            <Container className='box-shadow my-5 font-name bg-white pb-5'>
                <div>
                    <h2 className='tourTitle text-center pb-3 fw-bold'>Travel to {singleItem?.title}</h2>
                    <Row>
                        <Col md={6}>
                            <Image className='mt-4' src={singleItem?.image} fluid alt="details Image" />
                            <h5 className='fw-bold mt-2 text-gray '>{singleItem?.details}</h5>
                            <p className='fs-5 text-gray '><i className="far fa-clock orangeColor"></i> {singleItem?.days} Days</p>
                            <p className='fs-5 text-gray '><span className='orangeColor'>$</span> {singleItem?.price}</p>
                        </Col>
                        <Col md={6} className="d-flex justify-content-center align-items-center">
                            <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>

                                <input defaultValue={user.displayName} {...register("name")} />

                                <input defaultValue={user.email} {...register("email", { required: true })} />
                                {errors.email && <span className="error">This field is required</span>}
                                <input placeholder="Address" defaultValue="" {...register("address")} />
                                <input placeholder="City" defaultValue="" {...register("city")} />
                                <input placeholder="Phone number" defaultValue="" {...register("phone")} />
                                <input type="date" defaultValue="" {...register("date")} />
                                <input type="number" placeholder="Travellers" defaultValue="1" {...register("travellers")} />


                                <input className='confirm-booking' type="submit" value="Confirm Booking" />
                            </form>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    );
};

export default GetServices;