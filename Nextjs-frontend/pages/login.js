import { useState } from "react"
import { useAuth } from "context/auth"
import LoginForm from "components/login/loginForm"

export default function Login_form() {
    
    // const [userInf, setUserInfo] = useState([])
    const {login} = useAuth()
    async function loginHandler(event){
        event.preventDefault()
        // console.log(6666666,"hi")
        let userName =event.target.userName.value
        let password =event.target.password.value
        // setUserInfo([userName,password])

        login(userName,password)
  }


    return (

        <div>
            <LoginForm loginHandler={loginHandler} />

        </div>
    )
}