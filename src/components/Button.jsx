import React from "react"
import styled from "styled-components"

const StandardButton = styled.button`
	padding: 1em 2em;
	background: rgb(66, 184, 221);
	color: white;
	font-size: 1.2em;
	border-radius: 2em;
	border: none;
	&:hover {
		cursor: pointer;
		background: rgb(50, 170, 200);
	}
`

export default function Button({ text, onClick }) {
	return <StandardButton onClick={onClick}>{text}</StandardButton>
}
