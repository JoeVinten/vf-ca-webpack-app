import React from "react"
import styled from "styled-components"

const StandardButton = styled.button`
	padding: 2em 4em;
`

export default function Button({ text, onClick }) {
	return <StandardButton onClick={onClick}>{text}</StandardButton>
}
