import { createContext } from "react";

const TrafficContext = createContext({
    currentLight:null,
    onClickPedestrian:()=>{},
})
export default TrafficContext 