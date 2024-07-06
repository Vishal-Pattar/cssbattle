import { useState, useEffect } from 'react';
import axios from 'axios';

const useVisitorCount = () => {
    const [visitorCount, setVisitorCount] = useState(0);

    const fetchVisitorCount = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_URL}/`);
            setVisitorCount(response.data.cssbattle_visitor_count);
        } catch (error) {
            console.error("Error fetching visitor count:", error);
        }
    };

    useEffect(() => {
        fetchVisitorCount();
    }, []);

    return visitorCount;
};

export default useVisitorCount;