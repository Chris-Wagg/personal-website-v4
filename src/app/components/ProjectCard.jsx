import Image from 'next/image'

export default function ProjectCard(props) {
	const { projectName, liveLink, githubLink, cardImage, cardAlt, femLink } =
		props

	return (
		<div className='card'>
			<img src={`./${cardImage}.jpg`} alt={cardAlt} role='none' />
			<a className='card__title' href={liveLink}>
				{projectName}
			</a>
			<div className='card__links'>
				<a href={githubLink} title='Github'>
					<Image
						className='card__svg'
						src='./github-mark-white.svg'
						alt='Github link'
						width={30}
						height={30}
						role='none'
					/>
				</a>
				<a href={femLink} title='Frontend Mentor'>
					<Image
						className='card__svg'
						src='./frontendmentor-logo.svg'
						alt='Frontend Mentor link'
						width={30}
						height={30}
						role='none'
					/>
				</a>
			</div>
		</div>
	)
}
