import './index.css'
import TrafficContext from '../../context/TrafficContext';
import { useContext} from 'react';
const GreenLight=()=>{
    const {currentLight}=useContext(TrafficContext)
    return(
    <>
    <div className={currentLight==="green" ?'bgcontainergreen-active':'bgcontainergreen'}>
    </div>
    </>
    );
}
export default GreenLight  