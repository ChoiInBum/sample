import '../css/header.css';
import React, {useRef, useState} from 'react';

function Header() {
    const inputRef = useRef(null);
    const textRef = useRef(null);

    const onFocus = () => {
        inputRef.current.focus();
    };

    const onReset = () => {
        textRef.current.value="";
        textRef.current.focus();
    };

    return (
        <div>
            <div>
                <input ref={inputRef} type="text"/>&nbsp;
                <button onClick={onFocus}>포커스</button>
            </div>        
            <div>
                <input ref={textRef} type="text"/>&nbsp;
                <button onClick={onReset}>Reset</button>
            </div>     
            
        </div>
    );
}

export default Header;