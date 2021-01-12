import React from 'react'
import './header.css'


export default props =>
    <div>
        <header style={{borderbottom: "3px solid #9197A2 "}}>
	<div class="container">
		<div class="logo">
			<div class="img"></div>
			<h1><a href='/'>Arari Smoke</a></h1>
		</div>
		<nav class="desktop">
			<ul>
				<li><a  href="/">catalogo</a></li>
				<li><a style={{color: "#7758F8"}} href="#/contatos">Contato</a></li>
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