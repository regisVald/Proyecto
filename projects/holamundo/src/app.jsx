import React from 'react'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
import './App.css'

export function App() {
    return (
        <section className='App'>
            <TwitterFollowCard isfollow = {true} username = 'midudev' name = 'Miguel Angel Duran' />    
            <TwitterFollowCard isfollow = {false} username = 'midudev' name = 'Miguel Angel Duran' />    
            
        </section>
    )
}