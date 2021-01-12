import React from 'react'
import './header.css'


export default props =>
    <div>
        <header style={{borderbottom: "3px solid #9197A2 "}}>
	<div class="container">
		<div class="logo">
			<div class="img"></div>
			<h1>Arari Smoke</h1>
		</div>
		<nav class="desktop">
			<ul>
				<li><a style={{color: "black"}} href="/">catalogo</a></li>
				<li><a href="#/contatos">Contato</a></li>
			</ul>
		</nav>
		<nav class="mobile">
			<ul>
				<li><a href="/">Vendas</a></li>
				<li><a href="#/contatos">Contato</a></li>
			</ul>
		</nav>
		<div class="clear"></div>
	</div>
	</header>
    </div>

