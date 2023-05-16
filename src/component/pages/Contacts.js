// import { useContext, useEffect } from "react";
import { useContext } from "react";
import { AuthContxet, useAuth } from "../../context/AuthContext";
const Contacts = () => {
    const {token} = useAuth(); 
    if(!token) {
        return <div>
            вы не вошли в аккаунт
        </div>
    }
    return (
        <div> 
            hi
        </div>
    )
}
export default Contacts;