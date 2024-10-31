import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Table, Button } from 'reactstrap';

const List = () => {
    const [animes, setAnimes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAnimes = async () => {
            try {
                const response = await axios.get('https://api.jikan.moe/v4/anime');
                setAnimes(response.data.data);
            } catch (err) {
                setError('Error fetch data');
                } finally {
        setLoading(false);
    }
};
    fetchAnimes();
}, []);

const handleBack = () => {
    navigate('/');
};

const handleDetail = (animeId) => {
    navigate(`/anime/${animeId}`);
};

if (loading) {
    return <div>Loading...</div>;
}

if (error) {
    return <div>{error}</div>;
}

return (
<div className="anime-list-container">
    <Button color="danger" onClick={handleBack} className="button-back">
        Kembali
    </Button>
    <h1 style={{ textAlign: 'center' }}>Daftar Anime</h1>
    <Table className="table" dark striped bordered hover>
        <thead>
            <tr>
                <th>Gambar</th>
                <th>Judul</th>
                <th>Genre</th>
                <th>Tahun Rilis</th>
                <th>Rating</th>
                <th>Skor</th>
                <th>Aksi</th>
            </tr>
        </thead>
        <tbody>
        {animes.map(anime => (
            <tr key={anime.mal_id}>
                <td>
                    <img src={anime.images.jpg.image_url} alt={anime.title}/>
                </td>
                <td>{anime.title}</td>
                <td>
                    {anime.genres.map(genre => genre.name).join(', ') || 'N/A'}
                </td>
                <td>{anime.year ? anime.year : 'N/A'}</td>
                <td>{anime.rating ? anime.rating : 'N/A'}</td>
                <td>{anime.score ? anime.score : 'N/A'}</td>
                <td>
                    <Button color="light" onClick={() => handleDetail(anime.mal_id)}>
                        Detail
                    </Button>
                </td>
            </tr>
            ))}
        </tbody>
    </Table>
</div>
);
};

export default List;
