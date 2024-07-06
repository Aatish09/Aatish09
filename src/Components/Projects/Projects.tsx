import React from 'react';
import projects from '../../assets/Project';
import './Project.css'; // Make sure to create and import the CSS file

const Projects: React.FC = () => {
  const handleProjectClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div id='Projects' className='project'>
        <div className="title">
            <h1>Projects</h1>
            <img src="data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0nMjI3JyBoZWlnaHQ9JzcyJyB2aWV3Qm94PScwIDAgMjI3IDcyJyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxwYXRoIGQ9J00wIDYxLjEzOTVDMCA1NS4xOTk5IDUuMTY3MjkgNTAuNTgxNiAxMS4wNjk2IDUxLjI0NTlMMTg3LjAzOSA3MS4wNTJDMjA5LjU5NyA3My41OTEgMjI4LjcwMyA1NC41ODQ0IDIyNi4yODIgMzIuMDEzM0MyMjMuNzYgOC41MDI1NSAxOTkuMzc5IC02LjAwODQxIDE3Ny41MTEgMi45ODYzMUwxMy43NDMzIDcwLjM0NzFDNy4xOTA5OCA3My4wNDIyIDAgNjguMjI0NSAwIDYxLjEzOTVaJyBmaWxsPSd1cmwoI3BhaW50MF9saW5lYXJfMjE2MF8yMyknLz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9J3BhaW50MF9saW5lYXJfMjE2MF8yMycgeDE9Jzg1MS4zMTgnIHkxPSc0Ny41NTMnIHgyPSc3NTYuNzUxJyB5Mj0nMzM5LjQwMicgZ3JhZGllbnRVbml0cz0ndXNlclNwYWNlT25Vc2UnPjxzdG9wIHN0b3AtY29sb3I9JyNERjg5MDgnLz48c3RvcCBvZmZzZXQ9JzEnIHN0b3AtY29sb3I9JyNCNDE1RkYnLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4=" alt="Projects Icon" />
        </div>
        <div className="project-container">
            {projects.map((item, index) => (
                <div key={index} className="project-item" onClick={() => handleProjectClick(item.githubUrl)}>
                    <img src={item.imageUrl} alt={item.title} className="project-image" />
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <p><strong>Technologies:</strong> {item.technologies.join(', ')}</p>
                    <p><strong>Year:</strong> {item.year}</p>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Projects
