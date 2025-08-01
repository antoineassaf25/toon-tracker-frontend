import { useEffect, useState } from "react";
import NavigationBar from "../navigation/NavigationBar";
import bgImage from "../assets/ttc-background.webp";

export default function Search() {
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
        }}
      />
      <div>
        <NavigationBar />
      </div>
    </main>
  );
}