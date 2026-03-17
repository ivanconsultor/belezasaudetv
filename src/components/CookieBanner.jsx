import React, { useState, useEffect } from 'react';
import './CookieBanner.css';

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookie-consent', 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="cookie-banner-overlay">
            <div className="cookie-banner-card">
                <div className="cookie-banner-content">
                    <h3>Valorizamos sua privacidade</h3>
                    <p>
                        Utilizamos cookies para aprimorar sua experiência de navegação, exibir anúncios ou conteúdo personalizado 
                        e analisar nosso tráfego. Ao clicar em "Aceitar tudo", você concorda com nosso uso de cookies.
                    </p>
                </div>
                <div className="cookie-banner-actions">
                    <button className="btn-cookie-secondary" onClick={handleDecline}>Rejeitar</button>
                    <button className="btn-cookie-secondary" onClick={() => setIsVisible(false)}>Personalizar</button>
                    <button className="btn-cookie-primary" onClick={handleAccept}>Aceitar tudo</button>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
