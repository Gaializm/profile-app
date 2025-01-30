
import Navbar from "./components/Navbar";
import image from './assets/profilePlaceholder.png';
import Card from "./components/Card";
import Wrapper from "./components/wrapper";
import About from "./components/About";
import "./App.css";
import { useState } from "react";

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
    },
    {
        img: image,
        name: 'Layla Doe',
        title: 'Software Engineer',
        email:'c@a.com'
    },
    {
        img: image,
        name: 'Ryan Colby',
        title: 'UX Designer',
        email: 'd@a.com'
    },
    {
        img: image,
        name: 'Shae Wilson',
        title: 'Software Engineer',
        email:'e@a.com'
    },
    {
        img: image,
        name: 'Ryan Matthews',
        title: 'UX Designer',
        email: 'f@a.com'
    }
    ]


    const titles = [...new Set(profiles.map((profile) => profile.title))];
    const [title, setTitle] = useState("");
    const [search, setSearch] = useState("");

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        console.log(e.target.value)
    };
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }

    const handleClear = () => {
        setTitle("")
        setSearch("")
    };

    const filteredProfiles = profiles.filter((profile) =>
        // if (title === "") {
        //     return true;
        // } else {
        //    return profile.title === title;
        // };

       ( title === "" || profile.title === title) && (profile.name.toLowerCase().includes(search.toLowerCase()))
    );

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
                    <div className="filter-wrapper">
                        <div className="selectFilter">

                            <label htmlfor="select-title">Select a title:</label>

                            <select id="select-title" onChange={handleTitleChange}>
                                <option value="">All</option>
                                {titles.map((title) => (<option key={title} value={title}>{title}</option>)) }
                                {/*   <option value="">All</option>
                                <option value="Software Engineer">Software Engineer</option>
                                <option value="UX Designer">UX Designer</option> */}
                            </select>

                        </div>
                        <div className="search-filter">

                        <label htmlfor="search-filter">Search by name:</label>
                            <input type="text" id="search" onChange={handleSearchChange} />


                        </div>
                        <div className="clearButton">
                            <button onClick={handleClear}>Clear</button>
                        </div>
                    </div>
                        <div className="profile-cards">
                        {filteredProfiles.map(profile => <Card img={profile.img} name={profile.name} title={profile.title} email={profile.email} />)}
                        </div>
                </Wrapper>
            </main>
        </>
    )
}
    
export default App;
