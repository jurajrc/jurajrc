export const fadeIn = {
    hidden: {
        opacity: 0,
        transition: {
            duration: 0.75,
            ease: "easeOut"
        }
    },
    show: {
        opacity: 1,
        then: "beforeChildren",
        staggerChildren: 0.5,
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
            then: "afterChildren",
        }
    }
}

export const moveTextRight = {
    hidden: {
        opacity: 0,
        x: "50vw",
    },
    show: {
        opacity: 1,
        x: "0%",
        transition: {
            delay: 0.2,
            type: 'spring',
            stiffness: 200
        }
    },
    exit: {
        opacity: 0,
        y: "-50vw",
        transition: {
            duration: 1,
        } 
    }
}