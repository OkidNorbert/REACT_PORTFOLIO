import { useEffect } from 'react';
import { useAnimation } from '../../../src/hooks/useAnimation';
import '../animations.css';

const Section = ({ children, className, ...props }) => {
    const observer = useAnimation();

    useEffect(() => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach((el, index) => {
            el.dataset.animationIndex = index;
            el.dataset.animationClass = 'animate-fadeInUp';
            observer?.observe(el);
        });
    }, [observer]);

    return (
        <section className={`animate-on-scroll ${className || ''}`} {...props}>
            {children}
        </section>
    );
};

export default Section; 