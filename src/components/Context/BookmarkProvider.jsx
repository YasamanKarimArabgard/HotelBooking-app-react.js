import React, { createContext, useContext, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';

const BookmarkContext = createContext();

const BookmarkProvider = ({ children }) => {

    const [singleBookmark, setSingleBookmark] = useState([]);
    const [loadingSingleBookmark, setLoadingSingleBookmarks] = useState(false);

    const Base_Url = 'http://localhost:5000/bookmarks';

    const { loading, data: bookmarkList } = useFetch(`${Base_Url}`)


    async function getSingleBookmark(id) {
        setLoadingSingleBookmarks(true);
        try {
            const { data: singleBookmark } = await axios.get(`${Base_Url}/${id}`);
            setSingleBookmark(singleBookmark)
            setLoadingSingleBookmarks(false)
        }
        catch (error) {
            console.log(error);
            setLoadingSingleBookmarks(false)
        }
    }

    return (
        <BookmarkContext.Provider value={{ singleBookmark, loadingSingleBookmark, getSingleBookmark, loading, bookmarkList }}>
            {children}
        </BookmarkContext.Provider>
    );
};

export default BookmarkProvider;

export const useBookmarks = () => {
    return useContext(BookmarkContext)
}