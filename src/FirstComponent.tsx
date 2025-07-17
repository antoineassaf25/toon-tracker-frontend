import React, { useState } from 'react';

interface WelcomeProps {
    name: string;
}

const Welcome: React.FC<WelcomeProps> = ({name}) => {
    return <h1> Hello, {name}!</h1>
}

const WelcomeButton: React.FC<{name : string, startCount : number, increment : number}> = (
    {name, startCount, increment}
) => {
    const [count, setCount] = useState(startCount);
    return <button onClick = {() => setCount((count) => count + increment)}>
        {name} with count: {count}!
        </button>
}

export { Welcome, WelcomeButton };