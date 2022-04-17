import React from 'react'
import { NavLink } from 'react-router-dom'
// Style
import styled from 'styled-components'
import { mixins } from './Theme'

const Navigation: React.FC = () => {
    //const {pathname} = useLocation()
  return (
    <StyleNav>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">O mne</NavLink>
            </li>
            <li>
                <NavLink to="/articles">Články</NavLink>
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
    </StyleNav>
  )
}
const StyleNav = styled.nav`
    width: 100%;

    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        li {
            a {
                color: #caebe5;
                border: 1px solid #333;
                border-radius: 2px;
                padding: 0.625em 1.75em;
                transition: 300ms all ease;
                &:hover,
                &:active {
                    color: #f0a95b;
                }
                @media (max-width: 1120px) {
                    padding: ${mixins.em(5)} ${mixins.em(10)};
                }
            }
            .active {
                color: #f0a95b;
                background: #444;
                border: 1px solid #666;
                border-radius: 2px;
            }
        }
    }
`

export default Navigation