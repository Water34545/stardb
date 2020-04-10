import React, {Component} from 'react'
import Header from '../header'
import RandomPlanet from '../random-planet'
import {PeoplePage, StarshipPage, PlanetPage, LoginPage, SecretPage, Error404} from '../pages'
import {SwapiServiceProvider} from '../swapi-service-context'
import SwapiService from '../../services/swapi-service'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './app.css'

export default class App extends Component {

    swapiService = new SwapiService()

    state = {
        selectedPerson: null,
        isLoggedIn: false
    }

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    }

    render() {
        const {isLoggedIn} = this.state
        return (
            <div>
                <SwapiServiceProvider value={this.swapiService}>
                    <Router>
                        <Header/>
                        <RandomPlanet updateInterval={5000}/>
                        <Switch>
                            <Route path='/' exact render={() => <h2>Welcome to StarDB</h2>}/>
                            <Route path='/peoples/:id?' component={PeoplePage}/>
                            <Route path='/planets/:id?' component={PlanetPage}/>
                            <Route path='/starships/:id?' component={StarshipPage}/>
                            <Route path='/login/' render={() => (
                                <LoginPage
                                isLoggedIn={isLoggedIn}
                                onLogin={this.onLogin}/>
                            )}/>
                            <Route path='/secret/' render={() => (
                                <SecretPage isLoggedIn={isLoggedIn}/>
                            )}/>
                            <Route component={Error404}/>
                        </Switch>
                    </Router>
                </SwapiServiceProvider>
            </div>
        )
    }
}