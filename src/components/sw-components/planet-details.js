import React from 'react'
import ItemDetals, { Record } from '../item-details'
import {withSwapiService} from '../hoc-helpers'

const PlanetDetails = (props) => {
    return (
        <ItemDetals {...props}>
                <Record field='population' label='Population'/>
                <Record field='rotationPeriod' label='Rotete Period'/>
                <Record field='diameter' label='Diameter'/>
        </ItemDetals>
    )
}

const mapMethodsToProps = (swapiServise) => {
    return {
        getData: swapiServise.getPlanet,
        getImageUrl: swapiServise.getPlanetImage
    }
} 

export default withSwapiService(mapMethodsToProps)(PlanetDetails)