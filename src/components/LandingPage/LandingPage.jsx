import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import images from '../../helpers/importImages';
import axios from 'axios';
import useVisitorCount from '../../hooks/useVisitorCount';

const imageKeys = Object.keys(images).filter(key => key.startsWith('expected_') && key.endsWith('.png'));
const challenges = Array.from({ length: imageKeys.length }, (_, i) => ({
    id: i + 1,
    img: images[`expected_${i + 1}.png`],
}));

const ChallengeBox = ({ id, img, onClick }) => (
    <div className='challenge-box' onClick={() => onClick(id)}>
        <img className='challenge-img' src={img} alt={`Challenge ${id}`} />
        <div className='challenge-id'>Challenge {id}</div>
    </div>
);

const LandingPage = () => {
    const navigate = useNavigate();
    const visitorCount = useVisitorCount();

    useEffect(() => {
        const incrementVisitorCount = async () => {
            try {
                await axios.post(`${process.env.REACT_APP_URL}/increment-visitor`);
            } catch (error) {
                console.error("Error incrementing visitor count:", error);
            }
        };
        incrementVisitorCount();
    }, []);

    const handleClick = (id) => {
        navigate(`/${id}`);
    };

    return (
        <div className="landing-container">
            <div className='landing-header'>
                <div className='landing-title'>CSS BATTLE</div>
                <div className='landing-count'>Visitor Count: {visitorCount}</div>
            </div>
            <div className='landing-box'>
                {challenges.map((challenge) => (
                    <ChallengeBox key={challenge.id} {...challenge} onClick={handleClick} />
                ))}
            </div>
        </div>
    );
};

export default LandingPage;