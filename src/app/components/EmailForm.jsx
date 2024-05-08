'use client'

// *** if getting 'Gmail_API: Invalid grant. Please reconnect your Gmail account' this can be because of a changed password

import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactUs() {
	const form = useRef()
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const [nameError, setNameError] = useState({})
	const [emailError, setEmailError] = useState({})
	const [messageError, setMessageError] = useState({})
	const [formError, setFormError] = useState({})
	const [formSuccess, setFormSuccess] = useState({})
	const [isNameValid, setIsNameValid] = useState()
	const [isEmailValid, setIsEmailValid] = useState()
	const [isMessageValid, setIsMessageValid] = useState()

	const validateName = () => {
		let nameError = {}
		if (name === '') {
			nameError.text = 'Please enter a name'
			setNameError(nameError)
			return setIsNameValid(false)
		} else if (name !== '') {
			setNameError('')
			return setIsNameValid(true)
		}
		//TODO: fix this so it updates on the first button press
	}
	const validateEmail = () => {
		let emailError = {}
		if (email === '') {
			emailError.text = 'Please enter an email address'
			setEmailError(emailError)
			return setIsEmailValid(false)
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			emailError.text = 'Please enter a valid email address. '
			setEmailError(emailError)
			return setIsEmailValid(false)
		} else {
			setEmailError('')
			return setIsEmailValid(true)
		}
	}
	const validateMessage = () => {
		let messageError = {}
		if (message === '') {
			messageError.text = 'Please enter a message'
			setMessageError(messageError)
			return setIsMessageValid(false)
		} else if (message !== '') {
			setMessageError('')
			return setIsMessageValid(true)
		}
	}
	const sendEmail = (e) => {
		let formError = {}
		let formSuccess = {}
		e.preventDefault()
		validateName()
		validateEmail()
		validateMessage()

		if (
			isNameValid === false ||
			isEmailValid === false ||
			isMessageValid === false
		) {
			formError.text = 'Please fill out the form properly before sending'
			setFormError(formError)
			console.log(isNameValid, isEmailValid, isMessageValid)
		} else if (
			isNameValid === true &&
			isEmailValid === true &&
			isMessageValid === true
		) {
			setFormError('')
			console.log(isNameValid, isEmailValid, isMessageValid)
			// emailjs
			// 	.sendForm('service_beviky9', 'contact_form', form.current, {
			// 		publicKey: 'XJBlzcsGbvPojcC6z',
			// 	})
			// .then(
			setName(''), setEmail(''), setMessage('')
			// )
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
				<p className='error-message'>{formError.text}</p>
			)}
			{formSuccess.text && (
				<p className='success-message'>{formSuccess.text}</p>
			)}

			<input
				type='text'
				name='user_name'
				value={name}
				className='contact-form__input'
				placeholder='Name'
				onChange={(e) => setName(e.target.value)}
			/>
			{nameError.text && (
				<p className='error-message'>{nameError.text}</p>
			)}
			<input
				type='email'
				name='user_email'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				className='contact-form__input'
				placeholder='Email'
			/>
			{emailError.text && (
				<p className='error-message'>{emailError.text}</p>
			)}
			<textarea
				name='message'
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				className='contact-form__input--text-area'
				placeholder='Say hi!'
			/>
			{messageError.text && (
				<p className='error-message'>{messageError.text}</p>
			)}
			<button
				// onClick={handleSubmit}
				type='submit'
				value='Send'
				className='contact-form--submit-button'>
				Send message
			</button>
		</form>
	)
}
