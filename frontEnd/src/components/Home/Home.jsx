import React, { useState, useEffect } from 'react'
import './Home.css'
import img1 from '../../assets/img1.webp'
import img2 from '../../assets/img2.webp'
import img4 from '../../assets/img4.webp'
function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    { id: 1, image: img1 },
    { id: 2, image: img2 },
    { id: 4, image: img4 },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <>
      <section className="hero">
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
          </div>
        ))}
      </div>

      <button className="carousel-btn carousel-btn-prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel-btn carousel-btn-next" onClick={nextSlide}>
        &#10095;
      </button>

      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-headline">
              End-to-End Hackathon Management — From Registration to Final Evaluation
            </h1>
            <p className="hero-subtext">
              Secure Verification • QR Smart Entry • Digital Food Tracking • AI Evaluation
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Get Started</button>
              <button className="btn-secondary">Request Demo (For Colleges)</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="features-section">
  <div className="features-container">
    <h2 className="features-title">Unique Hackathon Hosting Platform</h2>

    <div className="features-grid">

      {/* Block 1 */}
      <div className="feature-block feature-block-right">
        <div className="feature-content">
          <h3 className="feature-heading">Verified Students</h3>
          <p className="feature-text">
            Face + ID + OTP verification ensures only genuine students participate.
          </p>
        </div>
      </div>

      {/* Block 2 */}
      <div className="feature-block feature-block-left">
        <div className="feature-content">
          <h3 className="feature-heading">Auto Evaluation</h3>
          <p className="feature-text">
            Structured scoring + leaderboard generation automatically.
          </p>
        </div>
      </div>

      {/* Block 3 */}
      <div className="feature-block feature-block-right">
        <div className="feature-content">
          <h3 className="feature-heading">QR Smart Entry</h3>
          <p className="feature-text">
            Dynamic QR entry removes manual gate verification.
          </p>
        </div>
      </div>

      {/* Block 4 */}
      <div className="feature-block feature-block-left">
        <div className="feature-content">
          <h3 className="feature-heading">Digital Meal Tracking</h3>
          <p className="feature-text">
            One-time QR meal system prevents coupon fraud.
          </p>
        </div>
      </div>

    </div>
  </div>
    </section>
    </>
  )
}

export default Homegit 