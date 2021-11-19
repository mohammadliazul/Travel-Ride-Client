
import { useState, useEffect } from "react";

const useServices = () => {
    const [servicesData, setServicesData] = useState([]);
    useEffect(() => {
        fetch('https://glacial-garden-93428.herokuapp.com/tours')
            .then(res => res.json())
            .then(data => setServicesData(data));
    }, []);
    return [servicesData, setServicesData];
};

export default useServices;