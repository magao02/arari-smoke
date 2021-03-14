import React from 'react'

import './catalogo.css'
import './juice.css'
//formantação caravela
const nomesCaravela=['CARAVELA OASIS','CARAVELA MANGO','CARAVELA MELANCIA ICE',
'CARAVELA LIMONADA ICE']
const nicotinaCaravela=['3mg','3mg','0mg','omg']
const renderezicaoCaravela=[]
for (const [i, product] of nomesCaravela.entries()) {
	renderezicaoCaravela.push(
		<div class="vitrine">
			<div class="acessorio-img-juice" ></div>
			<div class="acessorio-info">
				<h2>{product}</h2>
				<h3>40,00 R$</h3>
				<p>30ml<br></br>{nicotinaCaravela[i]}
				</p>
				<a href="#/contatos">mais detalhes</a>
			</div>
		</div>
	)
}
//
//formatacao 4friends
const nomes4friends=['4FRIENDS MOSCOU','4FRIENDS SEX ON THE BEACH','4FRIENDS TROPICAL PUNCH','4FRIENDS CHERNOBYL','4FRIENDS INVERNO NUCLEAR']
const valores4friends=['Indisponível','Indisponível','40,00 R$','40,00 R$','Indisponível']
const renderezicao4friends=[]
for (const [i, product] of nomes4friends.entries()) {
	renderezicao4friends.push(
		<div class="vitrine">
			<div class="acessorio-img-juice" ></div>
			<div class="acessorio-info">
				<h2>{product}</h2>
				<h3>40,00 R$</h3>
				<p>30ml<br></br>3MG, 6MG
				</p>
				<a href="#/contatos">mais detalhes</a>
			</div>
		</div>
	)
}
//
//formatacao magojuices
const nomesmago=['ARCTIC LARANJA','ARCTIC MINT','ARCTIC RED','BUBALOO DE UVA','COLD GRAPE','ERA DO GELO','HOCUS POCUS','ICE MELONS','ARCTIC PINE','ARCTIC APPLE','ARCTIC MANGO','STRAWBERRY',]
const nicotinamago=['3MG 6MG', '6MG','3MG 6MG','0MG 3MG 6MG','3MG 6MG','3MG 6MG','3MG 6MG','3MG 6MG','3MG 6MG','3MG 6MG','3MG 6MG','3MG',]
const renderezicaomago=[]
for (const [i, product] of nomesmago.entries()) {
	renderezicaomago.push(
		<div class="vitrine">
			<div class="acessorio-img-juice" ></div>
			<div class="acessorio-info">
				<h2>{product}</h2>
				<h3>40,00 R$</h3>
				<p>30ml<br></br>{nicotinamago[i]}
				</p>
				<a href="#/contatos">mais detalhes</a>
			</div>
		</div>
	)
}
export default function jice(){
     return <div>
        <section>
        <div class="title-line">
			<div class="ln1"></div>
		<h2 style={{color: "black"}}> Juices</h2>
		</div>
		<div class="content-sales">
			<div class="container">
				<div class="vitrine-sales">
					{renderezicaomago}
					{renderezicao4friends}
					<div class="vitrine">
						<div class="acessorio-img-juice" ></div>
						<div class="acessorio-info">
							<h2>magna strong mint</h2>
							<h3>80,00 R$</h3>
							<p>30ml<br></br>3mg
							</p>
							<a href="#/contatos">mais detalhes</a>
						</div>
					</div>
					{renderezicaoCaravela}
				</div>
				<div class="clear"></div>
		    </div>
        </div>
        </section>
    </div>
	

}

	