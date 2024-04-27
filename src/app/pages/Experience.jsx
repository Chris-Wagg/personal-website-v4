export default function Experience() {
	return (
		<section className='experience content-grid'>
			<h2 className='experience__title'>Experience</h2>
			<div className='experience-card-wrapper'>
				<div className='card'>
					<p className='card__title'>HTML</p>
					<p className='card__text'>2+ years</p>
				</div>
				<div className='card'>
					<p className='card__title'>CSS</p>
					<p className='card__text'>2+ years</p>
				</div>
				<div className='card'>
					<p className='card__title'>Javascript</p>
					<p className='card__text'>2+ years</p>
				</div>
				<div className='card'>
					<p className='card__title'>React/ Next.js</p>
					<p className='card__text'>2+ years</p>
				</div>
				<div className='card'>
					<p className='card__title'>Accessibility</p>
					<p className='card__text'>{`< 1 year`}</p>
				</div>
			</div>
		</section>
	)
}
