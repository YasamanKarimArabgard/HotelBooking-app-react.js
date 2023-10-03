import { Route, Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import LocationList from './components/LocationList/LocationList'
import AppLayout from "./components/AppLayout/AppLayout";

function App() {
  return (
    <main className="app flex justify-center">
      <main className="main-app min-w-full w-screen bg-gray-50 min-h-screen max-w-screen-2xl grid grid-cols-12 grid-rows-[70px_minmax(200px,_1fr)_20px]">
        <Header />
        <Routes>
          <Route path="/" element={<LocationList />} />
          <Route path="/hotels" element={<AppLayout />} >
            <Route index element={<div>hotels</div>} />
            <Route path=":id" element={<div>single hotels</div>} />
          </Route>
        </Routes>
      </main>
    </main>
  )
}

export default App
