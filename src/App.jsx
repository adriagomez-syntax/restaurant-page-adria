import Header from './components/common/header/Header'
import Footer from './components/common/footer/Footer'
import HomePage from './components/pages/home/HomePage'
import Menu from './components/pages/menu/Menu'
import './App.css'

export default function App() {
  return (
    <div className="text-primary bg-background-dark font-primary flex flex-col min-h-screen">
      <Header />
      <HomePage />
      <Footer />
    </div>
  )
}
