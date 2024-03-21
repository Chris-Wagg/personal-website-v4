'use client'

import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactUs() {
	const form = useRef()

	const sendEmail = (e) => {
		e.preventDefault()

		emailjs
			.sendForm('service_beviky9', 'contact_form', form.current, {
				publicKey: 'XJBlzcsGbvPojcC6z',
			})
			.then(
				() => {
					console.log('SUCCESS!')
				},
				(error) => {
					console.log('FAILED...', error.text)
				}
			)
	}

	return (
		<form ref={form} onSubmit={sendEmail}>
			<label>Name</label>
			<input type='text' name='user_name' />
			<label>Email</label>
			<input type='email' name='user_email' />
			<label>Message</label>
			<textarea name='message' />
			<input type='submit' value='Send' />
		</form>
	)
}
