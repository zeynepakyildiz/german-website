import '../css-files/HomePage.css';
import science from '../assets/images/science.png';
import history from '../assets/images/history.png';
import essen from '../assets/images/essen.png';
import kunst from '../assets/images/kunst.png';
import map from '../assets/images/map.png';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <div>
        <section className="intro">
          <h1>Warum Deutsch Lernen?</h1>
          <p>
            Deutsch ist die Amtssprache in Deutschland, Österreich, Belgien,
            Liechtenstein und Luxemburg und ist in 42 weiteren Ländern
            gesprochen.
          </p>
          <img src={map} alt="Deutschsprechende Länder" className="map-image" />
        </section>
        <section className="cards">
          <div className="card">
            <h3>Kunst</h3>
            <Link to="/kunst">
              <img src={kunst} alt="Kunst & Literatur" />
            </Link>
          </div>
          <div className="card">
            <h3>Essen</h3>
            <Link to="/essen">
              <img src={essen} alt="Essen" />
            </Link>
          </div>
          <div className="card">
            <h3>Naturwissenschaft</h3>
            <Link to="/naturwissenschaft">
              <img src={science} alt="science" />
            </Link>
          </div>
          <div className="card">
            <h3>Geschichte</h3>
            <Link to="/geschichte">
              <img src={history} alt="Geschichte" />
            </Link>
          </div>
        </section>
        <footer className="footer">
          <p className="footer-text">All rights reserved©</p>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
