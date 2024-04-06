import Image from 'next/image'

export default function ProjectCard(props) {
	const {
		projectName,
		builtWith,
		liveLink,
		githubLink,
		cardImage,
		cardAlt,
		femLink,
	} = props

	return (
		<div className='card'>
			<a href={liveLink}>
				<img src={`./${cardImage}.jpg`} alt={cardAlt} />
			</a>

			<h3 className='card__title'>{projectName}</h3>
			<div className='card__links'>
				<a href={githubLink}>
					<Image
						className='card__svg'
						src='./github-mark-white.svg'
						alt='Github link'
						width={30}
						height={30}
					/>
				</a>
				<a href={femLink}>
					<Image
						className='card__svg'
						src='./frontendmentor-logo.svg'
						alt='Frontend Mentor link'
						width={30}
						height={30}
					/>
				</a>
			</div>
		</div>
	)
}
