'use client'

// *** if getting 'Gmail_API: Invalid grant. Please reconnect your Gmail account' this can be because of a changed password

import React, { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactUs() {
	const form = useRef()
	const [name, setName] = useState('')
	const [message, setMessage] = useState('')
	const [email, setEmail] = useState('')
	const [emailError, setEmailError] = useState({})
	const [formErrorBoolean, setFormErrorBoolean] = useState(false)
	const [formError, setFormError] = useState({})
	const [formSuccessBoolean, setFormSuccessBoolean] = useState(false)
	const [formSuccess, setFormSuccess] = useState({})
	const [isEmailValid, setIsEmailValid] = useState()

	useEffect(() => {
		let errorMessage = document.getElementById('errorMessage')
		if (errorMessage === null) {
			return
		} else {
			formErrorBoolean === true
			errorMessage.focus()
		}
	}, [formError])
	useEffect(() => {
		let successMessage = document.getElementById('successMessage')
		if (formSuccessBoolean === true) {
			successMessage.focus()
		}
	}, [formSuccess])

	useEffect(() => {
		validateEmail()
	}, [email])

	const validateEmail = () => {
		if (email === '') {
			setIsEmailValid(false)
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			setIsEmailValid(false)
		} else {
			setIsEmailValid(true)
		}
	}
	const emailSubmitValidation = () => {
		setEmailError('')
		let emailError = {}
		if (isEmailValid === false) {
			emailError.text = 'Please enter a valid email address'
			setEmailError(emailError)
		} else {
			setEmailError('')
		}
	}

	const sendEmail = (e) => {
		let formError = {}
		let formSuccess = {}
		e.preventDefault()
		emailSubmitValidation()

		if (isEmailValid === false) {
			setFormSuccess('')
			setFormErrorBoolean(true)
			formError.text = 'Please fill out the form properly before sending'
			setFormError(formError)
		} else if (isEmailValid === true) {
			setFormErrorBoolean(false)
			setFormError('')
			// emailjs
			// 	.sendForm('service_beviky9', 'contact_form', form.current, {
			// 		publicKey: 'XJBlzcsGbvPojcC6z',
			// 	})
			// 	.then(setName(''), setEmail(''), setMessage(''))
			setFormSuccessBoolean(true)
			formSuccess.text = 'Success! Thanks for sending me a message'
			setFormSuccess(formSuccess)
		} else {
			return
		}
	}

	return (
		<form
			ref={form}
			onSubmit={sendEmail}
			className='contact-form'
			id='contact'>
			{/* {formError.text && (
				<div className='error-message' id='errorMessage' tabIndex={-1}>
					{formError.text}
				</div>
			)} */}
			{formSuccess.text && (
				<div
					role='alert'
					aria-live='polite'
					className='success-message'
					id='successMessage'
					tabIndex={-1}>
					{formSuccess.text}
				</div>
			)}

			<div className='input-container'>
				<label htmlFor='contact_name'>Name</label>
				<input
					aria-required
					required
					type='text'
					name='contact_name'
					value={name}
					className='contact-form__input'
					placeholder='John Smith'
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			{/* {emailError.text && (
				<div
					id='email-error'
					role='alert'
					aria-live='polite'
					className='error-message'>
					{emailError.text}
				</div>
			)} */}
			<div className='input-container'>
				<label htmlFor='contact_reply_email'>Email</label>
				<input
					aria-required
					required
					type='email'
					name='contact_reply_email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className='contact-form__input'
					placeholder='email@domain.com'
					aria-describedby='email-error'
				/>
			</div>

			<div className='input-container'>
				<label htmlFor='message'>Your message</label>
				<textarea
					aria-required
					required
					name='message'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					className='contact-form__input--text-area'
					placeholder='Say hi!'
				/>
			</div>

			<button
				type='submit'
				value='Send'
				className='contact-form--submit-button'>
				Send message
			</button>
		</form>
	)
}
