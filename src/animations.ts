
export const pageAnimation = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.5
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5
        }
    }
}

// button scroll top
export const hideRight = {
    hidden: {
        x: 80
    },
    show: {
        x: 0,
        transition: {
            type: 'spring',
        }
    },
    exit: {
        x: 80,
        transition: {
            duration: .3
        }
    }
}