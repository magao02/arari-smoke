import React from 'react'
import './catalogo.css'
import '../components/vaper.css'
const nomeVapers =['sky solo plus','sky solo plus rainbow','sky solo plus','sky solo plus','sky solo','sky solo','sky solo','Pod Luxe PM40']
const valorVapers=['200,00 R$','indisponível','200,00 R$','200,00 R$','165,00 R$','165,00 R$','165,00 R$','Indisponível']
const descricaoVapers=['bateria: 3000mah','bateria: 3000mah','bateria: 3000mah','bateria: 3000mah','bateria: 1500mah','bateria: 1500mah','bateria: 1500mah','bateria: 1800 mAh']
const descricaoVapersparte2=['capacidade: 8ml','capacidade: 8ml','capacidade: 8ml','capacidade: 8ml','capacidade: 3,5ml','capacidade: 3,5ml','capacidade: 3,5ml','capacidade: 2,0ml']
const renderizacaoVaper=[]
for (const [i, product] of nomeVapers.entries()) {
		
	renderizacaoVaper.push(
		<div class="vitrine">
			<div class="acessorio-img-vaper" ></div>
			<div class="acessorio-info">
				<h2>{product} </h2>
				<h3>{valorVapers[i]}</h3>
				<p>{descricaoVapers[i]}<br></br>{descricaoVapersparte2[i]}</p>
				<a href="#/contatos">mais detalhes</a>
				</div>
			</div>
	)
  }
export default props =>
    <div>
        
        <section>
        <div class="title-line">
			<div class="ln1"></div>
		<h2 style={{color: "black"}}> Vapers</h2>
		</div>
		<div class="content-sales">
			<div class="container">
				<div class="vitrine-sales">
					{renderizacaoVaper}
				
				</div>
			
				<div class="clear"></div>
		    </div>
        </div>
        </section>
       
    </div>