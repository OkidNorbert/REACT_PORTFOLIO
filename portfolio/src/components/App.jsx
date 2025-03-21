import { useEffect } from 'react';

function App() {
    useEffect(() => {
        const handleSmoothScroll = (e) => {
            if (e.target.getAttribute('href')?.startsWith('#')) {
                e.preventDefault();
                const element = document.querySelector(e.target.getAttribute('href'));
                element?.scrollIntoView({ behavior: 'smooth' });
            }
        };

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', handleSmoothScroll);
        });

        return () => {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.removeEventListener('click', handleSmoothScroll);
            });
        };
    }, []);

    return (
        <div>
            {/* Your app content */}
        </div>
    );
}

export default App; 