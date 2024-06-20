import React, { useEffect, useState } from 'react';
import './ActualTarget.css';
import jsonData from '../../data/data.json';

const ActualTarget = ({ id }) => {
    const [data, setData] = useState(null);
    const [copiedColor, setCopiedColor] = useState('');
    const [displayAlert, setDisplayAlert] = useState(false);

    const handleCopy = (value) => {
        navigator.clipboard.writeText(value);
        setCopiedColor(value);
        setDisplayAlert(true);

        // Hide alert box after 5 seconds
        setTimeout(() => {
            setDisplayAlert(false);
        }, 3000);
    };

    useEffect(() => {
        setData(jsonData);
    }, []);

    let colorArray = [];
    if (data !== null && id > 0 && id <= data.length) {
        colorArray = data[id - 1].color;
    }

    const targetImage = require(`../../assets/expected_${id}.png`);

    return (
        <div className='targetbox'>
            <div className='targetrender'>
                <img src={targetImage} alt={`Challenge ${id}`} />
            </div>
            <div className='color-pallet'>
                {colorArray.map((color, index) => (
                    <div key={index} className='color-pot' onClick={() => handleCopy(color)}>
                        <div className='disp-color' style={{ backgroundColor: color }}></div>
                        <span className='disp-name'>{color}</span>
                    </div>
                ))}
            </div>
            {displayAlert && (
                <div className='alert-box'>
                    <span>Color {copiedColor} copied to clipboard</span>
                </div>
            )}
        </div>
    );
};

export default ActualTarget;