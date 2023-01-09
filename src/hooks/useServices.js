
import { useState, useEffect } from "react";


const useServices = () => {
    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_API}/tours`)
            .then(res => res.json())
            .then(data => 
                setServicesData(data)
            );
    }, []);
    return [servicesData, setServicesData];

};

export default useServices;