import React from "react";

const Trelo = () => {
  return (
    <div className="container">
      <div className="title">
        <h1>Daylly Trello</h1>
        <button>Change Background</button>
      </div>
      <div className="main-card">
        <div className="itemt-card">
          <div className="title-itemt-card">
            <div className="left-title-itemt">Todo</div>
            <div className="Right-title-itemt">...</div>
          </div>
          <ul className="list-itemt-main">
            <li>Learning React</li>
            <li>Learning Es6</li>
            <li>Play some game</li>
          </ul>
          <div className="btn-item">
            <button>+ Add a card</button>
          </div>
        </div>
        <div className="itemt-card">
          <div className="title-itemt-card">
            <div className="left-title-itemt">Todo</div>
            <div className="Right-title-itemt">...</div>
          </div>
          <ul className="list-itemt-main">
            <li>Learning React</li>
            <li>Learning Es6</li>
            <li>Play some game</li>
          </ul>
          <div className="btn-item">
            <button>+ Add a card</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trelo 
