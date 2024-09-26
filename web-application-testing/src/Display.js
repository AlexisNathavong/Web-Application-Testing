import React, { useState } from 'react';
import DashBoard from './Dashboard';

import { BallHeader, BallText, StrikeHeader, StrikeText, Card, Dash } from './StyledWidget';


function Display() {
    const [count, setCount] = useState({ball: 0, strike: 0});

    function AddBall() {
        if (count.ball === 3) {
            Reset();
        }
        else {
            setCount({ball: count.ball+1, strike: count.strike});
        };
    };

    function AddStrike() {
        if (count.strike === 2) {
            Reset();
        }
        else {
            setCount({strike: count.strike+1, ball: count.ball})
        };
    };

    function Foul() {
        if (count.strike === 2) {
            return
        }
        else {
            setCount({strike: count.strike+1, ball: count.ball})
        };
    };

    function Reset() {
        setCount({ball: 0, strike: 0})
    };

    return (

        <Card>
            <div className="display-container" data-testid="display">
                <BallHeader>
                    <h1>Ball</h1>
                </BallHeader>

                <BallText>
                    <p>{count.ball}</p>
                </BallText>

                <StrikeHeader>
                    <h1>Strike</h1>
                </StrikeHeader>

                <StrikeText>
                    <p>{count.strike}</p>
                </StrikeText>

                <Dash>
                    <DashBoard addBall={AddBall} addStrike={AddStrike} foul={Foul} reset={Reset}/>
                </Dash>
            </div>
        </Card>

    )
}

export default Display;