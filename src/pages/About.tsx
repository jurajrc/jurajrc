import React from 'react'
// Style
import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'
import { pageAnimation } from '../animations'
import back_image from '../assets/images/about/sc-code1.png'
import { mixins } from '../components/Theme'

const About: React.FC = () => {
  return (
    <StyleSection
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
    >
        <div className="content">
          <h2>Niečo o mne ako to cele začalo.</h2>
			    <p>
				    Toto je príbeh z dávnych čias. Z čias mýtov a legiend, keď boli starí bohovia malicherní a krutí a zoslali na ľudstvo možnosť použitia <strong>frekvencie 35-40 MHz</strong>. A neskôr <strong>2,4Ghz</strong>.
			    </p>
          <p>Ale teraz vážne, píše sa rok 1998, mal som cca 15 rokov. Keď sme sa vracali z rodinnej dovolenky, zastavyly sme niekde na pol ceste pri novinovom stánku a ja som za sklom uvidel časopis <strong>Modelář</strong>. To som ešte netušil ako si ja obľúbim tento koníček. </p>

          <h3>Moja cesta Web-developera</h3>
          <p>
            Táto stránka bola vytvorená 10/2020 <strong>html a css</strong>. Od 12/2020 je ju troška <strong>JavaSriptu</strong> :).
          </p>
          <p>Od 2/2021 prerabka na <strong>PHP</strong> :).</p>
          <p>12/2021 prerabka cez React framework spustenie 4/2022</p>

          <p className="icons-snake">
            <img src="https://s2.svgbox.net/flags-ld.svg?ic=sk&color=000" alt="icon" />
            <img src="https://s2.svgbox.net/files.svg?ic=html&color=000" alt="icon" />
            <img src="https://s2.svgbox.net/files.svg?ic=css&color=000" alt="icon" />
            <img src="https://s2.svgbox.net/files.svg?ic=scss&color=000" alt="icon" />
            <img src="https://s2.svgbox.net/files.svg?ic=vscode&color=474724" alt="icon" />
            <img src="https://s2.svgbox.net/files.svg?ic=js" alt="icon" />
            <img src="https://s2.svgbox.net/files.svg?ic=php3" alt="icon" />
            <img src="https://s2.svgbox.net/files.svg?ic=reactts&color=000" alt="icon" />
          </p>
        </div>
    </StyleSection>
  )
}

const snake = keyframes`
  0%  { transform: translateY(0em) scale(1); }
	6%  { transform: translateY(${mixins.em(-5)}) scale(1.1); }
	12% { transform: translateY(${mixins.em(-15)}) scale(1.2); }
	18% { transform: translateY(${mixins.em(-5)}) scale(1.1); }
	24% { transform: translateY(0px) scale(1); }
`
const StyleSection = styled(motion.section) `
    background: url(${back_image});
    background-position: top center;
    background-size: cover;
    transition: .8s all ease-in-out;

    .content {
      max-width: ${mixins.em(800)};
      background: #bbb;
      margin: 0 auto;
      min-height: 60vh;
      padding: 0 1em;
      @media (max-width: 1120px) {
        max-width: 37.5em;
        
      }
      @media (max-width: 540px) {
        background: rgba(0, 0, 0, 0.7);
		    color: #fff;
		    transition: .8s all ease-in-out;
      }

      h2, h3 {
		    margin: 0;
		    padding-top: 1em;
	    }
      p {
        line-height: ${mixins.em(22)};
      }

      .icons-snake {
        img {
          width: ${mixins.em(35)};
          margin: 0 .6em;
          padding: 3em 0;
	        position: relative;
          
          animation: ${snake} 3s linear infinite;

          &:first-child {
            bottom: ${mixins.em(6)};
          }
          &:nth-child(2) {	animation-delay: .25s;  }
          &:nth-child(3) {	animation-delay:  .5s;  }
          &:nth-child(4) {	animation-delay: .75s;  }
          &:nth-child(5) {	animation-delay:   1s;  }
          &:nth-child(6) {	animation-delay: 1.25s; }
          &:nth-child(7) {	animation-delay: 1.5s;  }
          &:nth-child(8) {	animation-delay: 1.75s; }

          @media (max-width: 540px) {
            font-size: 80%;
            padding: 2em 0;
          }
        }
      }
    }
`

export default About