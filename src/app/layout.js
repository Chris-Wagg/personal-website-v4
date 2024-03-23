import { Roboto_Condensed } from 'next/font/google'
import './globals.css'

const roboto_condensed = Roboto_Condensed({
	weight: ['200', '400', '700'],
	subsets: ['latin'],
	display: 'swap',
})

export const metadata = {
	title: 'Chris Wagg Dev',
	description: 'Chris Wagg personal website',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={roboto_condensed.className}>{children}</body>
		</html>
	)
}
