import React from 'react'
import {Switch, Route, Redirect} from 'react-router'
import Home from '../components/home'
import contatos from '../components/contatos/contatos'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/contatos' component={contatos} />
        <Route path='/insta' component={() => { 
     window.location.href = 'https://www.instagram.com/ararismoke/?hl=en'; 
     return null;
    }}/>
        <Route path='/whats' component={() => { 
     window.location.href = 'https://api.whatsapp.com/send?phone=558791714169'; 
     return null;
    }}/>
    <Route path='/sair' component={() => { 
     window.location.href = 'https://www.instagram.com/ararismoke/?hl=en'; 
     return null;
    }}/>

        <Redirect from='*' to="/" />
    </Switch>