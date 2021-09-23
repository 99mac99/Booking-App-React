import React from 'react';
import styles from './Header.module.css';
import Searchbar from './Searchbar/Searchbar.js';

function Header() {
	return ( 
		<header className={ `${styles.header} + container`}>
			<div>
				<Searchbar />

			</div>
		</header>
	);
}

export default Header;
