import Link from 'next/link'
import Image from 'next/image'

export default function NavBar() {
	return (
		<header>
			<div className='head-wrapper'>
				<h1 className='head__logo'>Chris Wagg</h1>
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
							<Image
								className='nav-bar__img-svg'
								src='./github-mark-white.svg'
								alt='Github'
								width={30}
								height={30}
							/>
						</button>
					</Link>
					<Link href='https://www.linkedin.com/in/chriswagg'>
						<button aria-label='Linkedin' className='nav-bar__btn'>
							<Image
								className='nav-bar__img-svg'
								src='./linkedin.svg'
								alt='Linkedin'
								width={30}
								height={30}
							/>
						</button>
					</Link>
					<Link href='https://www.frontendmentor.io/profile/Chris-Wagg'>
						<button
							aria-label='Frontend Mentor'
							className='nav-bar__btn'>
							<Image
								className='nav-bar__img-svg'
								src=''
								alt='Frontend Mentor'
								width={30}
								height={30}
							/>
						</button>
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
