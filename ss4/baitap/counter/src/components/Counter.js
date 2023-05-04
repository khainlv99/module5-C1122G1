import {useState} from "react";

export function Counter() {
    const [count, setCount] = useState(0);
    const [increase, setIncrease] = useState(0);
    return(
        <div>
            Gia tri : {count}
            <button onClick={() => setCount(count +1)}>Add1</button>
            Gia tri : {increase}
            <button onClick={() => setIncrease(increase+2)}>Add2</button>
        </div>
    )
}