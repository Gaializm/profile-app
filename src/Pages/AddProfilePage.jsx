import Wrapper from "../components/Wrapper";
import ProfileForm from "../components/ProfileForm";
import ChatbotToggle from "../components/ChatbotToggle";

const AddProfilePage = () => {
    return (
        <Wrapper>
            <h1>Add a Profile</h1>
            <ProfileForm />
            <ChatbotToggle />
        </Wrapper>
    );
};
export default AddProfilePage;