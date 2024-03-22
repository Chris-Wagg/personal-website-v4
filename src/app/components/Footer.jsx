import EmailForm from './EmailForm'

export default function Footer() {
	return (
		<footer className='footer'>
			<div className='contact-text'>
				<div>
					<h2>Contact me!</h2>
					<p>
						{`Want to drop me a line? Have some questions? Just feel like
						a chat? Send me a message and I'll get back to you as soon
						as I can!`}
					</p>
				</div>
				<a
					className='svg-link'
					href='https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/'>
					Free SVG Backgrounds and Patterns by SVGBackgrounds.com
				</a>
			</div>
			<EmailForm />
		</footer>
	)
}
