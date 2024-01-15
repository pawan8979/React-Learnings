import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './Page1.scss';
import videoFile from '../../Components/Video/Video.mp4';
import Video from '../../Components/Video/Video';

const Page1 = () => {
  const h1Ref = useRef(null); 
  const h2Ref = useRef(null);

  // useEffect(() => {
  //   gsap.from(h1Ref.current, {
  //     y: 100,
  //     opacity: 0,
  //     duration: 0.9,
  //     stagger:0.2,
  //   });

  //   gsap.to(h1Ref.current, {
  //     y: 0,
  //     opacity: 1,
  //   }
  //   );

  //   gsap.from(h2Ref.current, {
  //     y: 100,
  //     opacity: 0,
  //     delay:0.5,
  //     duration: 0.9,
  //     stagger:0.2,
  //   }
  //   );
  //   gsap.to(h2Ref.current, {
  //     y: 0,
  //     opacity: 1,
  //   }
  //   );
  // });



    useEffect(() => {

            const innHero = gsap.fromTo(
              h1Ref.current,
                {
                    opacity: 0,
                    duration: 0.9,
                    y: 200,
                    ease: "power4",
                  },
                  {
                    opacity:1,
                    y: 0,
                    duration: 0.9,
                    ease: "power4",
                }
            );
            const outHero = gsap.fromTo(
              h2Ref.current,
                {
                    opacity: 0,
                    duration: 0.9,
                    y: 200,
                    delay:0.5,
                    ease: "power4",
                },
                {
                    opacity:1,
                    y: 0,
                    duration: 0.9,
                    delay:0.5,
                    ease: "power4",
                }
            );
            return () => {
                innHero.kill();
                outHero.kill();
            };
        }, []
    );

  return (
    <div id="page1">
      <h1 
      ref={h1Ref}
      >CHANGE</h1>
      <h1 
      ref={h2Ref}
      >THE COURSE</h1>
      <Video>{videoFile}</Video>
    </div>
  );
};

export default Page1;
