import Link from 'next/link'

export default function NavBar() {
	return (
		<header className='.head'>
			<div className='head__logo'>Chris Wagg</div>
			<nav className='nav-bar'>
				<button className='nav-bar__btb'>
					About me <Link aria-hidden='true' href='#about-me'></Link>
				</button>

				<button className='nav-bar__btb'>
					Projects
					<Link aria-hidden='true' href='#Projects' />
				</button>

				<button className='nav-bar__btb'>
					Experience
					<Link aria-hidden='true' href='#Experience' />
				</button>

				<button aria-label='Github' className='nav-bar__btb'>
					<img src='./github-mark.svg' alt='' />
					<Link aria-hidden='true' href='#Github' />
				</button>

				<button aria-label='Linkedin' className='nav-bar__btb'>
					<img src='./linkedin.svg' alt='' />
					<Link aria-hidden='true' href='#Linkedin' />
				</button>

				<button className='nav-bar__btb'>
					Resume <Link aria-hidden='true' href='#Resume' />
				</button>
			</nav>
		</header>
	)
}
