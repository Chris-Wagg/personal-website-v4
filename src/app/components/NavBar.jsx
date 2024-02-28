import Link from 'next/link'
import Image from 'next/image'

export default function NavBar() {
	return (
		<header>
			<div className='head-wrapper'>
				<h1 className='head__logo'>Chris Wagg</h1>
				<nav className='nav-bar'>
					<Link href='#about-me' className='nav-bar__btn'>
						About me
					</Link>
					<Link href='#Projects' className='nav-bar__btn'>
						Projects
					</Link>
					<Link href='#Experience' className='nav-bar__btn'>
						experience
					</Link>
					<Link
						href='https://github.com/Chris-Wagg'
						className='nav-bar__btn'>
						<Image
							className='nav-bar__img-svg'
							src='./github-mark-white.svg'
							alt='Github'
							width={30}
							height={30}
						/>
					</Link>
					<Link
						href='https://www.linkedin.com/in/chriswagg'
						className='nav-bar__btn'>
						<Image
							className='nav-bar__img-svg'
							src='./linkedin.svg'
							alt='Linkedin'
							width={30}
							height={30}
						/>
					</Link>
					<Link
						href='https://www.frontendmentor.io/profile/Chris-Wagg'
						className='nav-bar__btn'>
						<Image
							className='nav-bar__img-svg'
							src=''
							alt='Frontend Mentor'
							width={30}
							height={30}
						/>
					</Link>

					<button className='nav-bar__btn'>
						<a href='./Chris-Wagg-CV.pdf' download>
							Resume
						</a>
					</button>
				</nav>
			</div>
		</header>
	)
}
