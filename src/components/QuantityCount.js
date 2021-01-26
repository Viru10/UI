import React, { Component, useEffect, useState } from 'react'
import Badge from 'react-bootstrap/Badge'
import { AiOutlineMinusCircle as DecreaseQuntity } from 'react-icons/ai'
import { FcPlus as IncreaseQuntity } from 'react-icons/fc'
import { Card, CardGroup, Image, CardColumns, ListGroup, ListGroupItem, Button } from 'react-bootstrap'


const INTIAL_STATE = {
    khamanCount: 1,
    sevKhamaniCount: 1,
    bhajiaCount: 1,
    pohaCount: 1
}
class QuantityCount extends Component {
    constructor(props) {
        super(props)

        this.state = INTIAL_STATE;

    }

    resetItems = () => {
        this.props.items.length = 0;
        this.setState(INTIAL_STATE);
    }

    _addAndRemoveQuantity = (itemName, action) => {
        var _quantity = { ...this.state }

        switch (action) {
            case 'decrease':
                switch (itemName) {
                    case 'khaman':
                        _quantity.khamanCount = _quantity.khamanCount - 1;
                        this.setState(_quantity)
                        break;

                    case 'sev-khamani':
                        _quantity.sevKhamaniCount = _quantity.sevKhamaniCount - 1;
                        this.setState(_quantity);
                        break;

                    case 'bhajia':
                        _quantity.bhajiaCount = _quantity.bhajiaCount - 1;
                        this.setState(_quantity);
                        break;

                    case 'bataka-puava':
                        _quantity.pohaCount = _quantity.pohaCount - 1;
                        this.setState(_quantity);
                        break;

                    default:
                        break;
                }
                break;
            case 'increase':
                switch (itemName) {
                    case 'khaman':
                        _quantity.khamanCount = _quantity.khamanCount + 1;
                        this.setState(_quantity)
                        break;

                    case 'sev-khamani':
                        _quantity.sevKhamaniCount = _quantity.sevKhamaniCount + 1;
                        this.setState(_quantity);
                        break;

                    case 'bhajia':
                        _quantity.bhajiaCount = _quantity.bhajiaCount + 1;
                        this.setState(_quantity);
                        break;

                    case 'bataka-puava':
                        _quantity.pohaCount = _quantity.pohaCount + 1;
                        this.setState(_quantity);
                        break;

                    default:
                        break;
                }
                break;

            default:
                console.error("QualityCount class ");
                break;
        }
    }

    checkItemAndCountQuantity = (item, index) => {
        switch (item) {
            case 'khaman':
                return (
                    <ul key={index}>
                        {item}
                        <span style={{ float: 'right', marginRight: '10px' }}>
                            <DecreaseQuntity style={{ color: 'red', cursor: 'pointer' }} id='decrease' onClick={(event) => this._addAndRemoveQuantity(item, event.target?.id)} />
                            <Badge variant="light">{this.state.khamanCount}</Badge>
                            <IncreaseQuntity style={{ color: 'red', cursor: 'pointer' }} id='increase' onClick={(event) => this._addAndRemoveQuantity(item, event.target?.viewportElement.id)} />
                        </span>
                    </ul>)
            case 'sev-khamani':
                return (
                    <ul key={index}>
                        {item}
                        <span style={{ float: 'right', marginRight: '10px' }}>
                            <DecreaseQuntity style={{ color: 'red', cursor: 'pointer' }} id='decrease' onClick={(event) => this._addAndRemoveQuantity(item, event.target.id)} />
                            <Badge variant="light" >{this.state.sevKhamaniCount}</Badge>
                            <IncreaseQuntity style={{ color: 'red', cursor: 'pointer' }} id='increase' onClick={(event) => this._addAndRemoveQuantity(item, event.target.viewportElement.id)} />
                        </span>
                    </ul>)
            case 'bhajia':
                return (
                    <ul key={index}>
                        {item}
                        <span style={{ float: 'right', marginRight: '10px' }}>
                            <DecreaseQuntity style={{ color: 'red', cursor: 'pointer' }} id='decrease' onClick={(event) => this._addAndRemoveQuantity(item, event.target.id)} />
                            <Badge variant="light" >{this.state.bhajiaCount}</Badge>
                            <IncreaseQuntity style={{ color: 'red', cursor: 'pointer' }} id='increase' onClick={(event) => this._addAndRemoveQuantity(item, event.target.viewportElement.id)} />
                        </span>
                    </ul>)
            case 'bataka-puava':
                return (
                    <ul key={index}>
                        {item}
                        <span style={{ float: 'right', marginRight: '10px' }}>
                            <DecreaseQuntity style={{ color: 'red', cursor: 'pointer' }} id='decrease' onClick={(event) => this._addAndRemoveQuantity(item, event.target.id)} />
                            <Badge variant="light" >{this.state.pohaCount}</Badge>
                            <IncreaseQuntity style={{ color: 'red', cursor: 'pointer' }} id='increase' onClick={(event) => this._addAndRemoveQuantity(item, event.target.viewportElement.id)} />
                        </span>
                    </ul>)
            default:
                break
        }
    }

    render() {
        var uniqItemList = this.props.items.length > 0 ?
            this.props.items.map((item, index) =>
                this.checkItemAndCountQuantity(item, index))
            : <h5 style={{ textAlign: 'center' }}>Hungry !! <br />Choose Any Delicious Food !</h5>;

        return (
            <div style={{ textTransform: 'capitalize', float: 'left' }}>
                {uniqItemList}
                
                <Button variant="info" size="sm" id='reset' onClick={this.props.resetItems}
                    style={{ margin: '1rem 8rem 1rem' }}>Reset</Button>
            </div>
        )
    }
}

//specify default props
QuantityCount.defaultProps = {
    items: []
}
export default QuantityCount
