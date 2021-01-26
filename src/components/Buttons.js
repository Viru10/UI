import React from 'react'
import { Card, CardGroup, Button, Image, CardColumns } from 'react-bootstrap'
import Style from './HomePage.module.css'
import Dhokla from '../assests/dhokla.png'
import SevKhamani from '../assests/sev_khamni.png'
import Poha from '../assests/Poha.png'
import Bhajia from '../assests/bhajia.png'

function Buttons(props) {
    return (
        <div>
            <Button variant="primary" size="lg" className="mr-3" id="khaman" onClick={props.clicked} >
                <Image className={Style.imgSize} src={Dhokla} alt="Dhokla Image" />Khaman
            </Button>{' '}
            <Button variant="success" size="lg" className="mr-3" id="sev-khamani" onClick={props.clicked}>
                <Image className={Style.imgSize} src={SevKhamani} alt="Sevkhamani Image" />Sev-Khamani
                    </Button>{' '}
            <Button variant="warning" size="lg" className="mr-3" id="bhajia" onClick={props.clicked}>
                <Image className={Style.imgSize} src={Bhajia} alt="Bhajia Image" />Bhajia
                    </Button>{' '}
            <Button variant="danger" size="lg" className="mr-3" id="bataka-puava" onClick={props.clicked}>
                <Image className={Style.imgSize} src={Poha} alt="Poha Image" />Bataka-Poha
                    </Button><br /><br />
        </div>
    )
}

export default Buttons
