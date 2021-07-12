import Auth from "../components/Auth";
const Login = () =>{
    const loginButton = async () => {
        const res = await fetch('http://localhost:3000/login')
        const data = await res.json()
        return data
    }
    return (
        <Auth isLogin={true}/>
    )
}

export default Login