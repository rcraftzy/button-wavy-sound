"use client";
import styles from "@/styles/ripplebutton.module.css";
import { useRef, useState } from "react";

const RippleButton = () => {
  const [isActive, setIsActive] = useState(false);
  const audioRef = useRef();
  const buttonRef = useRef(null);

  const handleMouseOver = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left; // Posición x del mouse dentro del botón
    const y = e.clientY - rect.top; // Posición y del mouse dentro del botón

    button.style.setProperty("--mouse-x", `${x}px`);
    button.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleClick = () => {
    isActive ? audioRef.current.pause() : audioRef.current.play();
    setIsActive(!isActive);
  };

  return (
    <div>
      <button
        ref={buttonRef}
        onMouseOver={handleMouseOver}
        className={`${styles.button}`}
        onClick={handleClick}
      >
        <div className={isActive ? "wavy wavy-transition" : "wavy-none"} />
        <div className={`${styles.circle}`}></div>
      </button>
      <audio ref={audioRef}>
        <source
          src="/Cartoon.mp3"
          type="audio/mp3"
        />
        Tu navegador no soporta la etiqueta de audio.
      </audio>
    </div>
  );
};
export default RippleButton;
// <button className="button" >
// </button>
