import React from 'react'
// Style
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { pageAnimation } from '../animations'

const Imac: React.FC = () => {
  return (
    <StyleSection
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
    >
        <div className="content">
            Imac
        </div>
    </StyleSection>
  )
}
const StyleSection = styled(motion.section) `
    
`

export default Imac