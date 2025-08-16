// AmbientAudioProvider.jsx
import React, { createContext, useContext, useRef, useState, useEffect } from 'react';

const AmbientAudioContext = createContext();

export function useAmbientAudio() {
  return useContext(AmbientAudioContext);
}

export function AmbientAudioProvider({ children }) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [playing]);

  // Pause audio on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const toggleAudio = () => setPlaying((p) => !p);

  return (
    <AmbientAudioContext.Provider value={{ playing, toggleAudio }}>
      {children}
      <audio ref={audioRef} loop style={{ display: 'none' }}>
        <source src="/ambient.mp3" type="audio/mpeg" />
      </audio>
    </AmbientAudioContext.Provider>
  );
}
