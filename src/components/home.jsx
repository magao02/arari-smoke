import React from 'react';

import '../components/home.css'
import Header from '../components/header-home'


import Vapers from '../components/catalogo_vaper'
import Juices from '../components/catalogo_juice'

import Acessorio from '../components/catalogo_acessorios'
export default props =>
    <div>
        <Header></Header>
        <Vapers></Vapers>
        <Juices></Juices>
        <Acessorio></Acessorio>

    </div>

    
   