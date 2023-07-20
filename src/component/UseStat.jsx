/*
import React, { useState } from "react";

const UseStat = () => {
  /*

    // useState Understading Inside
  const [number, setNumber] = useState(1);

  return (
    <div>
      <h1>number : {number}</h1>
      <button onClick={() => setNumber(number + 1)}>click</button>
    </div>
  );
  
  //useState Working With Immutable Object
  const [myObj, setMyObj] = useState({
    key1: "value1",
    key2: "value2",
    key3: "value3",
  });

  const change = () => {
    setMyObj(
        prevOBJ => {
            ...prevOBJ,
            key3: "value3 changed"
        }
    )
  };

  return (
    <div>
      <h1>{myObj.key3} </h1>
      <button onClick={change}>click</button>
    </div>
  );



 
  //useState Working With Immutable Array
  //create todo list

  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const addToList = () => {
    list.push(item);
    setList([...list]);
  };
  const removeItem = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };

  return (
    <div>
      <table>
        <tbody>
          {list.length !== 0 ? (
            list.map((element, index) => {
              return (
                <tr>
                  <td>{element}</td>
                  <td>
                    <button
                      onClick={() => {
                        removeItem(index);
                      }}
                    >
                      remove
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>

      <input onChange={(e) => setItem(e.target.value)} placeholder="item" />
      <button onClick={addToList}>Add</button>
    </div>
  );
};

export default UseStat;
 */
