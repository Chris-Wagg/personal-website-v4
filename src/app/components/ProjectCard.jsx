import Link from 'next/link'
import Image from 'next/image'

export default function ProjectCard(props) {
	const { projectName, builtWith, liveLink, githubLink, cardImage, cardAlt } =
		props

	return (
		<div className='card'>
			<h3 className='card__title'>{projectName}</h3>
			<img src={`./${cardImage}.jpg`} alt={cardAlt} />
			<p className='card__built-with'>{builtWith}</p>
			<a href={liveLink} className='card__live-link'>
				Check it out!
			</a>
			<a href={githubLink}>
				<Image
					className='card__github-svg'
					src='./github-mark-white.svg'
					alt='Github'
					width={30}
					height={30}
				/>
			</a>
		</div>
	)
}
