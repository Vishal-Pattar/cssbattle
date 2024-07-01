import React, { useEffect, useState } from 'react';
import './ActualTarget.css';
import jsonData from '../../data/data.json';
import { IoInformationCircle } from "react-icons/io5";

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
        }, 5000);
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
        <div className='target-container'>
            <div className='target-header'>
                <span>Recreate this Target</span>
                <span>400px x 300px</span>
            </div>
            <div className='target-render'>
                <img src={targetImage} alt={`Challenge ${id}`} />
            </div>
            <div className='color-pallet'>
                {colorArray.map((color, index) => (
                    <div key={index} className='color-pot' onClick={() => handleCopy(color)}>
                        <div className='disp-color' style={{ backgroundColor: color }}></div>
                        <div className='disp-name'>{color}</div>
                    </div>
                ))}
            </div>
            {displayAlert && (
                <div className='alert-box'>
                    <div className='alert-box-text'><IoInformationCircle style={{fontSize: '25px', marginBottom: '-5px', color: '#3496DB' }}/>  Color {copiedColor} copied to clipboard</div>
                    <div className='alert-box-anime'></div>
                </div>
            )}
        </div>
    );
};

export default ActualTarget;