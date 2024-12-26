import React from 'react';
import '../../css-files/Lecture.css';

function LectureOnePage() {
  return (
    <div className="lecture" id="lecture-one">
      <center>
        <h3>LEKTION 1: ARTIKELN</h3>
      </center>
      <center>
        <img
          src="https://i.pinimg.com/564x/7a/f3/b2/7af3b2ed390b5978d808502ce32500d4.jpg"
          alt="artikel tablosu"
        />
      </center>
      <p>
        Almancada ismin halleri dört tanedir ve bunlar şunlardır:
        <br />
        <br />
        <strong>Nominativ (Yalın Hal):</strong> <br />
        Cümlenin öznesi olan isim bu halde bulunur. Kim veya ne sorusuna cevap
        verir. <br />
        Örnek:
        <strong>Der Mann</strong> liest ein Buch. (Adam bir kitap okuyor.)
        <br />
        <br />
        <strong>Akkusativ (Belirtme Hali):</strong> <br />
        Cümlenin nesnesi olan isim bu halde bulunur. Kimi veya neyi sorusuna
        cevap verir.
        <br />
        Örnek: Ich sehe <strong>den Mann</strong>. (Adamı görüyorum.)
        <br />
        <br />
        <strong>Dativ (Yönelme Hali):</strong> <br />
        İsim, cümlede dolaylı tümleç olarak kullanıldığında bu halde bulunur.
        Kime veya neye sorusuna cevap verir. <br />
        Örnek: Ich gebe <strong>dem Mann</strong> das Buch. (Adama kitabı
        veriyorum.) <br />
        <br />
        <strong>Genitiv (İlgi Hali):</strong>
        <br />
        İsim, bir başka isme ait olduğunu belirtmek için kullanıldığında bu
        halde bulunur. Kimin veya neyin sorusuna cevap verir. <br />
        Örnek: Das ist das Buch <strong>des Mannes</strong>. (Bu adamın kitabı.)
      </p>
      <hr />
    </div>
  );
}

export default LectureOnePage;
