import React from 'react';
import $ from 'jquery'
import '../components/home.css'
import Header from '../components/header-home'


import vape from '../assets/newvapr.jpg'
import fumaca from '../assets/fumaca.jpg'
import juice from '../assets/vapeteste.jpg'
import Homevapers from '../assets/imgvapers.jpeg'
import newJuices from '../assets/newjuice.jpeg'
//import vapers from '../catalogo/vapers';


export default props =>
    <div>
        <Header></Header>
        <section class='homes'>
        <div class="slider" id="slider1">  
            <img alt="fumaca" src={fumaca}></img>
            <img alt="vape" src={vape}></img>
            <img alt="juices" src={juice}></img>
            <div class="bullets-nav"></div>

        </div>
        <div class="vapes">
            <a href="#/vapers"><img alt="vaper" src={Homevapers}></img></a>
            
        </div>
        <div class="vapes">
            <a href="#/juices"><img alt="juice" src={newJuices}></img></a>
            
        </div>
        </section>

		
		
        

    </div>
    
    $(function(){
       
        var indiceAtual = 0;
        var indiceMaximo = $('.slider img').length;
        initSlider()
        cliqueSlider()
    
    
        /* funções */
        function initSlider(){
            for(var i = 0; i < indiceMaximo; i++){
                if(i === 0){
                    $('.bullets-nav').append('<span style="background-color: red;"></span>')
                }else{
                    $('.bullets-nav').append('<span></span')
                }
            }
            $('.slider img').eq(0).fadeIn()
            setInterval(function(){
                alternarSlide()
            }, 3000)
        }
    
        function cliqueSlider(){
            $('.bullets-nav span').click(function(){
                $('.slider img').eq(indiceAtual).stop().fadeOut(2000);
                indiceAtual= $(this).index();
                $('.slider img').eq(indiceAtual).stop().fadeIn(2000);
                $('.bullets-nav span').css('background-color', '#ccc')
                $(this).css('background-color', 'red')
            })
        }
    
        function alternarSlide(){
            $('.slider img').eq(indiceAtual).stop().fadeOut(2000);
            indiceAtual +=1
            if (indiceAtual === indiceMaximo) {
                indiceAtual = 0
            }
            $('.bullets-nav span').css('background-color', '#ccc');
            $('.bullets-nav span').eq(indiceAtual).css('background-color', 'red')
            $('.slider img').eq(indiceAtual).stop().fadeIn(2000);
        }
    
    });

    
   