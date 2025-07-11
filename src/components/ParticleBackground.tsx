import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | undefined>(undefined);
  const mouseRef = useRef<{ x: number; y: number; isHovering: boolean }>({
    x: 0,
    y: 0,
    isHovering: false
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse event handlers - track mouse on document level
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.isHovering = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.isHovering = false;
    };

    // Add listeners to document instead of canvas
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Initialize particles
    const initParticles = () => {
      const particles: Particle[] = [];
      const particleCount = 500;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          size: Math.random() * 3 + 2,
          opacity: Math.random() * 0.8 + 0.4,
        });
      }

      particlesRef.current = particles;
      console.log('Particles initialized:', particles.length);
    };

    initParticles();

    // Animation loop
    let frameCount = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Debug: log canvas size on first frame
      if (frameCount === 0) {
        console.log('Canvas size:', canvas.width, 'x', canvas.height);
        console.log('Animation started');
      }
      frameCount++;

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Calculate distance from mouse for spotlight effect
        const mouseDistance = Math.sqrt(
          Math.pow(particle.x - mouseRef.current.x, 2) +
          Math.pow(particle.y - mouseRef.current.y, 2)
        );
        
        // Only show particles within spotlight radius (200px)
        const spotlightRadius = 200;
        const visibility = Math.max(0, 1 - mouseDistance / spotlightRadius);
        
        if (visibility > 0) {
          // Draw particle with reduced brightness and spotlight effect
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          
          // Add glow effect with reduced brightness
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size * 2
          );
          gradient.addColorStop(0, `rgba(255, 255, 255, ${particle.opacity * 0.3 * visibility})`);
          gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
          
          ctx.fillStyle = gradient;
          ctx.fill();
          
          // Add solid center with reduced brightness
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity * 0.4 * visibility})`;
          ctx.fill();
        }

        // Draw connections to other particles (only within spotlight)
        particlesRef.current.forEach((otherParticle) => {
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) +
            Math.pow(particle.y - otherParticle.y, 2)
          );

          if (distance < 100) {
            // Calculate visibility for both particles
            const otherMouseDistance = Math.sqrt(
              Math.pow(otherParticle.x - mouseRef.current.x, 2) +
              Math.pow(otherParticle.y - mouseRef.current.y, 2)
            );
            const otherVisibility = Math.max(0, 1 - otherMouseDistance / spotlightRadius);
            
            // Only draw if both particles are visible
            if (visibility > 0 && otherVisibility > 0) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 100) * Math.min(visibility, otherVisibility)})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        });

        // Draw connections to mouse cursor (only within spotlight)
        if (mouseRef.current.isHovering && visibility > 0) {
          const mouseDistance = Math.sqrt(
            Math.pow(particle.x - mouseRef.current.x, 2) +
            Math.pow(particle.y - mouseRef.current.y, 2)
          );

          if (mouseDistance < 150) {
            // Draw line to mouse with reduced brightness
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 * (1 - mouseDistance / 150) * visibility})`;
            ctx.lineWidth = 2;
            ctx.stroke();

            // Add attraction effect - particles move toward mouse
            // const attractionStrength = 0.02;
            // const dx = mouseRef.current.x - particle.x;
            // const dy = mouseRef.current.y - particle.y;
            // particle.vx += dx * attractionStrength * (1 - mouseDistance / 150);
            // particle.vy += dy * attractionStrength * (1 - mouseDistance / 150);
          }
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ 
        zIndex: 0, 
        background: 'transparent'
      }}
    />
  );
};

export default ParticleBackground;

