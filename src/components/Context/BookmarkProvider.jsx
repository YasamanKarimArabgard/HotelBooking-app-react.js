import React, { createContext, useContext, useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';

const BookmarkContext = createContext();

const BookmarkProvider = ({ children }) => {

    const [singleBookmark, setSingleBookmark] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [bookmarkList, setBookmarkList] = useState([]);

    const Base_Url = 'http://localhost:5000/bookmarks';

    useEffect(() => {
        async function getBookmarkList() {
            setIsLoading(true);
            try {
                const { data } = await axios.get(`${Base_Url}`);
                setBookmarkList(data)
                setIsLoading(false)
            }
            catch (error) {
                console.log(error);
                setIsLoading(false)
            }
        }
        getBookmarkList();
    }, []);


    async function getSingleBookmark(id) {
        setIsLoading(true);
        try {
            const { data: singleBookmark } = await axios.get(`${Base_Url}/${id}`);
            setSingleBookmark(singleBookmark)
            setIsLoading(false)
        }
        catch (error) {
            console.log(error);
            setIsLoading(false)
        }
    }

    async function deleteNewBookmark(id) {
        setIsLoading(true);
        try {
            await axios.delete(`${Base_Url}/${id}`);
            setBookmarkList((prev) => prev.filter(item => item.id !== id))
            setIsLoading(false);
        }
        catch (error) {
            console.log(error);
        }
    }

    async function createNewBookmark(newBookmark) {
        setIsLoading(true);
        try {
            const { data } = await axios.post(`${Base_Url}`, newBookmark);
            setBookmarkList((prev) => [...prev, data])
            setIsLoading(false);
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <BookmarkContext.Provider value={{
            singleBookmark,
            getSingleBookmark,
            isLoading,
            bookmarkList,
            createNewBookmark,
            deleteNewBookmark,
        }}>
            {children}
        </BookmarkContext.Provider>
    );
};

export default BookmarkProvider;

export const useBookmarks = () => {
    return useContext(BookmarkContext)
}