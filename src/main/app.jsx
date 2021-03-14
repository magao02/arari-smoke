import './app.css'
import React from 'react'
import {HashRouter} from 'react-router-dom'
import $ from 'jquery';
import Routes from './routes'
$(function(){
  $('.mensage-button').click(function(){
    $('.mensage').css('display', 'none')
  })
})
export default props =>
  <HashRouter>
    <div class="mensage">
      <div class="mensage-wraper">
      <h1>
      olá,cliente ararismoke!
      </h1>
      <h2> Somos uma loja virtual voltada para vendas de produtos de vapes e afins,habitamos em Araripina-pe com o intuito de trazer qualidade e melhor preço da região! Nosso site tem em virtude de atualizar nossos produtos e valores.OBS:Em relação as entregas,nos contate do DM ou wpp para combinar o melhor horário e local!</h2>
      <button  class="mensage-button">Entrar</button>
      <a href="#/sair">Sair</a>
      </div>
      
    </div>
    <Routes />
  </HashRouter>
  