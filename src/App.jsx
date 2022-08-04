import React, { useState } from "react"
import Button from "./components/Button"
import Header from "./components/Header"
import JokeWrapper from "./components/JokeWrapper"
import MichaelScott from "./assets/michael-scott.jpeg"
import styled from "styled-components"

const LayoutWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100vh;
	text-align: center;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`

const ImageStyle = styled.img`
	display: block;
	margin: 2em;
`

function App() {
	const [joke, setJoke] = useState("Create a joke")
	const [isLoading, setIsLoading] = useState(false)
	const [err, setErr] = useState("")

	const fetchAJoke = async () => {
		try {
			setIsLoading(true)
			setJoke("")
			const response = await fetch("https://icanhazdadjoke.com/", {
				method: "GET",
				headers: {
					Accept: "application/json",
				},
			})

			if (!response.ok) throw new Error(`Error, status: ${response.status}`)

			const result = await response.json()
			setJoke(result.joke)
		} catch (err) {
			setErr(err.message)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<>
			<LayoutWrapper>
				<div>
					{err && <h2>{err}</h2>}
					<Header title='Bad joke generator!' />
				</div>
				<ImageStyle src={MichaelScott} alt='michael scott laughing'></ImageStyle>
				<div>
					<Button text='Click for a bad joke' onClick={fetchAJoke} />
					{isLoading && <h2>Loading...</h2>}
					<JokeWrapper joke={joke} />
				</div>
			</LayoutWrapper>
		</>
	)
}
export default App
