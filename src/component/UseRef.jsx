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
 

  // 27 useRef Working With Input Element

  // Declare variables using destructuring assignment
  let firstName,
    lastName = useRef();
  // Define the change function
  const change = () => {
    let fname = firstName.value; // Get the value of the firstName input
    let lname = lastName.value; // Get the value of the lastName input

    alert(fname + " " + lname); // Display an alert with the concatenated values
  };

  return (
    <div>
      <input
        ref={(a) => (firstName = a)}
        type="text"
        placeholder="First Name"
      />
      <br></br>
      <input ref={(b) => (lastName = b)} type="text" placeholder="Last Name" />
      <br></br>
      <button onClick={change}>click</button>
    </div>
  ); 



  //useRef Working With CSS Class

  let myHeadLine = useRef();

  const change = () => {
    myHeadLine.current.classList.remove("text-success");
    myHeadLine.current.classList.add("text-danger");
  };

  return (
    <div>
      <h1 className="text-success" ref={myHeadLine}>
        fdgfdgdf
      </h1>
      <button onClick={change}>click</button>
    </div>
  );

  //useRef Working With Persisted Mutable Property


  let number = useRef(0);

  const change = () => {
    number.current++;
    console.log(number.current);
  };

  return (
    <div>
      <button onClick={change}>click</button>
    </div>
  );

  

  //useRef Caching Expensive Computation

  let apidata = useRef(null);
  let mypTag = useRef();

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products/1");
    apidata.current = await response.json();
  };
  const showData = () => {
    mypTag.current.innerText = JSON.stringify(apidata.current);
  };

  return (
    <div>
      <p ref={mypTag}></p>
      <button onClick={fetchData}>call api</button> <br />
      <button onClick={showData}>show data</button>
    </div>
  );

  */
  //
};
export default Testing;
