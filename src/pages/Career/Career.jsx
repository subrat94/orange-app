import React from 'react';

const Career = () => {
  const jobs = [
    { title: "3D Motion Designer", type: "Full-time", location: "Remote" },
    { title: "Frontend Developer", type: "Full-time", location: "New York, NY" },
    { title: "Citrus Quality Analyst", type: "Part-time", location: "Orlando, FL" }
  ];

  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ maxWidth: '800px', width: '100%', padding: '0 2rem' }}>
        <h1 className="gradient-text" style={{ fontSize: '3.5rem', marginBottom: '1rem', textAlign: 'center' }}>Join Our Team</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', textAlign: 'center', marginBottom: '3rem' }}>
          Help us build the most juicy digital experiences.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {jobs.map((job, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'transform 0.3s ease', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{job.title}</h3>
                <span style={{ color: 'var(--text-secondary)' }}>{job.type} • {job.location}</span>
              </div>
              <button style={{ padding: '0.8rem 1.5rem', borderRadius: '8px', background: 'var(--glass-bg)', border: '1px solid var(--primary-orange)', color: 'var(--primary-orange)', fontWeight: 'bold' }}>Apply Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
