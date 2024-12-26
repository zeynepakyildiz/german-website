import React from 'react';
import '../css-files/EssenPage.css';
import essen from '../assets/images/essen.png';

function EssenPage() {
  return (
    <div className="essen-page">
      <h1 className="essenpage-title">ESSKULTUR</h1>
      <img src={essen} alt="esskultur" className="essen-img" />
      <div className="text-container-essenpage">
        <p className="p-essenpage">
          Die deutsche Esskultur ist tief in Traditionen verwurzelt und variiert
          stark je nach Region. Zum Frühstück gehören oft Brot, Käse und
          Aufschnitt, während das Mittagessen als Hauptmahlzeit meist Fleisch,
          Kartoffeln und Gemüse umfasst. Typische Gerichte wie Sauerbraten,
          Bratwurst oder Schnitzel sind bekannt. Brot spielt eine zentrale Rolle
          mit einer großen Vielfalt in ganz Deutschland. Traditionelle
          Mahlzeiten werden oft mit Bier oder Wein genossen, und in vielen
          Regionen sind saisonale Spezialitäten wie Spargel im Frühling oder
          Weihnachtsleckereien sehr beliebt.
        </p>
      </div>
    </div>
  );
}
export default EssenPage;
