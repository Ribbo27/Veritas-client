import React from 'react';

function PredResult(props) {
    if (props.error) {
        return (
            <div>
                <p> We're sorry, something went wrong during prediction :( </p>
            </div>
        )
    } else if (props.class) {
        return (
            <div>
                <p> The input news you typed {props.title}</p>
                <p> is {props.class} with a probability of {props.prob}%</p>
            </div>
        );
    } else {
        return null
    }
}

export default PredResult;
