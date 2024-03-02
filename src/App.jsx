import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navigation from "./components/Navigation/Navigation"
import HomePage from "./pages/HomePage/HomePage"
import MoviesDetailsPage from "./pages/MoviesDetaildPage/MoviesDetailsPage"
import MoviesPage from "./pages/MoviesPage/MoviesPage"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"


const App = () => {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/movies/:movieId" element={<MoviesDetailsPage/>}/>
        <Route path="/movies" element={<MoviesPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
