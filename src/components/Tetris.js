import React from 'react';

//Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {
    return (
        <div>
            <Stage />
            <aside>
                <div>
                    <Display textt="Score" />
                    <Display textt="Rows" />
                    <Display textt="Level" />
                </div>
                <StartButton />
            </aside>
        </div>
    )
}

export default Tetris;