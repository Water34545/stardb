import React, {Component} from 'react'
import PropTypes from 'prop-types'
import SwapiServise from '../../services/swapi-service'
import Loader from '../loader/index'
import ErrorIndicator from '../error-indocator'

import './random-planet.css'

export default class RandomPlanet extends Component {

    static defaultProps = {
        updateInterval: 10000
    }

    static propTypes = {
        updateInterval: PropTypes.number
    }

    SwapiService = new SwapiServise()

    state = {
        planet: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        const {updateInterval} = this.props
        this.updatePlanet()
        this.interval = setInterval(this.updatePlanet, updateInterval)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random()*25)+3
        this.SwapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    }

    render() {
        const {planet, loading, error} = this.state
        const dataOrError = !error ? <PlanetViev planet={planet}/> : <ErrorIndicator/>
        const content = !loading ? dataOrError : <Loader/>

        return (
            <div className='random-planet jumbotron rounded'>
                {content}
            </div>
        )
    }
}

const PlanetViev = ({planet}) => {
    const {id, name, population, rotationPeriod, diametr} = planet
    return (
        <React.Fragment>
            <img className='planet-image' alt={name} src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
                <div>
                    <h4>{name}</h4>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <span className='term'>Population</span>
                            <span>{population}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Rotation Period</span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Diametr</span>
                            <span>{diametr}</span>
                        </li>
                    </ul>
                </div>
        </React.Fragment>
    )
}