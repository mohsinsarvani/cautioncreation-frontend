import React from 'react'
import { withTheme } from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import { ContainerStatic, Row } from '../grid'
import { Slider } from '../slider'

import {
	StyledColumn,
	StyledTitle,
	StyledLine,
	StyledTestimonial,
	StyledText,
	StyledName,
	StyledCompany,
} from './style'

export const Testimonials = withTheme(({ theme }) => {
	const data = useStaticQuery(graphql`
    query testimonialsQuery {
			allStrapiTestimonial {
		    edges {
		      node {
						id
		        name
		        testimonial
		        position
		        company
	    		}
	  		}
			}
    }
  `)

	return (
		<ContainerStatic background={theme.colors.darkBlue}>
				<Row>
					<StyledColumn xs="12" lg="4">
						<StyledTitle>
							What Our Clients Are Saying
							<StyledLine />
						</StyledTitle>
					</StyledColumn>
					<StyledColumn xs="12" lg="8">
						<Slider interval="12" prefix="testimonials">
							{data.allStrapiTestimonial.edges.map(({ node }, i) => (
								<StyledTestimonial key={node.id}>
									<StyledText>"{node.testimonial}"</StyledText>
									<StyledName>{node.name}</StyledName>
									<StyledCompany>
										<span>{node.position}</span> at <span>{node.company}</span>
									</StyledCompany>
								</StyledTestimonial>
							))}
						</Slider>
					</StyledColumn>
				</Row>
		</ContainerStatic>
	)
})
