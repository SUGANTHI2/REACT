import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";
function App() {
 
  const quoteUrl="https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw";
  const [quote,setQuote]=useState("");
  const [author,setAuthor]=useState("");
  const [color, setColor] = useState('#4CAF50');
  
  useEffect(() => {
    return () => {
      generateQuote();
    };
  },[]);

  function generateQuote(){
    let x=Math.floor((Math.random()*quote.length));

    axios.get(quoteUrl).then((res)=>{
      setQuote(res.data.quotes[x].quote);
      setAuthor(res.data.quotes[x].author);
      const colors = ['#392b44', '#6f244e', '#ca135e', '#dde3f4', '#fe7c73', '#b23b6b', '#ffbdbd', '#FFA07A', '#F08080','#95d0dc','#dd585b','#82282b','#aface6','#ffbdbd'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
      console.log(res);
    });
    
  }
  return (
    <div className='wrap'>
      <div className='inner-wrap'>
        <h2>Random Qoute Generator</h2>
        <h1 className='quote' style={{color:color}}>{quote}</h1>
        <h3 className='author' style={{color:color}}>-{author}</h3>
        <button className='btn'onClick={generateQuote}style={{backgroundColor:color}}>Click here!!!</button>
      </div>
    </div>
    
  );
 
}

export default App;