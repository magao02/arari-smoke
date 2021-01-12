import React from 'react'
import Headerc from '../components/header-contato'
import './catalogo.css'
import './contatos.css'
import logo from '../assets/whats.png'
import logo2 from '../assets/insta.png'

export default props =>
    <div>
        <Headerc></Headerc>
        <section className= 'contatos'>
        <div class="title-line">
			<div class="ln1"></div>
		<h2 style={{color: "black"}}> Entre em contato</h2>
        </div>
            <div className='whats'>
                <a href='#/whats'>
                    <img alt='whats' src={logo}></img>
                    <h2>Via Whatsapp</h2>
                </a>
            </div>
            <div className='whats'>
                <a href='#/insta'>
                    <img alt= 'insta' src={logo2}></img>
                    <h2>Via instagram</h2>
                </a>
            </div>


        </section>
    </div>
