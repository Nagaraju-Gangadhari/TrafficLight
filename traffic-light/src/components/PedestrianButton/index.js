import './index.css'
import { useContext } from 'react'
import TrafficContext from '../../context/TrafficContext'
const PedestrianButton=()=>{
    const {onClickPedestrian}=useContext(TrafficContext)
    return (
        <button className="button" onClick={onClickPedestrian} >Pedestrain Button</button>
    )
}
export default PedestrianButton 