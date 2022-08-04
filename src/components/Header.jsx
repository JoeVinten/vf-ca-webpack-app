import React from "react"
import styled from "styled-components"

const Title = styled.h1`
	font-size: 1.5em;
`

export default function ({ title }) {
	return (
		<div>
			<Title>{title}</Title>
		</div>
	)
}
