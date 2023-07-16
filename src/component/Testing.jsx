import { useRef } from "react";
const Testing = () => {
  /*

//25 seRef InnerText InnerHTML

  let myHeadLine = useRef();

  const change = () => {
    myHeadLine.current.innerHTML = "<ul><li>a</li>bb<li></li></ul>";
  };
  return (
    <div>
      <h1 ref={myHeadLine}></h1>

      <button onClick={change}>click</button>
    </div>
  );

*/

  // 26 useRef Working With Attribute

  let myImg = useRef();

  const change = () => {
    myImg.current.src = "https://placehold.co/800?text=Hello+World&font=roboto";
    myImg.current.setAttribute("height", "400px");
    myImg.current.setAttribute("width", "600px");
  };
  return (
    <div>
      <img ref={myImg} src="https://placehold.co/600x400" />

      <button onClick={change}>click</button>
    </div>
  );

  // 27 useRef Working With Form
};
export default Testing;
