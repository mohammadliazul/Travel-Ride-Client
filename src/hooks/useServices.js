
import { useState, useEffect } from "react";


const useServices = () => {
    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
        fetch('https://travel-ride.onrender.com/tours')
            .then(res => res.json())
            .then(data => 
                setServicesData(data)
            );
    }, []);
    return [servicesData, setServicesData];
};

export default useServices;