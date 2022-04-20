import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Burger from './Burger'
// Style
import styled from 'styled-components'
import { mixins } from './Theme'

const Navigation: React.FC = () => {
    //const {pathname} = useLocation()
    const [hoverSmenu, setHoverSmenu] = useState(false)
  return (
    <StyleNav>
        <ul className='menu'>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">O mne</NavLink>
            </li>
            <li className='hover-sub'
                onMouseEnter={() => setHoverSmenu(!hoverSmenu)}
                onMouseLeave={() => setHoverSmenu(!hoverSmenu)}
            >
                <a  href="#"
                 onClick={(e) => e.preventDefault()} 
                 
                 >Články</a>
                 {hoverSmenu && (
                    <ul className='submenu'>
                        <li>
                            <NavLink to="/imac" >Zostavy IMAC</NavLink>
                        </li>
                        <li>
                            <NavLink to="/ako_zacat" >Ako začať</NavLink>
                        </li>
                        <li>
                            <NavLink to="/uspechy" >Úspechy</NavLink>
                        </li>
                    </ul>
                 )}
            </li>
            <li>
                <NavLink to="/my_models">Moje modely</NavLink>
            </li>
            <li>
                <NavLink to="/my_projects">Moje projekty</NavLink>
            </li>
            <li>
                <NavLink to="/for_sale">Bazar</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Kontakt</NavLink>
            </li>
        </ul>
        <Burger />
    </StyleNav>
  )
}
const StyleNav = styled.nav`
    width: 100%;
    position: relative;
    @media (max-width: 810px) {
        min-height: 1em;
    }

    .menu {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: .8em 0;
        @media (max-width: 810px) {
            display: none;
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
                
                li {
                    margin-top: 1.4em;
                    a {
                        padding: 0.625em 1em;
                        //margin: 2px 0;
                        background: #2f313c;
                        border-radius: 2px;
                    }
                }
            }
            
        }
    }
`

export default Navigation