import './App.css';

import Body from './props/body';
import Main from './props/main';
import Counter from './props/counter';

function App() {
    var weather = '비바람';
    const BodyProps = {
        name : '홍길동',
        object : 'React',

    }
    return (
        <div className="App">
            <Body weather={weather}/>
            <Main BodyProps={BodyProps}/>
            <hr/>
            <Counter/>
        </div>
    );
}

export default App;
