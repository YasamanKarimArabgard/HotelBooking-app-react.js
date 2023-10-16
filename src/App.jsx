import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import LocationList from './components/LocationList/LocationList'
import AppLayout from "./components/AppLayout/AppLayout";
import Hotels from "./components/Hotels/Hotels";
import HotelsProvider from "./components/Context/HotelsProvider";
import SingleHotel from "./components/SingleHotel/SingleHotel";
import BookmarkLayout from "./components/BookmarkLayout/BookmarkLayout";
import BookmarkList from "./components/BookmarkList/BookmarkList";
import BookmarkProvider from "./components/Context/BookmarkProvider";
import SingleBookmark from "./components/SingelBookmark/SingleBookmark";
import AddNewBookmark from "./components/addNewBookmark/addNewBookmark";
import AuthProvier from "./components/Context/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"
import './App.css';
import Login from "./components/Login/Login";

function App() {
  return (
    <main className="app-container flex justify-center bg-gray-50">
      <main className="main-app bg-gray-50 w-full max-h-screen min-h-screen max-w-screen-2xl grid grid-cols-12 grid-rows-[70px_minmax(200px,_1fr)_20px]">
        <AuthProvier>
          <BookmarkProvider>
            <HotelsProvider>
              <Header />
              <Routes>
                <Route path="/" element={<LocationList />} />
                <Route path="/login" element={<Login />} />
                <Route path="/hotels" element={<AppLayout />} >
                  <Route index element={<Hotels />} />
                  <Route path=":id" element={<SingleHotel />} />
                </Route>
                <Route path="/bookmarks" element={
                  <ProtectedRoute>
                    <BookmarkLayout />
                  </ProtectedRoute>
                } >
                  <Route index element={<BookmarkList />} />
                  <Route path=":id" element={<SingleBookmark />} />
                  <Route path="add" element={<AddNewBookmark />} />
                </Route>
              </Routes>
            </HotelsProvider>
          </BookmarkProvider>
        </AuthProvier>
      </main>
    </main>
  )
}

export default App
