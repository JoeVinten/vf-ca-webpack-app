import React from "react"
import styled from "styled-components"

const Joke = styled.h2`
	font-size: 3em;
`

export default function JokeWrapper({ joke }) {
	return <Joke>{joke}</Joke>
}
