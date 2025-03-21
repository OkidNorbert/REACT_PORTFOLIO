function About() {
    return (
        <section id="about" className="section">
            <h2>About Me</h2>
            <div className="about-grid">
                <div className="personal-details">
                    <h3>Personal Details</h3>
                    <ul>
                        <li><strong>Full Name:</strong> OKIDI NORBERT</li>
                        <li><strong>Student ID:</strong> S23B23/051</li>
                        <li><strong>Course & Year:</strong> BSc in Computer Science, Year 2</li>
                        <li><strong>Hobbies & Interests:</strong> Basketball, Gaming, and Technology</li>
                    </ul>
                </div>
                <div className="featured-video">
                    <h3>Featured Video</h3>
                    <div className="video-container">
                        <iframe 
                            src="https://www.youtube.com/embed/a1lJMlLMv0E?si=-YDWEDMaEr0Hkf_d" 
                            title="YouTube video player" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About; 