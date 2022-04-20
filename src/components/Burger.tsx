import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '..'

const Burger: React.FC = () => {
        const dispatch = useDispatch()
    const isOpenNav = useSelector((state: RootState) => state.isOpenNav)
    //console.log(isOpenNav);
    
  return (
      
    <StyleBurger
        onClick={() => dispatch({ type: 'TOGGLEOPEN_NAV' })}
        style={{top: isOpenNav ? '-15em' : '-0.1em'}}
    >
        <Line1 className={isOpenNav ? "l1" : ""}/>
        <Line2 className={isOpenNav ? "l2" : ""}/>
        <Line3 className={isOpenNav ? "l3" : ""}/>
    </StyleBurger>
  )
}
const StyleBurger = styled.div`
    width: 1.4em; 
    height: 1.2em;
    position: absolute;
    background: #2f313c;
    //top: -0.2em;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    transition: 600ms all ease;
    display: none;
    @media screen and (max-width: 810px) {
        display: block;
        z-index: 40;
    }
    @media (max-width: 500px) {
        top: 1em;
    }
    .l1 {
    transform: rotate(45deg) translate(26%, 250%);
    }
    .l2 {
        transform: translateY(-50%) translateX(100%);
        opacity: 0;
    }
    .l3 {
        transform: rotate(-45deg) translate(26%, -250%);
    }
`
const Line = styled(motion.div)`
    width: 1.4em;
    height: 0.15em;
    background: white;
    position: absolute;
    transition: 500ms all ease;
    
`
const Line1 = styled(Line)`
    top: 0;
    transform: rotate(0deg) translate(0%, 0%);
    
`
const Line2 = styled(Line)`
    top: 50%;
    transform: translateY(-50%);
`
const Line3 = styled(Line)`
    bottom: 0;
    transform: rotate(0deg) translate(0%, 0%);
`

export default Burger