import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import LocationList from './components/LocationList/LocationList'
import AppLayout from "./components/AppLayout/AppLayout";
import Hotels from "./components/Hotels/Hotels";
import HotelsProvider from "./components/Context/HotelsProvider";
import './App.css'
import SingleHotel from "./components/SingleHotel/SingleHotel";
import BookmarkLayout from "./components/BookmarkLayout/BookmarkLayout";
import Bookmark from "./components/Bookmark/Bookmark"
import BookmarkProvider from "./components/Context/BookmarkProvider";

function App() {
  return (
    <main className="app-container flex justify-center bg-gray-50">
      <main className="main-app bg-gray-50 w-full max-h-screen min-h-screen max-w-screen-2xl grid grid-cols-12 grid-rows-[70px_minmax(200px,_1fr)_20px]">
        <BookmarkProvider>
          <HotelsProvider>
            <Header />
            <Routes>
              <Route path="/" element={<LocationList />} />
              <Route path="/hotels" element={<AppLayout />} >
                <Route index element={<Hotels />} />
                <Route path=":id" element={<SingleHotel />} />
              </Route>
              <Route path="/bookmarks" element={<BookmarkLayout />} >
                <Route index element={<Bookmark />} />
                <Route path=":id" element={<div>bookmark single</div>} />
                <Route path="add" element={<div>book add</div>} />
              </Route>
            </Routes>
          </HotelsProvider>
        </BookmarkProvider>
      </main>
    </main>
  )
}

export default App
