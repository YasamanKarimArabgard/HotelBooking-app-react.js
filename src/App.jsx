import { Route, Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import LocationList from './components/LocationList/LocationList'

function App() {
  return (
    <main className="app flex justify-center">
      <main className="main-app bg-gray-50 min-h-screen max-w-screen-2xl max-w-screen grid grid-cols-12 grid-rows-[70px_minmax(200px,_1fr)_50px]">
        <Header />
        <Routes>
          <Route path="/" element={<LocationList />} />
        </Routes>
      </main>
    </main>
  )
}

export default App
