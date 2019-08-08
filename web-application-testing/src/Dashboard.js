import React from 'react';

function DashBoard(props) {

    return (
        <div className="btn-container">
            <button onClick={() => props.addBall()}>Ball</button>
            <button onClick={()=> props.addStrike()}>Strike</button>
            <button onClick={()=> props.foul()}>Foul</button>
            <button onClick={() => props.reset()}>Hit</button>

        </div>
    )
}

export default DashBoard;