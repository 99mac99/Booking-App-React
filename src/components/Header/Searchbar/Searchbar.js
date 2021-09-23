import React from 'react';

function Searchbar() {
	const [term, setTerm] = React.useState('');

	const search = () => {
		console.log('szukaj', term)
	}
	
	const onKeyDownHandler = e => {
		if (e.key === 'Enter') {
			search();
		}
	}

	return(
			<div className =" d-flex">
				<input
					value={term}
					onKeyDown={e => console.log(e.key === "Enter")}
					onChange={e => setTerm(e.target.value)}
					className='form-control'
					type='text'
					placeholder='Szukaj...'
				/>
				<button 
				onClick={search}
				className="ml-1 btn btn-secondary">Szukaj</button>
			</div>

	);
}

export default Searchbar;
