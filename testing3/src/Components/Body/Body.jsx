import Comp1 from "./Comp1";
import Comp3 from "./Comp3";
import Comp2 from "./Comp2";
import Comp4 from "./Comp4";
import Comp5 from "./Comp5";
export default function Body({setHeaderName})
{
    return(
        <>
        <Comp1/>
        <Comp3 setHeaderName={setHeaderName}/>
        <Comp2/>
        <Comp4/>
        <Comp5/>
        </>
    )
}