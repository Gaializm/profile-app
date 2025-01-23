
import Navbar from "./components/Navbar";
import img from './assets/profilePlaceholder.png';
import Card from "./components/Card";
import Wrapper from "./components/wrapper";
import About from "./components/About";
import "./App.css";

const App = () => {

    const profiles = [
    {
        img: img,
        name: 'John Doe',
        title: 'Software Engineer',
        email:'a@a.com'
    },
    {
        img: img,
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
                        {profiles.map(profiles => <Card img={profiles.img} name={profiles.name} title={profiles.title} email={profiles.email} />)}
                        </div>
                </Wrapper>
            </main>
        </>
    )
}
    
export default App;
