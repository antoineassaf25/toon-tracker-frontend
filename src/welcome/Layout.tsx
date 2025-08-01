import { useEffect, useState } from "react";
import NavigationBar from "../navigation/NavigationBar";
import bgImage from "../assets/ttc-background.webp";

interface Props {
  children: React.ReactNode
}

export function Layout( { children } : Props ) {
  const [ blurSize, setBlurSize ] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBlurSize(5);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      style={{
        position: 'relative',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden'
      }}
    >
      {/* Background Layer */}
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: `blur(${blurSize}px)`,
          transition: 'filter 2s ease',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0
        }}
      />

      {/* Navigation Bar Layer */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <NavigationBar />
      </div>

      {/* Page Content Layer */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 60px)',
        marginTop: '60px'
        }}>
        {children}
      </div>
    </main>
  );
}