import "../styles/about.css"
import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    return (
        <div className="about-container">
            <button className="back-button" onClick={() => navigate(-1)}>
                Kembali
            </button>
            <h1>Tentang AnimeKU</h1>
            <p>AnimeKU adalah platform untuk pencinta anime, dibuat untuk membantu Anda menemukan, mengeksplorasi, dan melacak anime favorit Anda dengan mudah. Kami ingin menghadirkan pengalaman menonton yang menyenangkan dan informatif untuk semua penggemar anime.</p>
            
            <h2>Fitur Utama</h2>
            <ul>
                <li>Jelajahi daftar anime terbaru dan rekomendasi terbaik.</li>
                <li>Temukan detail lengkap dari setiap anime, termasuk sinopsis, genre, rating, dan lainnya.</li>
                <li>Buat daftar anime favorit Anda untuk memudahkan pelacakan.</li>
            </ul>

            <p>Terima kasih telah menggunakan AnimeKU. Kami harap platform ini memberikan Anda pengalaman yang berkesan dan membantu memperkaya perjalanan Anda dalam dunia anime.</p>
        </div>
    );
};

export default About;
