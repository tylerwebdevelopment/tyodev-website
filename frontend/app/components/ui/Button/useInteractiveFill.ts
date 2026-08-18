import gsap from "gsap";
import React, { useRef } from "react"

export const useInteractiveFill = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);
  const contentRef = useRef<HTMLSpanElement>(null);
  const xTo = useRef<gsap.QuickToFunc | null>(null);
  const yTo = useRef<gsap.QuickToFunc | null>(null);

  const handlePointerEnter = (event : React.PointerEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    const fill = fillRef.current;
    const content = contentRef.current;

   

    if(!button || !fill || !content) return;

    const rect = button.getBoundingClientRect();

      if (!xTo.current) {
    xTo.current = gsap.quickTo(fill, "x", {
      duration: 0.2,
      ease: "power2.out",
    });
  }

  if (!yTo.current) {
    yTo.current = gsap.quickTo(fill, "y", {
      duration: 0.2,
      ease: "power2.out",
    });
  }


    const x = event.clientX - rect.left ;
    const y = event.clientY - rect.top ;

    const radius = Math.hypot(rect.width, rect.height);
    const fillsize = 16;
    const scale = ((radius) * 2) / fillsize;

    gsap.set(fill, {
      x, y, scale: 0, xPercent: -50, yPercent: -50,
    });

    gsap.to(fill, {
      scale: scale, 
      duration: 0.85,
      ease: 'power3.out',
    });

    gsap.to(content, {
      color: '#ffffff',
      duration: .4, 
      ease: 'power2.out',
    })
  }

  const handlePointerMove = (
  event: React.PointerEvent<HTMLButtonElement>
) => {
  const button = buttonRef.current;

  if (!button || !xTo.current || !yTo.current) return;

  const rect = button.getBoundingClientRect();

  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  xTo.current(x);
  yTo.current(y);
};

  const handlePointerLeave = () => {
    const fill = fillRef.current;
    const content = contentRef.current;

    if(!fill || !content) return;

    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();

    gsap.to(fill, {
      scale: 0,
      duration: 0.4, 
      ease: 'power3.inOut',
      overwrite: true,
    })
      gsap.to(content, {
      color: `rgb(${primaryColor})`,
      duration: .4, 
      ease: 'power1.out',
    })
  }

  return {
    buttonRef, 
    fillRef,
    contentRef,
    handlePointerEnter,
    handlePointerMove,
    handlePointerLeave
  }
}