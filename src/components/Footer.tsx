import React from 'react'
// Style
import styled from 'styled-components'

const Footer: React.FC = () => {
  return (
    <StyleFooter>
        <div className="content">
            <p>&copy; <i>{ new Date().getFullYear() }</i><strong> Juraj RC</strong></p>
        </div>
    </StyleFooter>
  )
}
const StyleFooter = styled.footer`
    strong {
        color: red;
    }
`

export default Footer