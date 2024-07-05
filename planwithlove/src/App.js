
import './App.css';
import Tour from './Components/Tour'
import data from './data';
import {useState} from 'react'

function App() {
  const [tour,setTour]=useState(data);
  function BtnHandler(id){
     const newTour=tour.filter(tt=>tt.id!=id);
     setTour(newTour);
  }
  function refreshHandler(){
    setTour(data);
  }
  if(tour.length==0){
    return (
      <center>
          <div>
             <h2> No Tour Left </h2>
             <button onClick={refreshHandler}> Refresh </button>
          </div>
      </center>

    );
  }


  
  return (
    <div className="App">
      <Tour data={tour} BtnHandler={BtnHandler}/>
    </div>
  );
}

export default App;
