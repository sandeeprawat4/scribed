import React from "react";
import Login from './Login';
import "./App.css" ;

function App() {
  //const[data, setData] = React.useState(null);
  /*React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data)=>setData(data.message));
  }, []);*/
  return (
    <div className="App">
      <div>
        <Login/>
      </div>
    </div>
  );
}

export default App;
