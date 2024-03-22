'use client'

import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { redirect } from 'next/dist/server/api-utils'

export default function ContactUs() {
	const form = useRef()
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')

	const sendEmail = (e) => {
		e.preventDefault()

		emailjs
			.sendForm('service_beviky9', 'contact_form', form.current, {
				publicKey: 'XJBlzcsGbvPojcC6z',
			})

			.then(setName(''), setEmail(''), setMessage(''))
	}

	return (
		<form
			ref={form}
			onSubmit={sendEmail}
			className='contact-form'
			id='contact'>
			{/* <label>Name</label> */}
			<input
				type='text'
				name='user_name'
				value={name}
				onChange={(e) => setName(e.target.value)}
				className='contact-form__input'
				placeholder='Name'
			/>
			{/* <label>Email</label> */}
			<input
				type='email'
				name='user_email'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				className='contact-form__input'
				placeholder='Email'
			/>
			{/* <label>Message</label> */}
			<textarea
				name='message'
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				className='contact-form__input--text-area'
				placeholder='Say hi!'
			/>
			<button
				type='submit'
				value='Send'
				className='contact-form--submit-button'>
				Send message
			</button>
		</form>
	)
}
