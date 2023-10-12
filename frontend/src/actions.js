import * as api from './api'


export function moveProjector(direction, speed) {
    return (dispatch) => {
        dispatch({ type: "MOVE_PROJECTOR_STARTED" });

        return api
            .moveProjector(direction, speed)
            .then(({ }) => {
                dispatch({ type: "MOVE_PROJECTOR_SUCCEEDED" });

            })
            .catch((error) => dispatch({ type: "MOVE_PROJECTOR_FAILED", error }))
    }
}


export function recievedVote(voter, vote) {
    return (dispatch) => {
        switch (vote) {
            case "green":
                return dispatch({ type: "GREEN", voter });
            case "red":
                return dispatch({ type: "RED", voter });
            case "reset":
                return dispatch({ type: "RESET", voter });
            default:
                break;
        }

    }
}