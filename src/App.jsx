import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import LocationList from './components/LocationList/LocationList'
import AppLayout from "./components/AppLayout/AppLayout";
import Hotels from "./components/Hotels/Hotels";
import HotelsProvider from "./components/Context/HotelsProvider";
import './App.css'


function App() {
  return (
    <main className="app-container flex justify-center bg-gray-50">
      <main className="main-app bg-gray-50 w-full max-h-screen min-h-screen max-w-screen-2xl grid grid-cols-12 grid-rows-[70px_minmax(200px,_1fr)_20px]">
        <HotelsProvider>
          <Header />
          <Routes>
            <Route path="/" element={<LocationList />} />
            <Route path="/hotels" element={<AppLayout />} >
              <Route index element={<Hotels />} />
              <Route path=":id" element={<div>single hotels</div>} />
            </Route>
          </Routes>
        </HotelsProvider>
      </main>
    </main>
  )
}

export default App
