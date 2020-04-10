import React, {Component} from 'react'

import './item-details.css'
import Loader from '../loader'

export default class ItemDetails extends Component {

    state = {
        item: null,
        image: null
    }

    componentDidMount() {
        this.updateItem()
    }

    componentDidUpdate(pervProps) {
        if (this.props.itemId !== pervProps.itemId) {
            this.updateItem()
        }
    }

    updateItem = () => {
        const { itemId, getData, getImageUrl } = this.props
        if (!itemId) {
            return
        }

        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: getImageUrl(item)
                })
            })
    }

    render() {
        if (!this.state.item) {
            return (
                <div className='item-details card'>
                    <span>Select a item from a list</span>
                </div>
            )
        }

        const {item, image} = this.state
        const {id, name} = item

        if (id !== this.props.itemId) {
            return (
                <div className='item-details card'>
                    <Loader/>
                </div>
            )
        }

        return (
            <div className='item-details card'>
                <img className='item-image' alt={name} src={image}/>
                <div className='card-body'>
                    <h4>{name}</h4>
                    <ul className='list-group list-group-flush'>
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, {item})
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}