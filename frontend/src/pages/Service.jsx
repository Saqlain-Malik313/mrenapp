import React, { useEffect } from 'react';

const services = [
  {
    id: 1,
    title: 'Custom Software Development',
    desc: 'We build powerful, scalable software tailored to your business needs.',
    image: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png', 
  },
  {
    id: 2,
    title: 'Cloud Solutions',
    desc: 'Harness the power of cloud computing to boost agility and efficiency.',
    image: 'https://cdn-icons-png.flaticon.com/512/4144/4144309.png', 
  },
  {
    id: 3,
    title: 'Cybersecurity Services',
    desc: 'Protect your data and infrastructure with advanced security protocols.',
    image: 'https://cdn-icons-png.flaticon.com/512/483/483361.png', 
  },
  {
    id: 4,
    title: 'IT Consultancy',
    desc: 'Strategic advice to align your IT investments with your business goals.',
    image: 'https://cdn-icons-png.flaticon.com/512/1256/1256650.png',
  },
];

const Service = () => {
  useEffect(() => {
    document.title = ' Our Services';
  }, []);

  return (
    <section className="services-section">
      <div className="services-container">
        <h1 className="company-title">Welcome to Malik Technical</h1>
        <p className="company-subtitle">
          Ready to elevate your business with cutting-edge IT solutions?
          <br />
          At <strong>Malik Technical</strong>, we deliver innovative, tailored IT services to meet your unique needs.
        </p>

        <h2 className="services-heading">Our Core Services</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="card-img">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="card-details">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
