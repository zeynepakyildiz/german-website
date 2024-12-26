import React from 'react';
import '../css-files/LecturesPage.css';
import card_img from '../../src/assets/images/card-image.png';
import { Link } from 'react-router-dom';

function LecturesPage() {
  return (
    <div className="lectures-page">
      <div className="lectures-table">
        <div className="lecture-card" id="one">
          <Link to="/lecture-one">
            <h2 className="card-title">Lecture 1</h2>
            <img
              src={card_img}
              alt="lecture-one"
              className="lecture-card-img"
            />
          </Link>
        </div>
        <div className="lecture-card" id="two">
          <Link to="/lecture-two">
            <h2 className="card-title">Lecture 2</h2>
            <img
              src={card_img}
              alt="lecture-two"
              className="lecture-card-img"
            />
          </Link>
        </div>
        <div className="lecture-card" id="three">
          <Link to="/lecture-three">
            <h2 className="card-title">Lecture 3</h2>
            <img
              src={card_img}
              alt="lecture-three"
              className="lecture-card-img"
            />
          </Link>
        </div>
        <div className="lecture-card" id="four">
          <Link to="/lecture-four">
            <h2 className="card-title">Lecture 4</h2>
            <img
              src={card_img}
              alt="lecture-four"
              className="lecture-card-img"
            />
          </Link>
        </div>
        <div className="lecture-card" id="five">
          <Link to="/lecture-five">
            <h2 className="card-title">Lecture 5</h2>
            <img
              src={card_img}
              alt="lecture-five"
              className="lecture-card-img"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LecturesPage;
