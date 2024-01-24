import Link from 'next/link'

export default function NavBar() {
	return (
		<header className='.head'>
			<div className='head__logo'>Chris Wagg</div>
			<nav className='nav-bar'>
				<Link href='#about-me'>
					<button className='nav-bar__btn'>About me</button>
				</Link>
				<Link href='#Projects'>
					<button className='nav-bar__btn'>Projects</button>
				</Link>
				<Link href='#Experience'>
					<button className='nav-bar__btn'>Experience</button>
				</Link>
				<Link href='https://github.com/Chris-Wagg'>
					<button aria-label='Github' className='nav-bar__btn'>
						<img
							className='nav-bar__img-svg'
							src='./github-mark.svg'
							alt='Github'
						/>
					</button>
				</Link>
				<Link href='https://www.linkedin.com/in/chriswagg'>
					<button aria-label='Linkedin' className='nav-bar__btn'>
						<img
							className='nav-bar__img-svg'
							src='./linkedin.svg'
							alt='Linkedin'
						/>
					</button>
				</Link>
				<Link href='https://www.frontendmentor.io/profile/Chris-Wagg'>
					<button
						aria-label='Frontend Mentor'
						className='nav-bar__btn'>
						<img
							className='nav-bar__img-svg'
							src=''
							alt='Frontend Mentor'
						/>
					</button>
				</Link>

				<button className='nav-bar__btn'>
					<a href='./Chris-Wagg-CV.pdf' download>
						Resume
					</a>
				</button>
			</nav>
		</header>
	)
}
