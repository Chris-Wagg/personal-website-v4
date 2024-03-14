import Hero from './pages/Hero'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Footer from './components/Footer'

export default function Home() {
	return (
		<>
			<div className='content-grid'>
				<Hero />
				<Experience />
				<Projects />
				<Footer />
			</div>
		</>
	)
}
