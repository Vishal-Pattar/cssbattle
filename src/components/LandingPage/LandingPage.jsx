import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import images from '../../helpers/importImages';

const challenges = Array.from({ length: 4 }, (_, i) => ({
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
            {challenges.map((challenge) => (
                <ChallengeBox key={challenge.id} {...challenge} onClick={handleClick} />
            ))}
        </div>
    );
};

export default LandingPage;