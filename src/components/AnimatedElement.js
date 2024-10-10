// components/AnimatedElement.js
import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import './AnimatedElement.css';

const AnimatedElement = ({ children, animationClass = 'fade-in', ...props }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      className={`animated-element ${isVisible ? animationClass : ''}`}
      style={{ opacity: isVisible ? 1 : 0 }} // isVisibleがtrueの場合、常に表示
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
