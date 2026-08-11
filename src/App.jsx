import Header from './components/common/header/Header'
import Footer from './components/common/footer/Footer'
import Error404 from './pages/Error404'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import './App.css'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div className="text-primary bg-background-dark font-primary flex flex-col min-h-screen">
      <Header />
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="menu" element={ <MenuPage /> } />
          
          <Route path="/*" element={ <Error404 /> } />
        </Routes>
      <Footer />
    </div>
  )
}
