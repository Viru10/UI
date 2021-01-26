import React, { Component, useEffect, useReducer, useState } from 'react'
import Style from './HomePage.module.css'
import { Card, CardGroup, Button, Image, CardColumns, CardDeck } from 'react-bootstrap'
import { BsPlusCircle as AddNewCard } from 'react-icons/bs'
import AddCard from './AddCard'
import Buttons from './Buttons.js'

const COUNT_CARD={
    countCard:[0]
}
const ITEM_LIST ={
    items : []
}
class Homepage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [],
            num: 1,
            countCard: [0]
        }
    }

    addNewCard = () => {
        var count = Object.assign(this.state.countCard, [...this.state.countCard, this.state.countCard.length]);
        this.setState({
            countCard: count
        })
    }

    itemClickHandler = (event) => {
        var item = event.target.id;
        var newState = Object.assign(this.state.items, [...this.state.items, item]);
        this.setState({
            items: newState
        });

        this.uniqueItem = this.state.items.reduce((uniq, item) => {
            return uniq.includes(item) ? uniq : [...uniq, item]
        }, []);


    }

    resetItems = () => {
        var reset = Object.assign([]);
        this.setState({
            items: reset
        });
        this.uniqueItem = reset;
    }

    render() {
        
        const cards = this.state.countCard.length > 0 ? this.state.countCard.map(
            cardNo => <AddCard key={this.state.num} index={this.state.num} />
        ) : null;
        // const cards = this.state.countCard.length > 0 ? this.state.countCard.map(
        //     cardNo => <AddCard key={this.state.num} index={this.state.num} items={this.uniqueItem} listOfItems={this.state.items}
        //         resetItems={() => this.resetItems()} />
        // ) : null;

        return (
            < >
                <CardColumns >
                    {cards}
                </CardColumns>
                <AddNewCard className={Style.svg} onClick={() => {
                    this.addNewCard()
                }} />
                <Buttons clicked={(event) => this.itemClickHandler(event)} />
            </ >
        )
    }
}

export default Homepage
