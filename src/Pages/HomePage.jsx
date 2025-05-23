import Card from "../components/Card";
import Wrapper from "../components/Wrapper";
import { useCallback, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/home.module.css";
import { Link } from "react-router-dom";
import useHomePage from "../hooks/homePageHook";
import Filters from "../components/Filters";
import ChatbotToggle from "../components/ChatbotToggle";

const HomePage = () => {
    const { state, dispatch } = useHomePage();
    // const [state, dispatch] = useReducer(homeReducer, initialState);
    const { titles, title, search, profiles, page, count } = state;

    //update the title on change of the drowndrop
    const handleTitleChange = useCallback((event) => {
        dispatch({ type: "SET_TITLE", payload: event.target.value });
    }, []);

    //update the search on change of the input
    const handleSearchChange = useCallback((event) => {
        dispatch({ type: "SET_SEARCH", payload: event.target.value });
    }, []);
    //clear the title and search
    const handleClear = useCallback(() => {
        dispatch({ type: "CLEAR_FILTER" });
    }, []); 
    const titlesValue = useMemo(() => titles, [titles]);

    return (
        <Wrapper>
            <h1>Profile App</h1>

            <Filters
                titles={titlesValue}
                title={title}
                search={search}
                handleTitleChange={handleTitleChange}
                handleSearchChange={handleSearchChange}
                handleClear={handleClear}
            />

            <div className={styles["profile-cards"]}>
                {profiles.map((profile) => (
                    <Link to={`/profile/${profile.id}`} key={profile.id}>
                        <Card {...profile} />
                    </Link> 
                ))}
            </div>
            {count === 0 && <p>No profiles found!</p>}
            {count > 10 && (
                <div className={styles["pagination"]}>
                    <button
                        onClick={() => dispatch({ type: "SET_PAGE", payload: page - 1 })}
                        disabled={page === 1}
                    >
                        <span className="sr-only">Previous</span>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <span>
                        {page}/{Math.ceil(count / 10)}
                    </span>
                    <button
                        onClick={() => dispatch({ type: "SET_PAGE", payload: page + 1 })}
                        disabled={page >= Math.ceil(count / 10)}
                    >
                        <span className="sr-only">Next</span>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            )}
            <ChatbotToggle />
        </Wrapper>
    );
};
export default HomePage;