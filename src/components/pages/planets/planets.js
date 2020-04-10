import React from 'react'
import {withRouter} from 'react-router-dom'
import {PlanetList, PlanetDetails} from '../../sw-components'
import Row from '../../html/row'

const PlanetPage = ({history, match}) => {

    const {id} = match.params

    return (
        <Row 
            left={<PlanetList onItemSelected={(id) => history.push(id)}/>} 
            right={<PlanetDetails itemId={id}/>}/>
    )
}

export default withRouter(PlanetPage)