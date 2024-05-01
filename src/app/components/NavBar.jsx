import Link from 'next/link'
import Image from 'next/image'

export default function NavBar() {
	return (
		<nav>
			<div className='head-wrapper'>
				<h1 className='head__logo'>Chris Wagg</h1>
				<div className='nav-bar'>
					<Link
						href='https://github.com/Chris-Wagg'
						className='nav-bar__btn'
						title='Github'>
						<Image
							className='nav-bar__img-svg'
							src='./github-mark-white.svg'
							alt='Github logo'
							role='none'
							width={30}
							height={30}
						/>
					</Link>
					<Link
						href='https://www.linkedin.com/in/chriswagg'
						className='nav-bar__btn'
						title='Linkedin'>
						<Image
							className='nav-bar__img-svg'
							src='./linkedin.svg'
							alt='Linkedin logo'
							role='none'
							width={30}
							height={30}
						/>
					</Link>
					<Link
						href='https://www.frontendmentor.io/profile/Chris-Wagg'
						className='nav-bar__btn'
						title='Frontend mentor'>
						<Image
							className='nav-bar__img-svg'
							src='./frontendmentor-logo.svg'
							alt='Frontend Mentor logo'
							role='none'
							width={30}
							height={30}
						/>
					</Link>
					<a
						href='./Chris-Wagg-CV.pdf'
						className='nav-bar__btn'
						aria-label='Resumé download'
						download>
						Resumé
					</a>
				</div>
			</div>
		</nav>
	)
}
