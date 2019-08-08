import React from 'react';

function DashBoard(props) {

    return (
        <div className="btn-container">
            <button onClick={() => props.addBall()}>Ball</button>
            <button onClick={() => props.addStrike()}>Strike</button>
            <button onClick={() => props.foulPlay()}>Foul Ball</button>
            <button onClick={() => props.resetCount()}>Reset</button>

        </div>
    )
}

export default DashBoard;