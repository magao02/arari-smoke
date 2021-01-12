import React from 'react'
import Vapers from '../components/catalogo_vaper'
import Juices from '../components/catalogo_juice'


import Headerh from '../components/header-home'

export default props =>
    <div>
        <Headerh></Headerh>
        <Vapers></Vapers>
        <Juices></Juices>
        <footer>
		<div class="container">
			<nav>
			<ul>
				<li><a style={{color: "black"}} href="/">catalogo</a></li>
				<li><a href="/contatos">Contato</a></li>
			</ul>
		</nav>
		<p>Todos os direitos reservados a arari smoke</p>
		<div class="clear"></div>
		</div>
	</footer>
    </div>