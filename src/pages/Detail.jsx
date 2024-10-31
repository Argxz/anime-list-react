import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/detail.css"


function Detail() {
    const { animeId } = useParams();
    const [animeDetail, setAnimeDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
    const fetchAnimeDetail = async () => {
    try {
        const response = await axios.get(
        `https://api.jikan.moe/v4/anime/${animeId}`
        );
        setAnimeDetail(response.data.data);
        setError(null);
    } catch (err) {
        setError(err.message);
    } finally {
        setLoading(false);
    }
    };

    fetchAnimeDetail();
        }, [animeId]);

    if (loading) {
    return <div>Loading...</div>;
        }

    if (error) {
    return <div style={{ color: "red" }}>Error: {error}</div>;
        }

        return (
            <div className="anime-detail-container">
                <div className="button-container">
                    <button className="back-button" onClick={() => navigate(-1)}>
                        Kembali
                    </button>
                </div>
                
                {animeDetail && (
                    <div className="anime-detail-content">
                        <h1>{animeDetail.title}</h1>
                        <img src={animeDetail.images.jpg.image_url} alt={animeDetail.title} />
                        <p><strong>Judul Jepang:</strong> {animeDetail.title_japanese}</p>
                        <p><strong>Genre:</strong> {animeDetail.genres.map(genre => genre.name).join(', ')}</p>
                        <p><strong>Tipe:</strong> {animeDetail.type}</p>
                        <p><strong>Durasi:</strong> {animeDetail.duration}</p>
                        <p><strong>Episode:</strong> {animeDetail.episodes || 'N/A'}</p>
                        <p><strong>Sinopsis:</strong> {animeDetail.synopsis}</p>
                        <p><strong>Rating:</strong> {animeDetail.rating}</p>
                        <p><strong>Skor:</strong> {animeDetail.score}</p>
                        <p><strong>Tahun Rilis:</strong> {animeDetail.year || 'N/A'}</p>
                    </div>
                )}
            </div>
        );
        
        
}

export default Detail;