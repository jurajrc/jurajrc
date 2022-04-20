
import { ActionType } from "./openNav"

interface actionToggle {
    type: ActionType.TOGGLESHOWNAV
}

type Action = actionToggle

const showNavReducer = (state: boolean = true, action: Action) => {
    switch(action.type) {
        case 'TOGGLESHOWNAV':
            return !state
        default: 
            return state
    }
}

export default showNavReducer