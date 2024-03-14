import Hero from './pages/Hero'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

export default function Home() {
	return (
		<>
			<NavBar />
			<Hero />
			<Experience />
			<Projects />
			<Footer />
		</>
	)
}
