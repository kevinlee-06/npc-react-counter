import { useState, useEffect } from "react"
import Button from "./Button"
function Counter() {
    const num = Number(localStorage.getItem("data")) || 0;
    const [count, change] = useState(num);
    const plus = () => change(count+1);
    const minus = () => change(count-1); 
    const zero = () => change(0);
    useEffect(function(){localStorage.setItem("data", count.toString())}, [count])

    return(
        <div className="card">
            <h1 className="num">{count}</h1>
            <div>
            <Button onClick={() => minus()} text="-"/>
            <Button onClick={() => zero()} text="0"/>
            <Button onClick={() => plus()} text="+"/>
            </div>
        </div>
    )
}
export default Counter