import React, { useState } from "react";
import ManageTours from "./../ManageTours/ManageTours";
import AddNewTour from "../AddNewTour/AddNewTour";
import ManageBooking from "../ManageBooking/ManageBooking";
import "./Admin.css";


const Admin = () => {
    const [control, setControl] = useState("addNewTour");

    console.log(control);


    return (
        <div className="admin-container mt-5">
            <div className="dashboard">
                <div className="admin-box">
                    <div className="row admin-container">
                        <div className="col-md-3 ">
                            <div className="admin-area p-1">
                                <h3 className='ps-2 mt-3 pt-3'>Dashboard</h3>
                                <div className="all-menu mt-5">
                                    <li
                                        onClick={() => setControl("addNewTour")}
                                        className="admin-menu p-2"
                                    >
                                        Add New Tour
                                    </li>

                                    <li
                                        onClick={() => setControl("manageTours")}
                                        className="admin-menu p-2"
                                    >
                                        Manage Tours
                                    </li>
                                    <li
                                        onClick={() => setControl("manageBooking")}
                                        className="admin-menu p-2"
                                    >
                                        Manage Booking
                                    </li>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 text-center  text-center mt-5">
                            {control === "manageBooking" && <ManageBooking></ManageBooking>}
                            {control === "manageTours" && <ManageTours></ManageTours>}
                            {control === "addNewTour" && <AddNewTour></AddNewTour>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;