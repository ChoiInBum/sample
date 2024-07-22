import {useState} from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const onUp = (value) => {        
        setCount(count+value);
    }

    const onDown = () => {
        setCount(count-10);
    }

    return(
        <div>
            <h3>카운트 : {count}</h3>
            <button onClick={ () => {onUp(5)}}>+</button>&nbsp;
            <button onClick={onDown}>-</button>
        </div>
    );
}

export default Counter;