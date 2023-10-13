import React, { createContext, useContext, useState } from 'react';
import useFetch from '../../hooks/useFetch';

const BookmarkContext = createContext();

const BookmarkProvider = ({children}) => {

    const [bookmarks, setBookmarks] = useState({});
    const [loadingBookmark, setLoadingBookmarks] = useState(false);

    const Base_Url = 'http://localhost:5000';

    const { loading, data: bookmark } = useFetch(`${Base_Url}/bookmarks`);

    console.log(bookmark);


    async function getBookmark(id) {
        setLoadingBookmarks(true);
        try {
            const { data } = await axios.get(`${Base_Url}/${id}`)
            console.log(data);
            setBookmarks(data)
            setLoadingBookmarks(false)
        }
        catch (error) {
            console.log(error);
            setLoadingBookmarks(false)
        }
    }

    return (
        <BookmarkContext.Provider value={{ bookmarks, loadingBookmark, getBookmark, loading , bookmark}}>
            {children}
        </BookmarkContext.Provider>
    );
};

export default BookmarkProvider;

export const useBookmarks = () => {
    return useContext(BookmarkContext)
}