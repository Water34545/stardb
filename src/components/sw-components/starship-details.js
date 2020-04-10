import React from 'react'
import ItemDetals, { Record } from '../item-details'
import {withSwapiService} from '../hoc-helpers'

const StarshipDetails = (props) => {
    return (
        <ItemDetals {...props}>
                <Record field='model' label='Model'/>
                <Record field='length' label='Langth'/>
                <Record field='costInCredits' label='Cost'/>
        </ItemDetals>
    )
}

const mapMethodsToProps = (swapiServise) => {
    return {
        getData: swapiServise.getStarship,
        getImageUrl: swapiServise.getStarshipImage
    }
} 

export default withSwapiService(mapMethodsToProps)(StarshipDetails)