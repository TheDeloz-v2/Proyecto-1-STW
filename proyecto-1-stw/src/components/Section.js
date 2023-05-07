import React from 'react';

function Section(props) {
  const { imageUrl, text, subtext, btext } = props;

  const sectionStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '710px',
    display: 'flex',
    alignItems: 'flex-end',
    color: '#fff',
    fontSize: '2rem',
    textAlign: 'left',
  };

  return (
    <section style={sectionStyle}>
      <div className="content-outer">
        <div className="content">
          <h2>{text}</h2>
          <p>{subtext}</p>
          <a href=""><span>{btext}</span></a>
        </div>
      </div>
    </section>
  );
}

export default Section;
