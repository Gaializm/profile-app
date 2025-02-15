
import Navbar from "./components/Navbar";
import image from './assets/profilePlaceholder.png';
import Card from "./components/Card";
import Wrapper from "./components/wrapper";
import About from "./components/About";
import ProfileForm from "./components/ProfileForm";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { useEffect } from "react";
import { use } from "react";


const App = () => {

   /* const profiles = [
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
    ]*/


    const [titles, setTitles] = useState([]);
    useEffect(() => {
        fetch("https://web.ics.purdue.edu/~gmejiasg/CGT390/get-titles.php")
            .then((res) => res.json())
            .then((data) => {
                setTitles(data.titles)
            })
    }, [])

    const [title, setTitle] = useState("");
    const [search, setSearch] = useState("");

    const [animation, setAnimation] = useState(false);
    
    const handleAnimation = () => {
        setAnimation(false);
    }

    const [mode, setMode] = useState("light");

    const handleModeChange = () => {
        setMode(mode === "light" ? "dark" : "light");
    };



    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        setPage(1);
    };


    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        setPage(1);
    }

    const [profiles, setProfiles] = useState([]);
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(1);

    useEffect(() => {
        fetch(`https://web.ics.purdue.edu/~gmejiasg/CGT390/fetch-data-with-filter.php?title=${title}&name=${search}&page=${page}&limit=10`)
            .then((res) => res.json())
            .then((data) => {
                setProfiles(data.profiles);
                setCount(data.count);
                setPage(data.page);
            })
    }, [title, search, page]);

    const handleClear = () => {
        setTitle("")
        setSearch("")
        setPage(1);
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
                <Navbar mode={mode} updateMode={handleModeChange} />
            </header>
            <main className={mode === "light" ? "light" : "dark"}>
                <Wrapper>
                        <h1>Profile App</h1>
                </Wrapper>
                <Wrapper>
                        <About />
                </Wrapper>
                <Wrapper>
                    <ProfileForm />
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
                        {profiles.map((profile) => <Card key={profile.id} {...profile} animate={animation} updateAnimate={handleAnimation} />)}
                    </div>
                    {
                        count === 0 && <p>No profiles found!</p>
                    }
                    {count > 10 &&
                        <div className="pagination">
                            <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                                <span className="sr-only">Previous</span>
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </button>
                            <span>{page}/{Math.ceil(count / 10)}</span>
                            <button onClick={() => setPage(page + 1)} disabled={page >= Math.ceil(count / 10)}>
                                <span className="sr-only">Next</span>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                        </div>
                    }

                </Wrapper>
            </main>
        </>
    )
}
    
export default App;
