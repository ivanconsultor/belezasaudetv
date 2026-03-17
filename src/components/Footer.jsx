import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import PolicyModal from './PolicyModal';
import './Footer.css';

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [privacyOpen, setPrivacyOpen] = useState(false);
    const [aiPolicyOpen, setAiPolicyOpen] = useState(false);
    const [termsOpen, setTermsOpen] = useState(false);
    const [cookiesOpen, setCookiesOpen] = useState(false);
    const [commentsOpen, setCommentsOpen] = useState(false);

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    element.classList.add('highlight-section');
                    setTimeout(() => element.classList.remove('highlight-section'), 2000);
                }
            }, 300);
        } else {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                element.classList.add('highlight-section');
                setTimeout(() => element.classList.remove('highlight-section'), 2000);
            }
        }
    };

    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-top">

                    <div className="footer-widget">
                        <div className="widget-logo">
                            <a href="/" onClick={(e) => handleNavClick(e, 'home')}>
                                <span className="logo-text">Beleza<span className="logo-highlight">Saúde</span>TV</span>
                            </a>
                        </div>
                        <p className="widget-desc">O Melhor Conteúdo de Saúde e Beleza da Web!</p>
                    </div>

                    <div className="footer-widget" id="contato-info">
                        <h3 className="widget-title">CONTATO</h3>
                        <ul className="widget-list contact-list">
                            <li>
                                <a href="https://wa.me/5521983701900" target="_blank" rel="noopener noreferrer" className="contact-link">
                                    <svg viewBox="0 0 448 512" width="16" height="16" fill="currentColor"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
                                    <span>21-98370-1900</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:contato@belezasaudetv.com" className="contact-link">
                                    <svg viewBox="0 0 512 512" width="16" height="16" fill="currentColor"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" /></svg>
                                    <span>contato@belezasaudetv.com</span>
                                </a>
                            </li>
                            <li>
                                <svg viewBox="0 0 384 512" width="16" height="16" fill="currentColor"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                                <span>Rua Dr Othon Machado, 150 Inhaúma - Rio de Janeiro - RJ CEP: 20765-240</span>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-widget">
                        <h3 className="widget-title">CATEGORIAS</h3>
                        <ul className="widget-list bullet-list">
                            <li><a href="#beleza" onClick={(e) => handleNavClick(e, 'beleza')}>Beleza</a></li>
                            <li><a href="#saude" onClick={(e) => handleNavClick(e, 'saude')}>Saúde</a></li>
                            <li><a href="#cabelo" onClick={(e) => handleNavClick(e, 'cabelo')}>Cabelo</a></li>
                            <li><a href="#pele" onClick={(e) => handleNavClick(e, 'pele')}>Pele</a></li>
                            <li><a href="#emagrecimento" onClick={(e) => handleNavClick(e, 'emagrecimento')}>Emagrecimento</a></li>
                            <li><a href="#maquiagem" onClick={(e) => handleNavClick(e, 'maquiagem')}>Maquiagem</a></li>
                            <li><Link to="/vitrine" onClick={() => window.scrollTo(0, 0)}>Loja</Link></li>
                        </ul>
                    </div>

                    <div className="footer-widget">
                        <h3 className="widget-title">INSTITUCIONAL</h3>
                        <ul className="widget-list bullet-list">
                            <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
                            <li><a href="#quemsou" onClick={(e) => handleNavClick(e, 'quemsou')}>Quem Sou?</a></li>
                            <li><a href="#contato-info" onClick={(e) => handleNavClick(e, 'contato-info')}>Contato</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); setPrivacyOpen(true); }}>Políticas de privacidade</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); setAiPolicyOpen(true); }}>Políticas de IA</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); setTermsOpen(true); }}>Termos de Uso</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); setCookiesOpen(true); }}>Política de Cookies</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); setCommentsOpen(true); }}>Política de Comentários</a></li>
                        </ul>
                    </div>

                </div>

                <div className="footer-middle">
                    <h3 className="widget-title">SIGA-ME</h3>
                    <div className="footer-socials">
                        <a href="https://www.facebook.com/belezasaudetv" aria-label="Facebook Fanpage" title="Fanpage Facebook" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 512 512" width="20" height="20" fill="currentColor"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
                        </a>
                        <a href="https://www.facebook.com/groups/belezasaudetvoficial" aria-label="Facebook Comunidade" title="Comunidade Facebook" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 640 512" width="20" height="20" fill="currentColor"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM608 80c10.5 0 19.4 6.7 22.7 16s-.4 19.5-8.9 25.5l-64 45.3c-4.4 3.1-9.6 4.7-14.8 4.7s-10.4-1.6-14.8-4.7l-64-45.3c-8.5-6-12.1-16.2-8.9-25.5s12.2-16 22.7-16h128z"/></svg>
                        </a>
                        <a href="https://www.instagram.com/belezasaudetv/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 448 512" width="20" height="20" fill="currentColor"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                        </a>
                        <a href="https://x.com/belezasaudetv" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 512 512" width="20" height="20" fill="currentColor"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
                        </a>
                        <a href="https://br.pinterest.com/belezasaudetv/" aria-label="Pinterest" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 496 512" width="20" height="20" fill="currentColor"><path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.8 71.8-163.8 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" /></svg>
                        </a>
                        <a href="https://www.tiktok.com/@belezasaudetvoficial" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 448 512" width="20" height="20" fill="currentColor"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" /></svg>
                        </a>
                        <a href="https://www.youtube.com/@belezasaudetv" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 576 512" width="20" height="20" fill="currentColor"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg>
                        </a>
                        <a href="https://www.reddit.com/user/belezasaudetvoficial/" aria-label="Reddit" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 512 512" width="20" height="20" fill="currentColor"><path d="M440.3 203.5c-15 0-28.2 6.2-37.9 15.9-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2 22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8-9.7-10.1-23.4-16.3-38.4-16.3-55.6 0-73.8 74.6-22.9 100.1-1.8 7.9-2.6 16.3-2.6 24.7 0 83.8 94.4 151.7 210.3 151.7 116.4 0 210.8-67.9 210.8-151.7 0-8.4-.9-17.2-3.1-25.1 49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7 21.6 0 39.2 17.6 39.2 39.7 0 21.6-17.6 39.2-39.2 39.2-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0-4-3.5-4-9.7 0-13.7 3.5-3.5 9.7-3.5 13.2 0 27.8 28.5 120 29 148 0 3.5-3.5 9.7-3.5 13.2 0 4.1 4 4.1 10.2.1 13.7zm-13.8-54.3c-21.6 0-39.2-17.6-39.2-39.2 0-22 17.6-39.7 39.2-39.7 22 0 39.7 17.6 39.7 39.7-.1 21.5-17.7 39.2-39.7 39.2z" /></svg>
                        </a>
                        <a href="https://medium.com/@belezasaudetv" aria-label="Medium" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 512 512" width="20" height="20" fill="currentColor"><path d="M255.4 128c-70.4 0-127.4 57.3-127.4 128s57 128 127.4 128 127.4-57.3 127.4-128-57-128-127.4-128zm181.8 11.2c-35.2 0-63.7 52.3-63.7 116.8s28.5 116.8 63.7 116.8 63.7-52.3 63.7-116.8-28.5-116.8-63.7-116.8zM11.2 153.3c0 56.4 11.7 102.1 26.2 102.1s26.2-45.7 26.2-102.1-11.7-102.1-26.2-102.1-26.2 45.7-26.2 102.1z"/></svg>
                        </a>
                    </div>
                </div>

            </div>
            <div className="footer-bottom-bar">
                <p>Copyright &copy; {new Date().getFullYear()} Beleza Saúde TV. Todos os direitos reservados.</p>
            </div>

            {/* Modal - Políticas de Privacidade */}
            <PolicyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} title="Políticas de Privacidade">
                <p className="policy-date">Última atualização: Março de 2026</p>

                <h3>1. Introdução</h3>
                <p>O site Beleza Saúde TV respeita a sua privacidade e está comprometido em proteger os dados pessoais dos seus visitantes. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos as suas informações pessoais quando você acessa nosso site.</p>

                <h3>2. Dados que Coletamos</h3>
                <p>Podemos coletar os seguintes tipos de informações:</p>
                <ul>
                    <li><strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas, tempo de permanência e data/hora de acesso.</li>
                    <li><strong>Cookies:</strong> utilizamos cookies para melhorar sua experiência de navegação, personalizar conteúdo e analisar o tráfego do site.</li>
                    <li><strong>Dados fornecidos voluntariamente:</strong> nome e e-mail, caso você entre em contato conosco ou se inscreva em nossa newsletter.</li>
                </ul>

                <h3>3. Como Usamos seus Dados</h3>
                <p>Os dados coletados são utilizados para:</p>
                <ul>
                    <li>Melhorar a experiência de navegação no site;</li>
                    <li>Personalizar o conteúdo exibido de acordo com seus interesses;</li>
                    <li>Enviar newsletters e comunicações, caso você tenha consentido;</li>
                    <li>Analisar estatísticas de acesso para aprimorar nossos serviços;</li>
                    <li>Cumprir obrigações legais e regulatórias.</li>
                </ul>

                <h3>4. Compartilhamento de Dados</h3>
                <p>Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros, exceto quando necessário para o funcionamento do site (como serviços de hospedagem e análise de tráfego) ou quando exigido por lei.</p>

                <h3>5. Cookies</h3>
                <p>Nosso site utiliza cookies para aprimorar a navegação. Você pode configurar seu navegador para recusar cookies, porém isso pode limitar algumas funcionalidades do site. Ao continuar navegando, você concorda com o uso de cookies conforme descrito nesta política.</p>

                <h3>6. Segurança dos Dados</h3>
                <p>Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acessos não autorizados, alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela internet é 100% seguro.</p>

                <h3>7. Seus Direitos</h3>
                <p>De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de:</p>
                <ul>
                    <li>Acessar seus dados pessoais;</li>
                    <li>Solicitar a correção de dados incompletos ou desatualizados;</li>
                    <li>Solicitar a exclusão dos seus dados;</li>
                    <li>Revogar o consentimento a qualquer momento.</li>
                </ul>
                <p>Para exercer seus direitos, entre em contato pelo e-mail: <strong>contato@belezasaudetv.com</strong></p>

                <h3>8. Alterações nesta Política</h3>
                <p>Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos que você a consulte regularmente para estar informado sobre como protegemos seus dados.</p>
            </PolicyModal>

            {/* Modal - Políticas de IA */}
            <PolicyModal isOpen={aiPolicyOpen} onClose={() => setAiPolicyOpen(false)} title="Políticas de Uso de Inteligência Artificial">
                <p className="policy-date">Última atualização: Março de 2026</p>

                <h3>1. Sobre o Uso de IA</h3>
                <p>O site Beleza Saúde TV utiliza ferramentas de Inteligência Artificial (IA) como apoio na criação e curadoria de conteúdo. Acreditamos na transparência e queremos que nossos leitores saibam como essa tecnologia é empregada em nosso trabalho.</p>

                <h3>2. Como Utilizamos a IA</h3>
                <p>A Inteligência Artificial é utilizada nas seguintes atividades:</p>
                <ul>
                    <li><strong>Pesquisa e curadoria:</strong> a IA auxilia na pesquisa de temas relevantes sobre beleza, saúde e bem-estar;</li>
                    <li><strong>Redação assistida:</strong> alguns textos podem ser redigidos com o auxílio de IA, sendo sempre revisados e aprovados por nossa equipe editorial;</li>
                    <li><strong>Otimização de SEO:</strong> utilizamos IA para otimizar títulos, descrições e palavras-chave;</li>
                    <li><strong>Geração de imagens:</strong> algumas imagens ilustrativas podem ser geradas por IA.</li>
                </ul>

                <h3>3. Revisão Humana</h3>
                <p>Todo conteúdo gerado ou assistido por IA passa por revisão humana antes de ser publicado. Nossa equipe editorial verifica a precisão, relevância e qualidade das informações para garantir que o conteúdo seja confiável e útil para nossos leitores.</p>

                <h3>4. Sobre Informações de Saúde</h3>
                <p>Os conteúdos publicados no Beleza Saúde TV têm caráter exclusivamente informativo e educacional. Eles não substituem a consulta, o diagnóstico ou o tratamento médico profissional. Sempre consulte um profissional de saúde qualificado antes de tomar decisões relacionadas à sua saúde.</p>

                <h3>5. Transparência</h3>
                <p>Estamos comprometidos com a transparência no uso de IA. Quando um conteúdo for predominantemente gerado por Inteligência Artificial, isso será indicado no artigo. Nosso objetivo é sempre fornecer informações de qualidade e confiáveis.</p>

                <h3>6. Seus Direitos</h3>
                <p>Caso tenha dúvidas sobre o uso de IA em nosso conteúdo ou queira reportar alguma imprecisão, entre em contato pelo e-mail: <strong>contato@belezasaudetv.com</strong></p>

                <h3>7. Atualizações</h3>
                <p>Esta política poderá ser atualizada conforme novas tecnologias de IA forem incorporadas ao nosso processo editorial. Recomendamos que você a consulte periodicamente.</p>
            </PolicyModal>

            {/* Modal - Termos de Uso */}
            <PolicyModal isOpen={termsOpen} onClose={() => setTermsOpen(false)} title="Termos de Uso">
                <p className="policy-date">Última atualização: Março de 2026</p>

                <h3>1. Aceitação dos Termos</h3>
                <p>Ao acessar e utilizar o site Beleza Saúde TV, você concorda com estes Termos de Uso. Caso não concorde com algum dos termos descritos, solicitamos que não utilize o site.</p>

                <h3>2. Uso do Conteúdo</h3>
                <p>Todo o conteúdo publicado no Beleza Saúde TV, incluindo textos, imagens, vídeos e gráficos, é de propriedade do site ou licenciado por terceiros. É permitido:</p>
                <ul>
                    <li>Compartilhar links dos artigos em redes sociais;</li>
                    <li>Citar trechos do conteúdo com a devida referência ao Beleza Saúde TV.</li>
                </ul>
                <p>É proibido:</p>
                <ul>
                    <li>Reproduzir, copiar ou distribuir o conteúdo integral sem autorização prévia;</li>
                    <li>Utilizar o conteúdo para fins comerciais sem permissão;</li>
                    <li>Modificar ou alterar o conteúdo original sem consentimento.</li>
                </ul>

                <h3>3. Informações de Saúde</h3>
                <p>O conteúdo do Beleza Saúde TV tem caráter exclusivamente informativo e educacional. As informações não substituem a consulta médica profissional. Consulte sempre um profissional de saúde antes de iniciar qualquer tratamento ou dieta.</p>

                <h3>4. Links Externos</h3>
                <p>O site pode conter links para sites de terceiros. O Beleza Saúde TV não se responsabiliza pelo conteúdo, políticas de privacidade ou práticas de sites externos.</p>

                <h3>5. Responsabilidade do Usuário</h3>
                <p>O usuário se compromete a utilizar o site de forma ética e respeitosa, não realizando atividades que possam prejudicar o funcionamento do site ou a experiência de outros usuários.</p>

                <h3>6. Modificações nos Termos</h3>
                <p>O Beleza Saúde TV reserva-se o direito de alterar estes Termos de Uso a qualquer momento. As alterações entram em vigor a partir da data de publicação no site.</p>

                <h3>7. Contato</h3>
                <p>Em caso de dúvidas sobre estes Termos de Uso, entre em contato pelo e-mail: <strong>contato@belezasaudetv.com</strong></p>
            </PolicyModal>

            {/* Modal - Política de Cookies */}
            <PolicyModal isOpen={cookiesOpen} onClose={() => setCookiesOpen(false)} title="Política de Cookies">
                <p className="policy-date">Última atualização: Março de 2026</p>

                <h3>1. O que são Cookies?</h3>
                <p>Cookies são pequenos arquivos de texto armazenados no seu dispositivo (computador, tablet ou celular) quando você visita um site. Eles permitem que o site reconheça seu dispositivo e lembre de suas preferências.</p>

                <h3>2. Tipos de Cookies que Utilizamos</h3>
                <ul>
                    <li><strong>Cookies essenciais:</strong> necessários para o funcionamento básico do site, como navegação entre páginas e acesso a áreas seguras;</li>
                    <li><strong>Cookies de desempenho:</strong> coletam informações anônimas sobre como os visitantes utilizam o site, ajudando-nos a melhorar seu funcionamento;</li>
                    <li><strong>Cookies de funcionalidade:</strong> permitem que o site lembre das suas escolhas (como idioma ou região) para oferecer uma experiência mais personalizada;</li>
                    <li><strong>Cookies de publicidade:</strong> podem ser utilizados para exibir anúncios relevantes com base nos seus interesses de navegação.</li>
                </ul>

                <h3>3. Cookies de Terceiros</h3>
                <p>Utilizamos serviços de terceiros que também podem armazenar cookies no seu dispositivo, como Google Analytics (para análise de tráfego) e plataformas de redes sociais (para botões de compartilhamento).</p>

                <h3>4. Como Gerenciar Cookies</h3>
                <p>Você pode configurar seu navegador para bloquear ou alertar sobre cookies. Veja como fazer nos principais navegadores:</p>
                <ul>
                    <li><strong>Google Chrome:</strong> Configurações → Privacidade e segurança → Cookies;</li>
                    <li><strong>Firefox:</strong> Opções → Privacidade e segurança → Cookies;</li>
                    <li><strong>Safari:</strong> Preferências → Privacidade → Cookies;</li>
                    <li><strong>Edge:</strong> Configurações → Cookies e permissões de site.</li>
                </ul>
                <p>Atenção: desabilitar cookies pode afetar a funcionalidade de algumas partes do site.</p>

                <h3>5. Consentimento</h3>
                <p>Ao continuar navegando em nosso site, você concorda com o uso de cookies conforme descrito nesta política. Você pode retirar seu consentimento a qualquer momento ajustando as configurações do seu navegador.</p>

                <h3>6. Contato</h3>
                <p>Em caso de dúvidas sobre o uso de cookies, entre em contato pelo e-mail: <strong>contato@belezasaudetv.com</strong></p>
            </PolicyModal>

            {/* Modal - Política de Comentários */}
            <PolicyModal isOpen={commentsOpen} onClose={() => setCommentsOpen(false)} title="Política de Comentários">
                <p className="policy-date">Última atualização: Março de 2026</p>

                <h3>1. Participação</h3>
                <p>O Beleza Saúde TV valoriza a participação dos seus leitores. Os comentários são um espaço para troca de ideias, experiências e opiniões sobre os temas abordados em nossos artigos.</p>

                <h3>2. Regras de Convivência</h3>
                <p>Para manter um ambiente respeitoso e construtivo, pedimos que os comentários sigam estas regras:</p>
                <ul>
                    <li>Seja respeitoso com outros leitores e com a equipe do site;</li>
                    <li>Não publique conteúdo ofensivo, discriminatório, difamatório ou que incite violência;</li>
                    <li>Não faça spam ou publique links de propaganda não relacionados ao tema;</li>
                    <li>Não compartilhe informações pessoais de terceiros sem autorização;</li>
                    <li>Não publique prescrições médicas ou recomendações de tratamentos como se fossem orientação profissional.</li>
                </ul>

                <h3>3. Moderação</h3>
                <p>Todos os comentários são moderados antes da publicação. A equipe do Beleza Saúde TV reserva-se o direito de aprovar, editar ou remover comentários que violem estas regras, sem aviso prévio.</p>

                <h3>4. Responsabilidade</h3>
                <p>Os comentários publicados são de responsabilidade exclusiva de seus autores. O Beleza Saúde TV não se responsabiliza por opiniões, conselhos ou informações compartilhadas nos comentários.</p>

                <h3>5. Informações de Saúde nos Comentários</h3>
                <p>Orientamos que informações sobre saúde compartilhadas nos comentários não sejam tomadas como substitutas de consulta médica profissional. Em caso de dúvidas sobre saúde, procure sempre um profissional qualificado.</p>

                <h3>6. Contato</h3>
                <p>Para reportar comentários inadequados ou tirar dúvidas, entre em contato pelo e-mail: <strong>contato@belezasaudetv.com</strong></p>
            </PolicyModal>
        </footer>
    );
};

export default Footer;
