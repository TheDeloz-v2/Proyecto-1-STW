import React, { useRef, useEffect } from 'react';

function Section(props) {
  const { imageUrl, text, subtext, btext } = props;
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (section) {
        if (section.isIntersecting) {
          section.target.className = 'active';
        }
      });
    }, {threshold: .8});

    observer.observe(section);

    return () => {
      observer.unobserve(section);
    }
  }, []);

  const sectionStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-end',
    color: '#fff',
    fontSize: '2rem',
    textAlign: 'left',
  };

  return (
    <section style={sectionStyle} ref={sectionRef}>
      <div className="content-outer">
        <div className="content">
        <p>{subtext}</p>
        <h2>{text}</h2>
          <a href="index.html"><span>{btext}</span></a>
        </div>
      </div>
      <div class="scroll-arrow">
        <svg width="30px" height="20px">
          <path stroke="#ffffff" fill="none" stroke-width="2px" d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "></path>
        </svg>
      </div>

    </section>
  );
}

export default Section;
