
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';

function Dashboard() {
    const navigate = useNavigate();

    const recommendedAnime = [
        { name: 'Blue Lock Season 2', rating: 2 },
        { name: 'Re:Zero kara Season 3', rating: 3 },
        { name: 'SAO : Gun Gale Online 2', rating: 3 },
        { name: 'Dragon Ball Daima', rating: 5 },
    ];

    const renderStars = (rating) => {
        return '★'.repeat(rating) + '☆'.repeat(5 - rating);
    };

    return (
    <div className="dashboard-container">
            <h1>Selamat Datang di AnimeKU</h1>
            <p>Temukan, eksplorasi, dan lacak anime favoritmu!</p>
            <p>Jadikan pengalaman menonton anime-mu lebih menyenangkan dan seru!</p>


        <div className="button-container">
            <Button color="primary" onClick={() => navigate('/list-anime')}>List Anime</Button>
            <Button color="primary" onClick={() => navigate('/about')} style={{ marginLeft: '10px' }}>Tentang</Button>
        </div>

        <div className="recommendations">
            <h2>Anime Terbaru 2024</h2>
            <ul>
                {recommendedAnime.map((anime, index) => (
                <li key={index}>
                    {anime.name} <span className="stars">{renderStars(anime.rating)}</span>
                </li>
                ))}
            </ul>
        </div>
    </div>
    );
}

export default Dashboard;