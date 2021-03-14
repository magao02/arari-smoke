import React from 'react'
import './catalogo.css'
import '../components/acessorio.css'
 const nomesAcessorios = [
	 "coil GT mesh individual", 
 	'coil GT mesh caixa com 3',
 	'vidro sky solo',
 	'vidro sky solo plus, luxe2, luxe-s',
	 'vidro pen 22',
	'coil head pen22']
	const valoresacessorios=[
		'45,00',
		'120,00',
		'40,00', 
		'45,00',
		'35,00',
		'35,00',
	]
	const descricaoacessorio=[
		'SKY SOLO E SKY SOLO PLUS',
		'SKY SOLO E SKY SOLO PLUS',
		'SKY SOLO',
		'',
		'',
		'',

	]
	const descricaoacessorioparte2=[
		'50W A 90W',
		'50W A 90W',
		'VAPORESSO',
		'',
		'',
		"",

	]
	const renderizacao =[]
	for (const [i, product] of nomesAcessorios.entries()) {
		
		renderizacao.push(<div class="vitrine">
		<div class="acessorio-img-acesso" ></div>
		<div class="acessorio-info">
			<h2>{product}</h2>
			<h3>{valoresacessorios[i]} R$</h3>
			<p>{descricaoacessorio[i]}<br></br>{descricaoacessorioparte2[i]}</p>
			<a href="#/contatos">mais detalhes</a>
		</div>
	</div>)
	  }
export default props =>
    <div>
        
        <section>
        <div class="title-line">
			<div class="ln1"></div>
		<h2 style={{color: "black"}}> acessorios</h2>
		</div>
		<div class="content-sales">
			<div class="container">
				<div class="vitrine-sales">
					{renderizacao}				
				</div>
				
			
				
				<div class="clear"></div>
		    </div>
        </div>
        </section>
       
    </div>
	