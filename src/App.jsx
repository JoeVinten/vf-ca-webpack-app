import React, { useState } from "react"
import Button from "./components/Button"
import Header from "./components/Header"
import JokeWrapper from "./components/JokeWrapper"

function App() {
	const [joke, setJoke] = useState("Create a joke")
	const [isLoading, setIsLoading] = useState(false)
	const [err, setErr] = useState("")

	const fetchAJoke = async () => {
		try {
			setIsLoading(true)
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
		<div>
			{err && <h2>{err}</h2>}
			<Header title='Dad joke generator!' />
			<Button text='Click for a bad joke' onClick={fetchAJoke} />
			{isLoading && <h2>Loading...</h2>}
			<JokeWrapper joke={joke} />
		</div>
	)
}
export default App
