import TrafficContext from '../../context/TrafficContext';
import './index.css'
import { useContext } from 'react';
const YellowLight=()=>{
    const {currentLight}=useContext(TrafficContext)
    return (
    <>
    <div className={currentLight==="orange" ? "bgcontainer":"bgcontainer-inactive"}>
    </div>
    </>
    );
}
export default YellowLight 