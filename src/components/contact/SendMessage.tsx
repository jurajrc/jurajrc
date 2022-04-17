import React, {useEffect} from 'react'
import ok from '../../assets/images/ok-200px.svg'
// Style
import { StyleSend, CenterSend } from '../Theme'
// Animation
//import { motion } from 'framer-motion'
import { fadeIn, moveTextRight } from '../contact/animations'

interface IProps {
    toggle: any;
}

const SendMessage: React.FC<IProps> = ({ toggle }) => {
    useEffect(() => {
      setTimeout(() => {
          toggle(false)
      }, 3000);
    })
    return (
        <StyleSend variants={fadeIn} initial="hidden" animate="show" exit="exit" >
            <CenterSend variants={moveTextRight} >
                <img src={ok} alt="ok" />
                <p>Správa bola odoslaná.</p>
                
            </CenterSend>
        </StyleSend>
    )
}

export default SendMessage