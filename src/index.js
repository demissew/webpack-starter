import React from 'react';
import {render} from 'react-dom';

const Button = () => {
    const [count, setCount] = React.useState(0);

    return (
        <button onClick={()=>{
            let c = count+1;
            setCount(c);
            }} type="button">
            {`Count ${count}`}
        </button>
    )
}

render(
    <Button />,
    document.getElementById('target')
)