import { useEffect, useState } from "react";
import { useIsMobile } from "../../../hooks/useMediaQuery";

export default function Cursor(){
    const isMobile=useIsMobile();
  
  
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  
  
  useEffect(() => {
      addEventListeners();
      return () => removeEventListeners();
  }, []);
  
  const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
  };
  
  const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
  };
  
  const onMouseMove = (e:MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    
  };
  
  const onMouseLeave = () => {
      setHidden(true);
  };
  
  const onMouseEnter = () => {
      setHidden(false);
  };
  

  
  
  return (isMobile ? null :
      <div
          className={`cursor ${clicked?"cursor--clicked":""} ${hidden?"cursor--hidden":""} ${linkHovered ? "cursor--link-hovered":""}`}
          style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
  );
  };
  
  
  
