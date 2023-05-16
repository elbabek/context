import { useContext, useState } from "react";
import { useAuth } from "../../context/AuthContext";
const users=[
    {
        login:'edu',
        password: 'edu',
        token: 'asdfsg'
    },
    {
        login:'test',
        password:'test',
        token:'asdsd'

    }
]
const Authorization = ()=> {
    const { token, login } = useAuth();
    const [username,setUsername]= useState('');
    const [password, setPassword] = useState('');
    const onSubmit =(e)=> {
        e.preventDefault();
       const checkLogin = users.map(user=>{
        if(user.login== username && user.password== password){
            return user.token
        }
        else{
            return null
        }
       })
       const getToken = checkLogin.filter(token=> token!==null)
    //    console.log(getToken[0]);
       if(getToken[0]){
        login(getToken[0])
        alert('hello')
       }
       else{
        alert('good buy')
       }
    }

    const setLogin = () => {
        console.log('set login')
    }
    return(
        <div>
            <h2>Авторизация</h2>
            <form onSubmit={onSubmit}>
                <input
                type="text"
                placeholder="логин"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                />
            {/* <input type="text" placeholder="логин"/> */}
            <input type="password"
             placeholder="пароль"
             value={password}
             onChange={(e)=> setPassword(e.target.value)}
             />
            <button type="submit">
                Войти
            </button>
            </form>
        </div>
    )
}
export default Authorization