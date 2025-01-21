
import Navbar from "./components/Navbar";
import About from "./components/About";
import "./App.css";

const App = () => {

    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <div className="section">
                    <div className="container">
                        <h1>Profile App</h1>
                    </div>
                </div>
                <div className="section">
                    <div className="container">
                        <About />
                    </div>
                </div>
                <div className="section">
                    <div className="container">
                        <div className="profile-cards">
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
    
export default App;
