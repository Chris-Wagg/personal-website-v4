export default function Footer() {
	return (
		<footer className='footer'>
			<div className='contaxt-text'>
				<h2>Contact me!</h2>
				<p>
					{`Want to drop me a line? Have some questions? Just feel like
					a chat? Send me a message and I'll get back to you as soon
					as I can.`}
				</p>
			</div>
			<form action='submit' className='contact-form'>
				<input
					type='text'
					id='name'
					name='name'
					placeholder='Name'
					className='contact-form__input'
				/>

				<input
					type='email'
					id='email'
					name='email'
					placeholder='Email'
					className='contact-form__input'
				/>

				<textarea
					name='message'
					id='message'
					cols='30'
					rows='10'
					className='contact-form__input--text-area'
				/>
				<button>Send message</button>
			</form>
		</footer>
	)
}
