import React from 'react'
import {withRouter} from 'react-router-dom'
import {StarshipList, StarshipDetails} from '../../sw-components'
import Row from '../../html/row'

const StarshipPage = ({history, match}) => {

    const {id} = match.params

    return (
        <Row 
            left={<StarshipList onItemSelected={(id) => history.push(id)}/>} 
            right={<StarshipDetails itemId={id}/>}/>
    )
}

export default withRouter(StarshipPage)