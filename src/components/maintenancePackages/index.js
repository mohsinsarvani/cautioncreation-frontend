import React from 'react'

import { SectionStatic, Row } from '../grid'

import { ServiceCard } from '../serviceCard'

export const MaintenancePackages = () => (
	<SectionStatic>
		<Row>
			<ServiceCard
				service="Proprietor Package"
				price="$60.00 / month"
				paragraph="A straightforward solution for businesses looking to increase their reach on the web."
				subtitle="Package features:"
				features={[
					"Weekly backups",
					"Constant security scans",
					"24/7 uptime monitoring",
					"Weekly System updates",
					"Website performance checks",
					"Detailed report every monday"

				]}
			/>
			<ServiceCard
				service="Partnership Package"
				price="$180.00 / month"
				paragraph="A personalized, easy-to-manage website for companies with a defined brand identity."
				subtitle="Package features:"
				features={[
					"The Partnership package plus:",
					"Daily backups",
					"Discounted hourly rate",
					"Google analytics integration",
					"Extensive broken link monitoring",
					"Weekly Performance Optimizations",
					"2 hours of development each month"

				]}
			/>
			<ServiceCard
				service="Corporation Package"
				price="$400.00 / month"
				paragraph="A full-stack application with advanced features for businesses with expansive requirements."
				subtitle="Package features:"
				features={[
					"The Incorporated Package Plus:",
					"Hourly backups",
					"Weekly SEO improvements",
					"Heavily discounted hourly rate",
					"5 hours of development each month"

				]}
			/>
		</Row>
 	</SectionStatic>
)