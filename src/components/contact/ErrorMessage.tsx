import React, { useEffect } from 'react'
import fail from '../../assets/images/fail-200px.svg'
// Style
import { StyleSend, CenterSend } from '../Theme'
// Animation
//import { motion } from 'framer-motion'
import { fadeIn, moveTextRight } from '../contact/animations'

interface IProps {
    toggleError: any
}

const ErrorMessage: React.FC<IProps> = ({ toggleError }) => {

    useEffect(() => {
        setTimeout(() => {
            toggleError(false)
        }, 3000);
    })

    return (
        <StyleSend variants={fadeIn} initial="hidden" animate="show" exit="exit" >
            <CenterSend variants={moveTextRight} >
                <img src={fail} alt="error" />
                <p>Nepodarilo sa Odoslať</p>
                
            </CenterSend>
        </StyleSend>
    )
}

export default ErrorMessage