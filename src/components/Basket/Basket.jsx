import React from "react";
import { Link } from "react-router-dom";

function Basket({ basket, setBasketActive }) {
  return (
    <div className="basket">
      <div className="basket-container">
        <h1>Siyahı</h1>
        <div className="basket-rows">
          <div className="basket-row">
            {basket.orders ? (
              <>
                <h1>List adı: {basket.title}</h1>
                <div className="basket-orders">
                  {basket.orders.map((item, index) => (
                    <div key={index} className="basket-order">
                      <Link
                        target="_blank"
                        to={`https://www.themoviedb.org/movie/${item.id}`}
                      >
                        <img
                          src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                          alt=""
                        />
                      </Link>
                      <div>
                        <p>{item.title}</p>
                        <span>İl: {item.release_date.slice(0, 4)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="basket-empty">Heç bir film yoxdur</div>
            )}
          </div>
        </div>
        <button onClick={() => setBasketActive(false)}>Geriyə qayıt</button>
      </div>
    </div>
  );
}

export default Basket;
