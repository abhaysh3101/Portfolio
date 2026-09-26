import React from 'react';
import colorSharp from '../assets/img/color-sharp.png';

const SKILL_CATEGORIES = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'C++', 'C', 'HTML5', 'CSS3']
  },
  {
    title: 'AI & LLM',
    skills: ['RAG', 'Vector Search', 'Embeddings', 'pgvector', 'ChromaDB', 'OpenAI API', 'Gemini API', 'LangChain', 'Hugging Face']
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React.js', 'Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'WebSockets', 'Tailwind CSS', 'Bootstrap']
  },
  {
    title: 'Databases & DevOps',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Docker', 'Nginx', 'Amazon EC2', 'Git', 'GitHub', 'Postman', 'Linux']
  }
];

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills & Technologies</h2>
              <p>Core technical competencies across AI engineering, full-stack development, and infrastructure.</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', marginTop: '30px' }}>
                {SKILL_CATEGORIES.map((category, idx) => (
                  <div key={idx} style={{ textAlign: 'left' }}>
                    <h4 style={{ 
                      fontSize: '1.15rem', 
                      color: '#b8860b', 
                      background: 'linear-gradient(90deg, #aa367c, #b8860b)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      marginBottom: '12px',
                      fontWeight: 600
                    }}>
                      {category.title}
                    </h4>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                      {category.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            borderRadius: '8px',
                            padding: '8px 16px',
                            color: '#fff',
                            fontSize: '0.95rem',
                            fontWeight: 500,
                            letterSpacing: '0.3px',
                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.25)',
                            transition: 'all 0.2s ease-in-out'
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.borderColor = '#aa367c';
                            e.currentTarget.style.background = 'rgba(170, 54, 124, 0.18)';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                            e.currentTarget.style.transform = 'translateY(0)';
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background decoration" />
    </section>
  );
};