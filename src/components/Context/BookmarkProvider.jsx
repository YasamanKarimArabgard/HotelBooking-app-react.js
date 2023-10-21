import {
    createContext,
    useContext,
    useEffect,
    useReducer,
} from "react";
import axios from "axios";
// import { toast } from "react-hot-toast";

const BookmarksContext = createContext();
const BASE_URL = "http://localhost:5000";

const initialState = {
    bookmarkList: [],
    isLoading: false,
    singleBookmark: null,
    error: null,
};

function bookmarkReducer(state, action) {
    switch (action.type) {
        case "loading":
            return {
                ...state,
                isLoading: true,
            };
        case "bookmarks/loaded":
            return {
                ...state,
                isLoading: false,
                bookmarkList: action.payload,
            };
        case "bookmark/loaded":
            return {
                ...state,
                isLoading: false,
                singleBookmark: action.payload,
            };
        case "bookmark/created":
            return {
                ...state,
                isLoading: false,
                bookmarkList: [...state.bookmarks, action.payload],
                singleBookmark: action.payload,
            };
        case "bookmark/deleted":
            return {
                ...state,
                isLoading: false,
                bookmarkList: state.bookmarkList.filter((item) => item.id !== action.payload),
                singleBookmark: null,
            };
        case "rejected":
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            throw new Error("Unknown action");
    }
}


function BookmarkProvider({ children }) {
    const [{ bookmarkList, isLoading, singleBookmark }, dispatch] = useReducer(
        bookmarkReducer,
        initialState
    );

    useEffect(() => {
        async function fetchBookmarkList() {
            dispatch({ type: "loading" });
            try {
                const { data } = await axios.get(`${BASE_URL}/bookmarks`);
                dispatch({ type: "bookmarks/loaded", payload: data });
            } catch (error) {
                // toast.error(error.message);
                dispatch({
                    type: "rejected",
                    payload: "an Errror occurred in loading bookmarks",
                });
            }
        }
        fetchBookmarkList();
    }, []);

    async function getBookmark(id) {
        if (Number(id) === singleBookmark?.id) return;

        dispatch({ type: "loading" });
        try {
            const { data } = await axios.get(`${BASE_URL}/bookmarks/${id}`);
            dispatch({ type: "bookmark/loaded", payload: data });
        } catch (error) {
            // toast.error(error.message);
            dispatch({
                type: "rejected",
                payload: "an Error occurred in fetching single bookmark",
            });
        }
    }

    async function createNewBookmark(newBookmark) {

        dispatch({ type: "loading" });
        try {
            const { data } = await axios.post(`${BASE_URL}/bookmarks/`, newBookmark);
            dispatch({ type: "bookmark/created", payload: data });
        } catch (error) {
            // toast.error(error.message);
            dispatch({ type: "rejected", payload: error.message });
        }
    }

    async function deleteBookmark(id) {
        dispatch({ type: "loading" });
        try {
            await axios.delete(`${BASE_URL}/bookmarks/${id}`);
            dispatch({ type: "bookmark/deleted", payload: id });
        } catch (error) {
            // toast.error(error.message);
            dispatch({ type: "rejected", payload: error.message });
        }
    }

    return (
        <BookmarksContext.Provider
            value={{
                isLoading,
                bookmarkList,
                singleBookmark,
                getBookmark,
                createNewBookmark,
                deleteBookmark,
            }}
        >
            {children}
        </BookmarksContext.Provider>
    );
}
export default BookmarkProvider;

export function useBookmarks() {
    return useContext(BookmarksContext);
}
