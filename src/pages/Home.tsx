import React, { useState } from 'react'
// Style
import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'
import { pageAnimation } from '../animations'
// Images
import back_large from '../assets/images/home/vyrezy.webp'
import data from '../dataHome'


const Home: React.FC = () => {
    const [imageData] = useState(data)


  return (
    <StyleSection
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
    >
        <div className="content">

            <div className="foto-section">
                {imageData.map((item, index) => (
                    <div className="image-home" key={index}>
                        <img src={item.image_large} alt={item.text} title={item.text} />
                        <div className="image-text">
                            <p
                                style={{animationDuration: `${(item.text.length / 3).toFixed(1)}s` }}
                            >{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="movie-section">
                <iframe title='youtube' width="560" height="315" src="https://www.youtube.com/embed/DTfyDitdJO4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen data-aos="fade-right"></iframe>

                <iframe title='youtube' width="560" height="315" src="https://www.youtube.com/embed/yAeLd42eANg" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen data-aos="fade-left"></iframe>

                <iframe title='youtube' width="560" height="315" src="https://www.youtube.com/embed/WiArkXruzzs" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen data-aos="fade-left"></iframe>
            </div>

        </div>
    </StyleSection>
  )
}
const goText = keyframes`
    0% {
        opacity: 0;
    }
    5% {
		transform: translateX(100%);
		opacity: 0;
	}
	15% {
		opacity: 1;
	}
	85% {
		opacity: 1;
	}
	95% {
		transform: translateX(-100%);
		opacity: 0;
	}
    100% {
        opacity: 0;
    }
`
const StyleSection = styled(motion.section) `
    background: url(${back_large});
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    overflow-x: hidden;
    min-height: 100vh;

    .foto-section {
        width: 80%;
        margin: 0 auto;
        @media (max-width: 750px) {
            width: 95%;
        }

        .image-home {
            width: 100%;
            position: relative;
            overflow-x: hidden;

            img {
                width: 100%;
                height: auto;
            }
            .image-text {
                position: absolute;
                top: 2em;
                left: 50%;
                transform: translateX(-50%);
                @media (max-width: 500px) {
                    top: .5em;
                }

                p {
                    letter-spacing: 1px;
                    padding: .5em 1em;
                    border-radius: .5em;
                    background: rgba(255, 255, 255, 0.6);
                    animation: ${goText} linear infinite;
                    @media (max-width: 600px) {
                        font-size: 0.8em;
                    }
                    @media (max-width: 500px) {
                        font-size: 0.6em;
                    }
                }
            }
        }
    }
    .movie-section {
        iframe {
            @media (max-width: 750px) {
            width: 95%;
            height: 50vw;
        }
        }
    }
`


export default Home