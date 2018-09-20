import React, { Component } from 'react'
import '../styles/App.css';
import AppHeader from '../components/AppHeader'
import SideBar from '../components/Sidebar'
import { Grid, Segment } from 'semantic-ui-react'


class App extends Component {
  
    render() {
        return (
            <div className="App">
               <AppHeader/>
               <Grid columns={2}>
                    <Grid.Column className="app-column1">
                        <Segment style={{ backgroundColor :  '#F0F7FF' }}>
                            <SideBar/>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column className="app-column2">
                        
                    </Grid.Column>
               </Grid>  
            </div>
        );
    }
}

export default App;
