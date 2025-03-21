import profileImage from '../assets/profile.jpg';

function Hero() {
    return (
        <header className="hero">
            <div className="hero-content">
                <img src={profileImage} alt="Okidi Norbert" className="profile-image" />
                <h1>OKIDI NORBERT</h1>
                <p className="tagline">
                    Computer Science Student | Basketball Enthusiast | Cybersecurity Passionate
                </p>
            </div>
        </header>
    );
}

export default Hero;