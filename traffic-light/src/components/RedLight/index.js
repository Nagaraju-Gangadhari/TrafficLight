import TrafficContext from '../../context/TrafficContext';
import './index.css'
import { useContext} from 'react';
const RedLight=()=>{
    const {currentLight}=useContext(TrafficContext)
    return (
    <>
    <div className={currentLight==="red" ? "bgcontainerred":"bgcontainerred-inactive"}>
    </div>
    </>
    );
}
export default RedLight 