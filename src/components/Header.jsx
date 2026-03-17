import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = ({ searchTerm, onSearchChange }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        
        if (targetId === 'vitrine') {
            navigate('/vitrine');
            window.scrollTo(0, 0);
            return;
        }

        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        } else {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            navigate('/');
        }
        
        // Se houver termo de busca, rola para a seção de resultados
        if (searchTerm && searchTerm.trim().length > 0) {
            setTimeout(() => {
                const resultsSection = document.getElementById('search-results');
                if (resultsSection) {
                    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 300);
        }
    };


    return (
        <header className="site-header">
            <div className="header-top">
                <div className="header-container top-container">

                    <div className="header-socials">
                        <a href="https://www.facebook.com/belezasaudetv" aria-label="Facebook Fanpage" title="Fanpage Facebook" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 512 512" width="16" height="16" fill="currentColor"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
                        </a>
                        <a href="https://www.facebook.com/groups/belezasaudetvoficial" aria-label="Facebook Comunidade" title="Comunidade Facebook" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 640 512" width="16" height="16" fill="currentColor"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM608 80c10.5 0 19.4 6.7 22.7 16s-.4 19.5-8.9 25.5l-64 45.3c-4.4 3.1-9.6 4.7-14.8 4.7s-10.4-1.6-14.8-4.7l-64-45.3c-8.5-6-12.1-16.2-8.9-25.5s12.2-16 22.7-16h128z"/></svg>
                        </a>
                        <a href="https://www.instagram.com/belezasaudetv/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 448 512" width="16" height="16" fill="currentColor"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                        </a>
                        <a href="https://x.com/belezasaudetv" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 512 512" width="16" height="16" fill="currentColor"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
                        </a>
                        <a href="https://br.pinterest.com/belezasaudetv/" aria-label="Pinterest" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 496 512" width="16" height="16" fill="currentColor"><path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.8 71.8-163.8 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" /></svg>
                        </a>
                        <a href="https://www.tiktok.com/@belezasaudetvoficial" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 448 512" width="16" height="16" fill="currentColor"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" /></svg>
                        </a>
                        <a href="https://www.youtube.com/@belezasaudetv" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 576 512" width="16" height="16" fill="currentColor"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg>
                        </a>
                        <a href="https://www.reddit.com/user/belezasaudetvoficial/" aria-label="Reddit" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 512 512" width="16" height="16" fill="currentColor"><path d="M440.3 203.5c-15 0-28.2 6.2-37.9 15.9-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2 22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8-9.7-10.1-23.4-16.3-38.4-16.3-55.6 0-73.8 74.6-22.9 100.1-1.8 7.9-2.6 16.3-2.6 24.7 0 83.8 94.4 151.7 210.3 151.7 116.4 0 210.8-67.9 210.8-151.7 0-8.4-.9-17.2-3.1-25.1 49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7 21.6 0 39.2 17.6 39.2 39.7 0 21.6-17.6 39.2-39.2 39.2-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0-4-3.5-4-9.7 0-13.7 3.5-3.5 9.7-3.5 13.2 0 27.8 28.5 120 29 148 0 3.5-3.5 9.7-3.5 13.2 0 4.1 4 4.1 10.2.1 13.7zm-13.8-54.3c-21.6 0-39.2-17.6-39.2-39.2 0-22 17.6-39.7 39.2-39.7 22 0 39.7 17.6 39.7 39.7-.1 21.5-17.7 39.2-39.7 39.2z" /></svg>
                        </a>
                        <a href="https://medium.com/@belezasaudetv" aria-label="Medium" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 512 512" width="16" height="16" fill="currentColor"><path d="M255.4 128c-70.4 0-127.4 57.3-127.4 128s57 128 127.4 128 127.4-57.3 127.4-128-57-128-127.4-128zm181.8 11.2c-35.2 0-63.7 52.3-63.7 116.8s28.5 116.8 63.7 116.8 63.7-52.3 63.7-116.8-28.5-116.8-63.7-116.8zM11.2 153.3c0 56.4 11.7 102.1 26.2 102.1s26.2-45.7 26.2-102.1-11.7-102.1-26.2-102.1-26.2 45.7-26.2 102.1z"/></svg>
                        </a>
                    </div>

                    <div className="header-logo">
                        <a href="/" onClick={(e) => handleNavClick(e, 'home')}>
                            <span className="logo-text">Beleza<span className="logo-highlight">Saúde</span>TV</span>
                        </a>
                    </div>

                    <div className="header-search">
                        <form className="search-box" onSubmit={handleSearch}>
                            <input
                                type="text"
                                placeholder="Buscar Post"
                                value={searchTerm}
                                onChange={(e) => {
                                    onSearchChange(e.target.value);
                                    if (location.pathname !== '/') {
                                        navigate('/');
                                    }
                                }}
                            />
                            <button type="submit" aria-label="Search">
                                <svg viewBox="0 0 512 512" width="16" height="16" fill="currentColor" style={{ pointerEvents: 'none' }}><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" /></svg>
                            </button>
                        </form>
                    </div>

                </div>
            </div>

            <nav className="header-nav">
                <ul className="nav-list">
                    <li><a href="/" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
                    <li><a href="#beleza" onClick={(e) => handleNavClick(e, 'beleza')}>Beleza</a></li>
                    <li><a href="#saude" onClick={(e) => handleNavClick(e, 'saude')}>Saúde</a></li>
                    <li><a href="#cabelo" onClick={(e) => handleNavClick(e, 'cabelo')}>Cabelo</a></li>
                    <li><a href="#pele" onClick={(e) => handleNavClick(e, 'pele')}>Pele</a></li>
                    <li><a href="#emagrecimento" onClick={(e) => handleNavClick(e, 'emagrecimento')}>Emagrecimento</a></li>
                    <li><a href="#maquiagem" onClick={(e) => handleNavClick(e, 'maquiagem')}>Maquiagem</a></li>
                    <li><Link to="/vitrine" onClick={() => window.scrollTo(0, 0)} className="vitrine-link">Loja</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

