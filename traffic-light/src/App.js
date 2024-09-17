import GreenLight from './components/GreenLight';
import RedLight from './components/RedLight';
import PedestrianButton from './components/PedestrianButton';
import YellowLight from './components/YellowLight';
import {useState} from 'react';
import TrafficContext from './context/TrafficContext'
import './App.css';

const App= () =>{
  const [currentLight,setCurrentLight]=useState("green")  
  const fetchingTimer=()=>{
    const interval=setTimeout(()=>{
       setCurrentLight("red");
    },3000);
    return () => clearTimeout(interval);
  }
  
  const fetchingRedTimer=()=>{
    const redinterval=setTimeout(()=>{
      setCurrentLight("green");
    },7000);
    return () => clearTimeout(redinterval);
  } 
  const fetchingGreenTimer=()=>{
    const greeninterval=setTimeout(()=>{
      setCurrentLight("orange");
    },10000);
    return () => clearInterval(greeninterval);
  }
    switch (currentLight){
      case "orange":
         fetchingTimer();
         break;
      case "red":
         fetchingRedTimer();
         break;
      case "green":
        fetchingGreenTimer();
        break;
      default:
        return null    
    } 
    const onClickPedestrian=()=>{
      setCurrentLight("red");
    }
  return (
    <TrafficContext.Provider
      value={{
        currentLight,
        onClickPedestrian,
      }}
      >
    <div className="App">
      <header className="App-header">
        <>
        <RedLight />
        <YellowLight />
        <GreenLight />
        <PedestrianButton />
        </>
      </header>
    </div>
  </TrafficContext.Provider>
  )
}
export default App;
