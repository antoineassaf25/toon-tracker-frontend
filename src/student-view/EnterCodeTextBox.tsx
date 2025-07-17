import { SetStateAction, useState } from 'react'
import { useAsyncValue } from 'react-router-dom';

export default function() {
    const [text, setText] = useState<string>("");

    function keyPressed(e: { target: { value: SetStateAction<string>; }; }) {
        const desiredText : SetStateAction<string> = e.target.value;
        

        // Codes should be no longer than 6 characters
        if (desiredText.length > 6) { return }

        setText(desiredText);
    }

    async function codeSubmitted() {
        if (text.length !== 6) { return }

        try {
            const res = await fetch("http://localhost:8080/api/rooms");

            if (!res.ok) {
                console.error(`Server error: ${res.status}`);
            }

            if (res.status >= 300 && res.status < 400) {

                // the status code will automaticlaly redirect the user to the correct room,
                // so no more frontend needed for this component

            }

        } catch (err : any) {
            console.error(err.message || 'Unknown error');
        }
        

    }

    return (
        <div>
            <input className="flex gap-2 bg-gray-600 rounded-lg" value={text} onChange={keyPressed} />
            <button onClick = {codeSubmitted}>
                JOIN ROOM!
            </button>
        </div>
    )
}