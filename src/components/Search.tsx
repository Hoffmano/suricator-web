import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { api } from '../services/API'
import ReactLoading from 'react-loading'
import '../styles/Search.css'

export default function Search() {
	const dispatch = useDispatch()
	const history = useHistory()

	function addSongs(songs: []) {
		return { type: 'ADD_SONGS', songs }
	}

	const [search, setSearch] = useState('')
	const [loading, setLoading] = useState(false)

	const handleSubmit = async (event: any) => {
		window.scrollTo(0, 0)
		setLoading(true)
		event.preventDefault()

		await api
			.get('/songs', {
				params: { search_string: search },
			})
			.then((response) => {
				setLoading(false)
				dispatch(addSongs(response.data))
				history.push('/songs')
			})
	}

	return (
		<header className="search masthead">
			<div className="bg-circle-1 bg-circle"></div>
			<div className="bg-circle-2 bg-circle"></div>
			<div className="bg-circle-3 bg-circle"></div>
			<div className="bg-circle-4 bg-circle"></div>

			<div className="container">
				<div>
					<h1 id="warning">
						Esta é uma ferramenta para auxilio no processo de estudo de inglês
						que está em processo de desenvolvimento e validação
					</h1>
				</div>
				<form onSubmit={handleSubmit} className="search mx-auto" id="form">
					<div className="input-group input">
						<input
							className="p-3 pl-4"
							placeholder="Nome da música e do artista"
							id="searchInput"
							value={search}
							onChange={(event) => setSearch(event.target.value)}
						/>

						<div className="input-group-append">
							<button
								type="submit"
								id="searchButton"
								className="btn btn-primary p-3"
							>
								Pesquisar
							</button>
						</div>
					</div>
				</form>

				<div style={{ display: loading ? 'block' : 'none' }}>
					<ReactLoading
						type={'bars'}
						color={'#555555'}
						height={'20%'}
						width={'20%'}
					/>
				</div>
			</div>
		</header>
	)
}
