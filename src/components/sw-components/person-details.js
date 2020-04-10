import React from 'react'
import ItemDetals, { Record } from '../item-details'
import {withSwapiService} from '../hoc-helpers'

const PersonDetails = (props) => {
    return (
        <ItemDetals {...props}>
                <Record field='gender' label='Gender'/>
                <Record field='eyeColor' label='Eye Color'/>
                <Record field='birthYear' label='Birth Year'/>
        </ItemDetals>
    )
}

const mapMethodsToProps = (swapiServise) => {
    return {
        getData: swapiServise.getPerson,
        getImageUrl: swapiServise.getPersonImage
    }
} 

export default withSwapiService(mapMethodsToProps)(PersonDetails)