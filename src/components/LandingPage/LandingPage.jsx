import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import images from '../../helpers/importImages';

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

    const handleClick = (id) => {
        navigate(`/${id}`);
    };

    return (
        <div className="landing-container">
            <div className='landing-header'>
                <span>CSS BATTLE</span>
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