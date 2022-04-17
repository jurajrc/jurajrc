import React from 'react'
import styled from 'styled-components'
// images
import back_top from '../assets/images/back-top-0.jpg'
import logo_imac from '../assets/images/IMACLogosmall.png'

const Header: React.FC = () => {
  return (
    <StyleHeader>
        <div className="odkazy">
            <a className="a1" href="http://www.mini-iac.org/" target='_blank' rel="noreferrer" ><img src={logo_imac} alt="imac"/></a>
            <a className="a2" href="https://www.rcportal.sk/" target='_blank' rel="noreferrer"><img src="https://www.rcportal.sk/application/views/img/rcportal-logo-02.png" alt="RC portal"/></a>
            <a className="a3" href="https://www.f3m.cz/" target='_blank' rel="noreferrer"><img src="https://www.f3m.cz/templates/f3m/images/logo.png" alt="f3m"/></a>
        </div>

        {/* <div className="pozadie">
            <picture>
                <source media="(max-width: 600px)" srcSet={back_top_s} />
                <img src={back_top} alt="Modelary Lomnica"/>
            </picture>
        </div> */}
    </StyleHeader>
  )
}


const StyleHeader = styled.header`
    width: 100%;
    height: 22em;
    overflow: hidden;
    position: relative;
    z-index: 0;
    background: url(${back_top});
    background-position: center;
    background-size: cover;
    @media (max-width: 810px) {
        height: 20em;
    }
    @media (max-width: 580px) {
        height: 15em;
    }

    .odkazy {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .a1, .a2, .a3 {
            width: 6em;
            height: 3em;
            margin: .6em 1.5em;
            img {
                width: 6em;
                height: auto;
            }
        }
        .a2 { padding-top: 0.5em; }
    }

    
`

export default Header