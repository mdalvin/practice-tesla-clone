import React from "react";
import "./HeaderBlock.css";

function HeaderBlock() {
  return (
    <div className="headerBlock">
      <div className="headerBlock_Info">
        <div className="headerBlock_InfoText">
            <h1>Model 3</h1>
            <h4>
                Order Online for <span>Touchless Delivery</span>
            </h4>
        </div>
        <div className='headerBlock_actions'>
            <button className="headerBlock_Primary">custom order</button>
            <button className="headerBlock_Secondary">existing inventory</button>
        </div>
      </div>
    </div>
  );
}

export default HeaderBlock;
