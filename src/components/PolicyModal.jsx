import React from 'react';
import './PolicyModal.css';

const PolicyModal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="policy-overlay" onClick={onClose}>
            <div className="policy-modal" onClick={(e) => e.stopPropagation()}>
                <div className="policy-header">
                    <h2>{title}</h2>
                    <button className="policy-close" onClick={onClose} aria-label="Fechar">✕</button>
                </div>
                <div className="policy-content">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default PolicyModal;
