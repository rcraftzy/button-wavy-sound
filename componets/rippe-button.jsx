"use client";
import styles from "@/styles/ripplebutton.module.css";
import { useRef, useState } from "react";

const RippleButton = () => {
  const [isActive, setIsActive] = useState(false);
  const sound = new Audio("/Cartoon.mp3");
  const [audio, setAudio] = useState(sound);
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
    isActive ? audio.pause() : audio.play();
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
    </div>
  );
};
export default RippleButton;
// <button className="button" >
// </button>
