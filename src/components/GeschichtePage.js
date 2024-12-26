import React from 'react';
import '../css-files/GeschichtePage.css';
import gpage_img from '../../src/assets/images/gpage_img.gif';

function GeschichtePage() {
  return (
    <div className="geschichte-page">
      <h1 className="gpage-title">GESCHICHTE</h1>
      <img className="gpage-img" src={gpage_img} alt="gpage-img" />
      <div className="text-container-gpage">
        <p className="gpageText">
          Die deutsche Geschichte ist geprägt von bedeutenden Ereignissen und
          Umwälzungen, die das Land und die Welt geformt haben. Vom Heiligen
          Römischen Reich über die Reformation im 16. Jahrhundert und die
          industrielle Revolution des 19. Jahrhunderts bis hin zu den beiden
          Weltkriegen des 20. Jahrhunderts hat Deutschland eine zentrale Rolle
          in der europäischen und globalen Politik, Wirtschaft und Kultur
          gespielt. Nach der Wiedervereinigung im Jahr 1990 ist Deutschland zu
          einem der wirtschaftlich und politisch einflussreichsten Länder der
          Welt geworden.
        </p>
      </div>
    </div>
  );
}

export default GeschichtePage;
