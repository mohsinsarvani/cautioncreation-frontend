import React, { useState } from 'react'

import * as S from './style'

export const NavDropdown = ({ title, href, children }) => {
	const [active, setActive] = useState(false)

	return (
		<S.DropdownWrapper>
			<S.Title onClick={() => setActive(!active)} active={active}>{title}</S.Title>
			<S.DropdownContainer active={active}>
				<S.Dropdown>
					{children}
				</S.Dropdown>
			</S.DropdownContainer>
		</S.DropdownWrapper>
	)
}

export const NavDropdownLink = ({ children, href }) => (
	<S.Link href={href}>{children}</S.Link>
)
