import Wrapper from "../components/Wrapper";
import AuthForm from "../components/AuthForm";
import { Link } from "react-router-dom";
import ChatbotToggle from "../components/ChatbotToggle";

const Login = () => {

    return (
        <Wrapper>
            <h1>Login</h1>
            <AuthForm isRegister={false} />
            <Link to="/register">Don't have an account? Register here</Link>
            <ChatbotToggle />
        </Wrapper>
    );
}

export default Login;