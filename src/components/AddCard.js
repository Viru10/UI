import React, { useState } from 'react'
import Style from './HomePage.module.css'
import { BsPlusCircle } from 'react-icons/bs'
import Badge from 'react-bootstrap/Badge'
import { Card, CardGroup, Image, CardColumns, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import QuantityCount from './QuantityCount'

function AddCard(props) {
    const { index } = props;
    return (
        <>
            <Card border="primary" style={{ width: '20rem' }} className={Style.fontSize}>
                <Card.Header style={{ textAlign: 'center' }}>Table {index}</Card.Header>
                <ListGroup key={index}>
                    <QuantityCount items={props.items} listOfItems={props.listOfItems} resetItems={props.resetItems}/>
                </ListGroup>
            </Card>
        </>
    )
}

export default AddCard
