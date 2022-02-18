import { useEffect } from "react";
import axios from "axios";

export default function UserList({users, getUsers}) {
    useEffect(() => {
        getUsers();
    },[getUsers]);
    
    if(users.length === 0) {
        return <p>현재 유저 정보 없음</p> ;
    }
    
    return (
        <ul>
            {users.map((user) =>( 
                <li>{user.login}</li>
                ))}
        </ul>
    );
}