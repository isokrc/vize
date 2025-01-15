import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <h1>İsmail Kıraç</h1>
      </header>
    
      <main className="cv-content">
        <div className="info-section">
          <div className="info-box">
            <h2>Kişisel Bilgiler</h2>
            <p><strong>Adı:</strong> İsmail</p>
            <p><strong>Soyadı:</strong> Kıraç</p>
            <p><strong>E-posta:</strong> <a href="mailto:ismail.kirac@kun.edu.tr">ismail.kirac@kun.edu.tr</a></p>
          </div>

          <div className="info-box">
            <h2>Eğitim Bilgileri</h2>
            <p><strong>Üniversite:</strong> Kapadokya Üniversitesi</p>
            <p><strong>Bölüm:</strong> Bilgisayar Programcılığı</p>
            <p><strong>Mezuniyet Yılı:</strong> 2024-2025</p>
          </div>
        </div>

        <section className="cv-section">
          <h2>Yetenekler</h2>
          <ul>
            <li>C#</li>
            <li>C++</li>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>Node.js</li>
            <li>Python</li>
          </ul>
        </section>

        <section className="cv-section">
          <h2>Hobiler ve İlgi Alanları</h2>
          <ul>
            <li>Oyun Geliştirme ve Harita Tasarımı</li>
            <li>Cihaz Tamiri</li>
            <li>Kendi Deneysel Cihazlarımı Yapmak</li>
          </ul>
        </section>
        <section className="cv-section">
          <h2>İş Deneyimi</h2>
          <p>Yok</p>
        </section>
      </main>

      <footer className="social-media">
        <h2>Beni Takip Edin</h2>
        <div className="icon-container">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon linkedin">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon twitter">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon instagram">
            <FaInstagram />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
