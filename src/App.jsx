
import Navbar from "./components/Navbar";
import image from './assets/profilePlaceholder.png';
import Card from "./components/Card";
import Wrapper from "./components/wrapper";
import About from "./components/About";
import "./App.css";

const App = () => {

    const profiles = [
    {
        img: image,
        name: 'John Doe',
        title: 'Software Engineer',
        email:'a@a.com'
    },
    {
        img: image,
        name: 'Jane Doe',
        title: 'UX Designer',
        email: 'b@a.com'
    }
    ]

    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Wrapper>
                        <h1>Profile App</h1>
                </Wrapper>
                <Wrapper>
                        <About />
                </Wrapper>
                <Wrapper>
                        <div className="profile-cards">
                        {profiles.map(profile => <Card img={profile.img} name={profile.name} title={profile.title} email={profile.email} />)}
                        </div>
                </Wrapper>
            </main>
        </>
    )
}
    
export default App;
