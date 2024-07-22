import {useState} from 'react';

function Body({weather}) {
    const [text, setText] = useState('');
    const [description, setDescription] = useState('');
    const [gender, setSelect] = useState('');

    function onChangeText(input) {
        setText(input.target.value);
    }

    function onChangeDescription(input) {
        setDescription(input.target.value);
    }

    const onChangeSelect = (e) => {
        setSelect(e.target.value);
    }

    return(
        <div>
            <p>오늘은 {weather}</p>
            <div>
                <input type="text" onChange={onChangeText}></input>
                <p>{text}</p>
            </div>
            <div>
                <textarea onChange={onChangeDescription}></textarea>
                <div>사유 : {description}</div>
            </div>
            <select onChange={onChangeSelect}>
                <option value="">선택</option>
                <option value="남자">남자</option>
                <option value="여자">여자</option>
            </select>
            <div>성별 : {gender}</div>
        </div>
    );
}

export default Body;