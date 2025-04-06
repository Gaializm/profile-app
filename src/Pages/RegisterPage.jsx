import Wrapper from "../components/Wrapper";
import AuthForm from "../components/AuthForm";
import ChatbotToggle from "../components/ChatbotToggle";

const RegisterPage = () => {

    return (
        <Wrapper>
            <h1>Register</h1>
            <AuthForm isRegister={true} />
            <ChatbotToggle />
        </Wrapper>
    );
}

export default RegisterPage;