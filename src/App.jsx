import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/common/header/Header'
import Footer from './components/common/footer/Footer'
import Error404 from './pages/Error404'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import AboutPage from './pages/AboutPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import ReservePage from './pages/ReservePage'

export default function App() {
	return (
		<div className="text-primary bg-background-dark font-primary flex flex-col min-h-screen">
			<Header />
			<Routes>
				<Route path="" element={ <HomePage /> } />
				<Route path="/menu" element={ <Navigate to="/menu/0" replace /> } />
				<Route path="/menu/:index" element={ <MenuPage /> } />
				<Route path="/about" element={ <AboutPage /> } />
				<Route path="/gallery" element={ <GalleryPage /> } />
				<Route path="/contact" element={ <ContactPage /> } />
				<Route path="/reserve" element={ <ReservePage /> } />
					
				<Route path="*" element={ <Error404 /> } />
			</Routes>
			<Footer />
		</div>
	)
}
