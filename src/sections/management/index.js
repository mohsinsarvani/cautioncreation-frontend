import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { SectionStatic, Row, Column } from '../../components/grid'
import * as S from './style'

export const Management = () => {
  const data = useStaticQuery(graphql`
    query meetManagementQuery {
			portrait:file(relativePath: { eq: "byron-portrait.jpg" }) {
	      childImageSharp {
	        fluid(quality: 93) {
	          ...GatsbyImageSharpFluid
	        }
	      }
	    }
    }
  `)
	return (
		<SectionStatic>
			<Row>
				<Column xs="2" lg="0" spacer/>
				<Column xs="8" lg="3">
					<S.ImageWrapper>
						<S.Image fluid={data.portrait.childImageSharp.fluid}>

						</S.Image>
					</S.ImageWrapper>
				</Column>
				<Column xs="2" lg="0" spacer />
				<Column xs="12" lg="9">
					<S.TextWrapper>
						<S.Title>
							Meet Management
						</S.Title>
						<S.Text>
							Byron Hill is the founder of Caution Creation. For many years he has had a vision of applying his unparalleled love for technology and business to the industry. After building his first website for his parents company when he was in middle school, Byron was hooked. He invisioned a future of not only owning a tech company, but also of teaching others how to become tech literate.
							<br />
							<br />
							Byron has a passion for new technology. Whenever he learns about a new framework that will make his or his clients lives simpler, he jumps at the oppurtunity to learn it. You can rest assured that your website will use the most advanced tehcnologies, while remaining simple and easy to use for both your users and your business.
						</S.Text>
					</S.TextWrapper>
				</Column>
			</Row>
		</SectionStatic>
	)
}
