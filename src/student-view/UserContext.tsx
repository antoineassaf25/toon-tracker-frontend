import { createContext } from "react";

export const UserContext = createContext<{
    username : string;
    setUsername : (name : string) => void;
    roomCode : string;
    setRoomCode : (code : string) => void;
    score : number;
    setScore : (score : number) => void;
}>({
    username: "",
    setUsername : () => {},
    roomCode: "",
    setRoomCode : () => {},
    score: 0,
    setScore : () => {}  
});