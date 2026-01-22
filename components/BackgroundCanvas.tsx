import React, { useEffect, useRef, useState } from 'react';

const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Disable animation when tab is not visible
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isVisible) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;
    let lastFrameTime = 0;
    const targetFPS = 30; // Limit to 30fps for better performance
    const frameInterval = 1000 / targetFPS;

    const resize = () => {
      // Use devicePixelRatio for crisp rendering but limit for performance
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', resize, { passive: true });
    resize();

    // Reduce particle count for better performance
    const particleCount = window.innerWidth < 768 ? 10 : 20;
    const particles: { x: number; y: number; size: number; speed: number; angle: number }[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 1.5,
        speed: 0.03 + Math.random() * 0.1,
        angle: Math.random() * Math.PI * 2,
      });
    }

    const draw = (currentTime: number) => {
      // Throttle to target FPS
      if (currentTime - lastFrameTime < frameInterval) {
        animationFrameId = requestAnimationFrame(draw);
        return;
      }
      lastFrameTime = currentTime;

      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);
      time += 0.002;

      // Draw subtle light gold waves (simplified)
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(201, 166, 107, 0.1)';
      ctx.lineWidth = 0.5;
      const yOffset = height / 2;
      ctx.moveTo(0, yOffset);
      for (let x = 0; x < width; x += 50) { // Increased step for performance
        const y = yOffset + Math.sin(x * 0.001 + time) * 100;
        ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Draw subtle dust particles
      ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
      particles.forEach((p) => {
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-60"
      style={{ willChange: 'auto' }} // Prevent unnecessary GPU layer
    />
  );
};

export default BackgroundCanvas;