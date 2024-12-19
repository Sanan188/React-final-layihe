import React, { useState } from "react";

function List({ list, setList, setBasketActive, basket, setBasket }) {
  const [active, setActive] = useState(false);
  const [listName, setListName] = useState("");
  const removeFromList = (id) => {
    const filteredList = list.filter((item, index) => index !== id);
    setList(filteredList);
  };

  const addToBasket = () => {
    setBasket({
      ...basket,
      title: listName,
      orders: [...list],
    });
    setList([]);
    setListName("");
  };

  return (
    <div className="list">
      <input
        type="text"
        placeholder="Yeni list yarat"
        value={listName}
        onChange={(e) => setListName(e.target.value)}
      />
      {list.map((listItem, index) => (
        <div key={index} className="list-row">
          <p>{listItem.title}</p>
          <button onClick={() => removeFromList(index)}>✖</button>
        </div>
      ))}
      <div className="list-buttons">
        <button
          disabled={listName.length > 0 && list.length ? false : true}
          onClick={() => {
            setActive(!active);
            addToBasket();
          }}
        >
          Saxla
        </button>
        <button onClick={() => setBasketActive(true)}>Listə keçid</button>
      </div>
    </div>
  );
}

export default List;
