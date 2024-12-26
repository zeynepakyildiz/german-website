import React from 'react';
import '../css-files/NwPage.css';
import nw_img from '../../src/assets/images/nw-img.png';

function NwPage() {
  return (
    <div className="nwpage">
      <h1 className="nw-title">NATURWISSENSCHAFTEN</h1>
      <img className="nw-img" src={nw_img} alt="nw-img" />
      <div className="text-container-nwpage">
        <p className="nwpageText">
          Die Geschichte der <b>Naturwissenschaften</b> in Deutschland ist
          geprägt von bahnbrechenden Entdeckungen und Innovationen. Im
          Mittelalter und der Renaissance trugen Persönlichkeiten wie{' '}
          <b>Johannes Kepler</b> und <b>Otto von Guericke</b> wesentlich zur
          Entwicklung der Astronomie und Physik bei. Während der Aufklärung
          führten Wissenschaftler wie <b>Alexander von Humboldt</b> zu
          bedeutenden Fortschritten in den Bereichen Geographie und Biologie. Im
          19. und 20. Jahrhundert waren deutsche Forscher wie{' '}
          <b>Albert Einstein</b>, <b>Max Planck</b> und <b>Werner Heisenberg</b>{' '}
          Pioniere in der Physik, die revolutionäre Theorien wie die
          Relativitätstheorie und die Quantenmechanik entwickelten. Heute bleibt
          Deutschland eine zentrale Nation in der globalen wissenschaftlichen
          Gemeinschaft, mit wichtigen Institutionen wie der{' '}
          <b>Max-Planck-Gesellschaft</b> und bedeutenden Forschungsprogrammen in
          den Bereichen Technik, Chemie, Medizin und mehr.
        </p>
      </div>
    </div>
  );
}

export default NwPage;
