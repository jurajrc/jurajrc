import styled from "styled-components";
import { motion } from "framer-motion";

export const StyleSend = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #ffffff4b;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 20;
    backdrop-filter: blur(2px);
    overflow: hidden;
    color: #fff;
    letter-spacing: .8px;
` 
export const CenterSend = styled(motion.div)`
    width: 20em;
    height: 20em;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgb(51, 51, 51);
    border-radius: 1em;
    p {
        margin-bottom: 2em;
    }
    @media (max-width: 500px) {
        width: 17em;
        height: 16em;
        img {
            width: 8em;
        }
    }
`

export const mixins = {
    /**
     * calculate px to em
     * @param size : ;
     * @param content 
     * @returns string
     */
    em(size: number, content: number = 16): string {
        return size / content + 'em'
    } 
}