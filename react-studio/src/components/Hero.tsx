'use client';

import Link from 'next/link';
import { Button, Row, Col } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import { siteConfig } from '@/lib/siteConfig';

const heroHighlights = [
  'Composable experience engines for global launches',
  'Performance-tuned Next.js architecture with bulletproof SEO',
  'Editorial systems that merge storytelling, commerce, and community',
];

const heroStats = [
  { label: 'Markets launched', value: '24+' },
  { label: 'Core Web Vital score', value: '98' },
  { label: 'Deploy cadence', value: 'Daily' },
];

export default function Hero() {
  return (
    <section className="hero-section position-relative overflow-hidden">
      <div className="position-absolute top-0 start-50 translate-middle-x w-100 h-100" style={{ pointerEvents: 'none' }}>
        <div
          className="w-75 h-75 mx-auto"
          style={{
            background: 'radial-gradient(circle at 20% 20%, rgba(var(--accent-glow), 0.25), transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
      </div>
      <div className="hypernova-container position-relative">
        <Row className="align-items-center gy-5">
          <Col lg={7}>
            <span className="badge-pill bg-opacity-10 bg-primary text-primary">{siteConfig.tagline}</span>
            <h1 className="display-4 fw-bold text-white mt-3" style={{ fontFamily: 'var(--font-display)' }}>
              We architect breakout digital flagships that never blink.
            </h1>
            <p className="lead text-muted mt-4">{siteConfig.description}</p>
            <ul className="list-unstyled d-flex flex-column gap-2 text-muted mt-4">
              {heroHighlights.map((item) => (
                <li key={item} className="d-flex align-items-center gap-3">
                  <span
                    className="d-inline-flex align-items-center justify-content-center rounded-circle"
                    style={{ width: '10px', height: '10px', background: 'var(--accent-secondary)' }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-3 mt-4">
              <Button as={Link} href={siteConfig.primaryCta.href} size="lg" variant="primary" className="d-inline-flex align-items-center gap-2">
                {siteConfig.primaryCta.label}
                <FaArrowRight />
              </Button>
              <Button as={Link} href={siteConfig.secondaryCta.href} size="lg" variant="outline-light" className="text-white-50">
                {siteConfig.secondaryCta.label}
              </Button>
            </div>
          </Col>
          <Col lg={5}>
            <div className="glass-card p-4 p-lg-5 h-100">
              <div className="d-flex flex-column gap-4">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="d-flex justify-content-between align-items-center">
                    <span className="text-muted text-uppercase small letter-spacing-1">{stat.label}</span>
                    <span className="fs-3 fw-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-5">
                <p className="text-muted small mb-2 text-uppercase letter-spacing-1">Trusted by teams shipping at scale</p>
                <div className="d-flex flex-wrap gap-3">
                  {['Aurora Labs', 'Vertex Dynamics', 'Orbit Media', 'Helix Commerce'].map((brand) => (
                    <span key={brand} className="badge bg-opacity-10 bg-light text-light">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
