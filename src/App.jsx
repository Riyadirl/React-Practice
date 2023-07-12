//import Headers from "./component/Headers";
//import ContactForm from "./component/contactForm";
//import Footer from "./component/footer";
//import Hero from "./component/hero";

function App() {
  let marks =77;
  return (
    <div>

{(()=>{

if(marks>80 && marks<100){
  return <h1>A+</h1>
}
if(marks>70 && marks<80){
  return <h1>B+</h1>
}
if(marks>60 && marks<70){
  return <h1>C+</h1>
}

})()}


    </div>
    
  );
}

export default App;
