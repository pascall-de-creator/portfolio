'use client';

import { useRef } from 'react';

export default function Card({ className, sesitivity, children }) {
    const cardRef = useRef(null);

    const handleMouseMove = (event) => {
        const sensitivity = sesitivity || 0.1;

        const rect = cardRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        const rotateX = -y * sensitivity;
        const rotateY = x * sensitivity;

        cardRef.current.style.transform = `rotateX(${ rotateX }deg) rotateY(${ rotateY }deg)`;
    };

    const handleMouseLeave = () => cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";

    return <div className={ `card pointer-events-auto ${ className }` } ref={ cardRef } onMouseMove={ handleMouseMove } onMouseLeave={ handleMouseLeave }>{ children }</div>;
};
