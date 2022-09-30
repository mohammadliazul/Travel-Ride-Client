
import { useState, useEffect } from "react";

const useServices = () => {
    const [servicesData, setServicesData] = useState([]);
    useEffect(() => {
        fetch('https://travel-ride-server-side.vercel.app/tours')
            .then(res => res.json())
            .then(data => setServicesData(data));
    }, []);
    return [servicesData, setServicesData];
};

export default useServices;