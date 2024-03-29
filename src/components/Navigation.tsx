import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Burger from './Burger'
// Style
import styled from 'styled-components'
import { mixins } from './Theme'
import { motion, AnimatePresence } from 'framer-motion'
// State redux
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '..'

interface IState {
    hoverSmenu: boolean
}

const Navigation: React.FC = () => {
    //const {pathname} = useLocation()
    const [hoverSmenu, setHoverSmenu] = useState<IState['hoverSmenu']>(false)

    const isOpenNav = useSelector((state:RootState) => state.isOpenNav)
    const dispatch = useDispatch()
    
    // state resize
    function useWindowSize() {
        const [size , setSize] = useState([ window.innerWidth])
        useEffect(() => {
            const handleResize = () => {
                setSize([ window.innerWidth])
            }
            window.addEventListener("resize", handleResize)
            return () => {
              window.removeEventListener("resize", handleResize)
            }
        })
        return size
    }
    const [width] = useWindowSize()

    useEffect(() => {
      if(width <= 810) {
          dispatch({type: 'CLOSE'})
      } else {
          dispatch({type: 'OPEN'})
      }
    }, [width])
    const closeNav = () => {
      if(width <= 810) {
          dispatch({type: 'CLOSE'})
          document.body.style.overflow = 'visible'
      }
    }

  return (
    <StyleNav>
        {isOpenNav && (

            <ul className='menu'>
                <li>
                    
                        <NavLink onClick={closeNav} to="/">Home</NavLink>
                    
                </li>
                <li>
                    <NavLink onClick={closeNav} to="/about">O mne</NavLink>
                </li>
                <li className='hover-sub'
                    onMouseEnter={() => setHoverSmenu(!hoverSmenu)}
                    onMouseLeave={() => setHoverSmenu(!hoverSmenu)}
                >
                    <a  href="#"
                    onClick={(e) => e.preventDefault()} 
                    >
                        Články
                    </a>
                    <AnimatePresence>
                        {hoverSmenu && (
                            <ul className='submenu'>
                                <motion.li initial={{x:150}} animate={{x: 0, transition: {duration: .5}}} exit={{x: 150, opacity: 0}}>
                                    <NavLink onClick={closeNav} to="/imac" >Zostavy IMAC</NavLink>
                                </motion.li>
                                <motion.li initial={{x:150}} animate={{x: 0, transition: {duration: .5,delay: .1}}} exit={{x: 150, opacity: 0, transition: {duration: .5,delay: .1}}}>
                                    <NavLink onClick={closeNav} to="/ako_zacat" >Ako začať</NavLink>
                                </motion.li>
                                <motion.li initial={{x:150}} animate={{x: 0, transition: {duration: .5, delay: .2}}} exit={{x: 150, opacity: 0, transition: {duration: .5,delay: .2}}}>
                                    <NavLink onClick={closeNav} to="/uspechy" >Úspechy</NavLink>
                                </motion.li>
                            </ul>
                        )}
                    </AnimatePresence>
                </li>
                <li>
                    <NavLink onClick={closeNav} to="/my_models">Moje modely</NavLink>
                </li>
                <li>
                    <NavLink onClick={closeNav} to="/my_projects">Moje projekty</NavLink>
                </li>
                <li>
                    <NavLink onClick={closeNav} to="/for_sale">Bazar</NavLink>
                </li>
                <li>
                    <NavLink onClick={closeNav} to="/contact">Kontakt</NavLink>
                </li>
            </ul>

        )}

        <Burger setHoverSmenu={setHoverSmenu} sizeWidth={width} />

    </StyleNav>
  )
}
const StyleNav = styled.nav`
    width: 100%;
    position: relative;
    @media (max-width: 810px) {
        min-height: 2em;
    }

    .menu {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: .8em 0;
        @media (max-width: 810px) {
            //display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            min-height: 100vh;
            background: #2f313c;
            z-index: 8;
            flex-direction: column;
            align-items: start;
            justify-content: flex-start;
            margin: 0;
            padding-left: 1em;
            padding-top: 2em;
            
            li {
                margin: 1em 0;
            }
        }
        li {
            position: relative;
            a {
                //padding: 0.625em 1.75em;
                width: 100%;
                height: 100%;
                color: #caebe5;
                border-radius: 2px;
                transition: 300ms all ease;
                padding: 0.625em 1.75em;
                border: 1px solid #333;
                @media (max-width: 1120px) {
                    padding: ${mixins.em(5)} ${mixins.em(10)};
                }
                &:hover,
                &:active {
                    color: #f0a95b;
                }
            }
            .active {
                color: #f0a95b;
                background: #444;
                border: 1px solid #666;
                border-radius: 2px;
            }
            .hover-sub { 
                position: relative; 
            
            }
            .submenu {
                position: absolute;
                width: 9em;
                left: -5px;
                display: flex;
                flex-direction: column;
                align-items: start;
                z-index: 10;
                overflow: hidden;
                padding-bottom: 1em;
                
                li {
                    margin-top: 1.4em;
                    a {
                        padding: 0.625em 1em;
                        //margin: 2px 0;
                        background: #2f313c;
                        border-radius: 2px;
                    }
                }
                @media (max-width: 810px) {
                    top: -1.2em;
                    left: 4em;
                    padding-left: 4em;

                    li {
                        margin-top: 1.05em;
                    }

                }
            }
            
        }
    }
`
const Hidden = styled(motion.div)`
    overflow: hidden;
`

export default Navigation