'use client'

// *** if getting 'Gmail_API: Invalid grant. Please reconnect your Gmail account' this can be because of a changed password

import React, { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactUs() {
	const form = useRef()
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const [nameError, setNameError] = useState({})
	const [emailError, setEmailError] = useState({})
	const [messageError, setMessageError] = useState({})
	const [formErrorBoolean, setFormErrorBoolean] = useState(false)
	const [formError, setFormError] = useState({})
	const [formSuccessBoolean, setFormSuccessBoolean] = useState(false)
	const [formSuccess, setFormSuccess] = useState({})
	const [isNameValid, setIsNameValid] = useState()
	const [isEmailValid, setIsEmailValid] = useState()
	const [isMessageValid, setIsMessageValid] = useState()

	useEffect(() => {
		let errorMessage = document.getElementById('errorMessage')
		if (errorMessage === null) {
			return
		} else {
			formErrorBoolean === true
			errorMessage.focus()
			console.log('error message showing')
		}
	}, [formError])
	useEffect(() => {
		let successMessage = document.getElementById('successMessage')
		if (formSuccessBoolean === true) {
			successMessage.focus()
			console.log('success message showing')
		}
	}, [formSuccess])

	useEffect(() => {
		validateName()
	}, [name])
	useEffect(() => {
		validateEmail()
	}, [email])
	useEffect(() => {
		validateMessage()
	}, [message])

	const validateName = () => {
		if (name === '') {
			setIsNameValid(false)
		} else if (name !== '') {
			setIsNameValid(true)
		}
	}

	const nameSubmitValidation = () => {
		let nameError = {}
		if (isNameValid === false) {
			nameError.text = 'Please enter a name'
			setNameError(nameError)
		} else if (name !== '') {
			setNameError('')
		}
	}

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
		let emailError = {}
		if (isEmailValid === false) {
			emailError.text = 'Please enter a valid email address'
			setEmailError(emailError)
		} else {
			setEmailError('')
		}
	}
	const validateMessage = () => {
		if (message === '') {
			setIsMessageValid(false)
		} else if (message !== '') {
			setIsMessageValid(true)
		}
	}
	const messageSubmitValidation = () => {
		let messageError = {}
		if (isMessageValid === false) {
			messageError.text = 'Please enter a message'
			setMessageError(messageError)
		} else if (message !== '') {
			setMessageError('')
		}
	}

	const sendEmail = (e) => {
		let formError = {}
		let formSuccess = {}
		e.preventDefault()
		nameSubmitValidation()
		emailSubmitValidation()
		messageSubmitValidation()

		if (
			isNameValid === false ||
			isEmailValid === false ||
			isMessageValid === false
		) {
			setFormSuccess('')
			setFormErrorBoolean(true)
			formError.text = 'Please fill out the form properly before sending'
			setFormError(formError)
		} else if (
			isNameValid === true &&
			isEmailValid === true &&
			isMessageValid === true
		) {
			setFormErrorBoolean(false)
			setFormError('')
			// emailjs
			// 	.sendForm('service_beviky9', 'contact_form', form.current, {
			// 		publicKey: 'XJBlzcsGbvPojcC6z',
			// 	})
			// .then(
			setName(''), setEmail(''), setMessage('')
			// )
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
			{formError.text && (
				<div className='error-message' id='errorMessage' tabIndex={-1}>
					{formError.text}
				</div>
			)}
			{formSuccess.text && (
				<div
					className='success-message'
					id='successMessage'
					tabIndex={-1}>
					{formSuccess.text}
				</div>
			)}

			{nameError.text && (
				<div className='error-message'>{nameError.text}</div>
			)}
			<input
				type='text'
				name='user_name'
				value={name}
				className='contact-form__input'
				placeholder='Name'
				onChange={(e) => setName(e.target.value)}
			/>
			{emailError.text && (
				<div className='error-message'>{emailError.text}</div>
			)}
			<input
				type='email'
				name='user_email'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				className='contact-form__input'
				placeholder='Email'
			/>
			{messageError.text && (
				<div className='error-message'>{messageError.text}</div>
			)}
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
