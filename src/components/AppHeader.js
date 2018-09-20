import React from 'react'
import { Header } from 'semantic-ui-react' 
import '../styles/header.css';

const AppHeader = () => {
   return ( 
        <div className="header-div">
            <Header as="h2" style={{ lineHeight: '100px' , color : '#F0F7FF'}}>My Test Application </Header>
        </div>
    )
} 

export default AppHeader
