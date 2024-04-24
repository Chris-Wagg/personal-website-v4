import Link from 'next/link'
export default function Hero() {
	return (
		<>
			<section className='hero '>
				<div className='hero__wrapper content-grid'>
					<h1 className='hero__title'>
						<span className='hero--greeting'>{`Kia ora, I'm...`}</span>
						<span className='hero--name'>Chris Wagg</span>
					</h1>

					<div className='hero__text-wrapper'>
						<p className='hero__text '>
							Welcome to my website.
							<span className='hero__highlight'>
								{` I try and build cool, accessible stuff for the internet.`}
							</span>
							<span>
								{` Back in 2021 I found myself  between work and decided to try my hand at learning how to code and here we are. I'm a front
									end developer who's passionate about`}
							</span>
							<span className='hero__highlight'>
								{` UI, accessibility and teaching.`}
							</span>
							<span>
								{` I love building things that look good, are responsive, and
									that everyone can use. Maybe you might like some of it too!`}
							</span>
						</p>
						<Link href='#contact' className='contact-btn'>
							Get in touch!
						</Link>
					</div>
				</div>
			</section>
		</>
	)
}
