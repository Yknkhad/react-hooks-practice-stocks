import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, onStockClick }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolio.length > 0 ? (
        portfolio.map((stock) => (
          <Stock key={stock.id} stock={stock} onClick={onStockClick} />
        ))
      ) : (
        <p>No stocks in your portfolio yet.</p>
      )}
    </div>
  );
}

export default PortfolioContainer;
