import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styles/skills.css";

gsap.registerPlugin(ScrollTrigger);

const StrengthContents = ({
  contents,
  skill,
  img,
}: {
  contents: string;
  skill: string;
  img: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !imgRef.current || !titleRef.current) return;

    // 이미지 애니메이션
    gsap.fromTo(
      imgRef.current,
      {
        scale: 0.5,
        rotation: -10,
        opacity: 0,
      },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      }
    );

    // 제목 애니메이션
    gsap.fromTo(
      titleRef.current,
      {
        x: -30,
        opacity: 0,
        scale: 0.8,
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          end: "top 25%",
          scrub: 1.2,
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="three">
      <div className="content-container">
        <div className="content_box">
          <img ref={imgRef} className="content_img" src={img} alt="" />
          {contents}
        </div>

        <div ref={titleRef} className="content_title">
          {skill}
        </div>
      </div>
    </div>
  );
};

export default StrengthContents;
