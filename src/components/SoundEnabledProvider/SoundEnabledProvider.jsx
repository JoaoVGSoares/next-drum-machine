"use client";
import { createContext, useContext, useState } from "react";

const SoundEnabledContext = createContext();

function SoundEnabledProvider({ children }) {
  const [soundEnabled, setSoundEnabled] = useState(true);

  function toggleSound() {
    setSoundEnabled(!soundEnabled);
  }

  return (
    <SoundEnabledContext.Provider value={{ soundEnabled, toggleSound }}>
      {children}
    </SoundEnabledContext.Provider>
  );
}

export function useSoundEnabled() {
  const data = useContext(SoundEnabledContext);

  if (!data) {
    throw new Error(
      "Cannot consume SoundEnabled context without a SoundEnabledProvider"
    );
  }

  return data;
}

export default SoundEnabledProvider;
