
export enum ActionType {
    TOGGLEOPEN_NAV = 'TOGGLEOPEN_NAV',
    OPEN = 'OPEN',
    CLOSE = 'CLOSE',
    TOGGLESHOWNAV = 'TOGGLESHOWNAV',
}

interface actionToggle {
    type: ActionType.TOGGLEOPEN_NAV
}
interface actionOpen {
    type: ActionType.OPEN
}
interface actionClose {
    type: ActionType.CLOSE
}

type Action = actionToggle | actionOpen | actionClose

const openNavReducer = (state: boolean = false, action: Action) => {
    switch(action.type) {
        case 'TOGGLEOPEN_NAV':
            return !state;
        case 'OPEN':
            return true;
        case 'CLOSE':
            return false;
        default:
            return state
    }
}

export default openNavReducer