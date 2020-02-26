import React from "react"
import { Helmet } from 'react-helmet'

import Layout from '../layouts'

import { Header } from '../components/header'
import { ContactForm } from '../components/contactForm'

const contactPage = ({ data }) => (
	<Layout>
		<Helmet>
			<title>Caution Creation | Home</title>
			<meta name="description" content="Caution Creation is a web development agency which specializes in responsive web applications for small businesses and startups."></meta>
		</Helmet>
			<Header
				title="Contact Us"
				text="No matter your question, we're here to help!"
			/>
		<ContactForm />
	</Layout>
)

export default contactPage
