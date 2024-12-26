import React from 'react';
import '../css-files/KunstPage.css';
import kunst_img from '../../src/assets/images/kunst_img.png';

function KunstPage() {
  return (
    <div className="kunstpage">
      <h1 className="kunst-title">KUNST</h1>
      <img className="kunst-img" src={kunst_img} alt="kunst-img" />
      <div className="text-container-kunstpage">
        <p className="kunstpageText">
          Die historische Entwicklung der deutschen Kunst und Literatur wurde
          durch tiefgreifende historische und kulturelle Veränderungen geprägt.
          Beginnend mit der <b>Renaissance</b>, wurden Künstler wie{' '}
          <b>Albrecht Dürer</b> durch ihre detailreichen Gravuren und Gemälde
          bekannt. Im Barock zeigten Musiker wie <b>Johann Sebastian Bach</b>{' '}
          und <b>Georg Friedrich Händel</b> ihre Einflüsse auf die universelle
          Sprache der Musik. Im 18. Jahrhundert, während der Zeit der
          Aufklärung, prägten deutsche Denker und Schriftsteller die europäische
          Kultur maßgeblich. <b>Goethe und Schiller</b> führten Bewegungen wie
          den deutschen <b>Romantizismus</b> und <b>Sturm und Drang</b> an.
          Werke dieser Zeit zeichnen sich durch die Betonung individueller
          Sensibilität und Naturbeschreibungen aus. Im 20. Jahrhundert wurden
          deutsche Kunst und Literatur durch zwei Weltkriege und politische
          Umwälzungen stark beeinflusst. Während der <b>Weimarer Republik</b>{' '}
          entwickelten sich <b>experimentelles</b> Theater, Film und bildende
          Kunst weiter. Doch die NS-Zeit zwang viele Künstler und Intellektuelle
          ins Exil, und ihre Werke wurden oft verboten. Nach dem{' '}
          <b>Zweiten Weltkrieg</b> spaltete sich Deutschland in{' '}
          <b>Ost- und Westdeutschland</b>, wo Kunst oft als ideologisches
          Werkzeug genutzt wurde. Viele Künstler arbeiteten unter politischem
          Druck. Seit den 1990er Jahren hat das vereinigte Deutschland{' '}
          <b>moderne und postmoderne</b> Kunstströmungen gefördert und ist zu
          einem wichtigen Akteur auf der globalen Kunst- und Literaturszene
          geworden. Diese historische Reise zeigt, wie die deutsche Kunst und
          Literatur eine kulturelle Vielfalt und Tiefe erlangt hat. In jeder
          Epoche wurden sie von verschiedenen ästhetischen und ideologischen
          Strömungen geprägt und nehmen heute einen wichtigen Platz im
          Weltkulturerbe ein.
        </p>
      </div>
    </div>
  );
}

export default KunstPage;
