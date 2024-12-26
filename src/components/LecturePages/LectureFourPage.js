import React from 'react';
import '../../css-files/Lecture.css';
import img from '../../assets/images/zeitformen.png';

function LectureFourPage() {
  return (
    <div className="lecture" id="lecture-four">
      <center>
        <h3>LEKTION 4: DAS TEMPUS</h3>
      </center>
      <center>
        <img src={img} alt="almancada tenseler" width="800" height="400" />
      </center>
      <p>
        Almanca’da sıkça kullanılan 6 temel tense ve her birine örnekler ile
        Türkçe karşılıkları aşağıda verilmiştir: <br />
        <br />
        <strong>1. Präsens (Şimdiki Zaman): </strong>
        <br />
        Bu tense, şu anda gerçekleşen veya genel olarak doğru olan eylemleri
        ifade eder. <br />
        <strong>Almanca:</strong> Ich gehe in die Schule. <br />
        <strong>Türkçe:</strong>Okula gidiyorum. <br />
        <br />
        <strong>2. Präteritum (Geçmiş Zaman):</strong>
        <br />
        Bu tense, geçmişte tamamlanmış eylemleri ifade eder. Özellikle yazılı
        dilde kullanılır. <br />
        <strong>Almanca: </strong>Ich ging in die Schule. <br />
        <strong>Türkçe: </strong>Okula gittim. <br />
        <br />
        <strong>3. Perfekt (Mükemmel Geçmiş Zaman):</strong>
        <br />
        Bu tense, geçmişte tamamlanmış ancak sonucu hala etkili olan eylemleri
        ifade eder. Almanca’da günlük konuşmada yaygındır. <br />
        <strong>Almanca:</strong>
        Ich bin in die Schule gegangen. <br />
        <strong>Türkçe: </strong>Okula gittim. <br />
        <br />
        <strong>4. Plusquamperfekt (Miş’li Geçmiş Zaman):</strong>
        <br />
        Bu tense, geçmişte başka bir olaydan önce gerçekleşmiş eylemleri ifade
        eder. <br />
        <strong>Almanca:</strong> Ich war in die Schule gegangen, bevor der
        Regen begann. <br />
        <strong>Türkçe:</strong> Yağmur başlamadan önce okula gitmiştim. <br />
        <br />
        <strong>5. Futur I (Gelecek Zaman): </strong>
        <br />
        Bu tense, gelecekte gerçekleşecek eylemleri ifade eder.
        <br />
        <strong>Almanca:</strong> Ich werde in die Schule gehen.
        <br />
        <strong>Türkçe: </strong> Okula gideceğim. <br />
        <br />
        <strong>6. Futur II (Gelecekte Tamamlanmış Zaman):</strong>
        <br />
        Bu tense, gelecekte belirli bir zamandan önce tamamlanmış olacak
        eylemleri ifade eder. <br />
        <strong>Almanca: </strong> Ich werde in die Schule gegangen sein, bevor
        du ankommst. <br />
        <strong>Türkçe: </strong>Sen gelmeden önce okula gitmiş olacağım. <br />
        <br />
        Bu tenseler Almanca dilinde farklı zaman kavramlarını ifade etmek için
        kullanılır ve her birinin kendine özgü bir anlamı vardır.
      </p>
      <hr />
      <br />
    </div>
  );
}

export default LectureFourPage;
