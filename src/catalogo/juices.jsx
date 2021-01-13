import React from 'react'
import Vapers from '../components/catalogo_vaper'
import Juices from '../components/catalogo_juice'
import Acessorios from '../components/catalogo_acessorios'


import Headerh from '../components/header-home'

export default props =>
    <div>
        <Headerh></Headerh>
        <Juices></Juices>
        <Vapers></Vapers>
		<Acessorios></Acessorios>
        <footer>
		<div class="container">
			<nav>
			<ul>
				<li><a style={{color: "#7758F8"}} href="/">catalogo</a></li>
				<li><a href="/contatos">Contato</a></li>
			</ul>
		</nav>
		<p>Todos os direitos reservados a arari smoke</p>
		<div class="clear"></div>
		</div>
	</footer>
    </div>