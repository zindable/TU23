
const NODEREDURL = "https://nodered.tu23.ch";
const PROJECTORURL = "http://192.168.1.33";

const projectorToken = ""
const projectorTimeout = 1000

function moveProjectorWithDelay(i, direcrion, speed) {
    setTimeout(function () {
        moveProjector(direcrion, speed)
    }, i * projectorTimeout);
}

export function setArmState(armState) {
    return fetch(`${NODEREDURL}/${armState}`, {
        method: "GET"
    }).catch((error) => {
        console.log(error);
    })
}

export function moveProjectorToHome() {
    return fetch(`${PROJECTORURL}/cgi-bin/lens_home.cgi`, {
        // TODO: Is there data in the request body?
        method: "POST",
        headers: {
            // TODO: check how auth is done
            Authorization: `Bearer ${projectorToken}`,
        }
    }).catch((error) => {
        console.log(error);
    })
}


export function moveProjector(direcrion, speed) {
    console.log(direcrion);
    console.log(speed);
    var dir;
    switch (direcrion) {
        case "up":
            dir = "vshift_inc"
            break;
        case "down":
            dir = "vshift_dec"
            break;
        case "left":
            dir = "hshift_dec"
            break;
        case "right":
            dir = "hshift_iec"
            break;

        default:
            break;
    }
    console.log("Moving projector " + direcrion + " with speed " + speed);
    return fetch(`${PROJECTORURL}/cgi-bin/proj_ctl.cgi?key=lens_${dir}${speed}&lang=e&x=38&y=26`, {
        method: "GET",
        headers: {
            // TODO: check how auth is done
            Authorization: `Bearer ${projectorToken}`,
        }
    }).catch((error) => {
        console.log(error);
    })
}

export function moveProjectorToStage() {
    moveProjectorToHome()
    const speed = [3, 3, 3, 2, 1]
    setTimeout(() => {
        for (let i = 0; i < speed.length; i++) {
            moveProjectorWithDelay(i, "down", speed[i]);
        }
    }, projectorTimeout)
}

export function moveProjectorToCircle() {
    moveProjectorToHome()
    const speed = [3, 3, 3, 2, 1, 1]
    setTimeout(() => {
        for (let i = 0; i < speed.length; i++) {
            moveProjectorWithDelay(i, "up", speed[i])
        }
    }, projectorTimeout)
}


export function setVote(jury, vote) {
    var juryid;
    switch (jury) {
        case "jury_1":
            juryid = "jury_1"
            break;
        case "jury_2":
            juryid = "jury_2"
            break;
        case "jury_3":
            juryid = "jury_3"
            break;
        default:
            break
    }


    fetch(`${NODEREDURL}/${juryid}`, {
        method: "POST",
        body: JSON.stringify(vote)
    }).catch((error) => {
        console.log(error);
    })
}

export function setAllVotes(vote) {
    setVote("jury_1", vote)
    setVote("jury_2", vote)
    setVote("jury_3", vote)
}


export function getShutterState() {
    return fetch(`${NODEREDURL}/projector`, {
        method: "GET",
    })
        .then(result => result.json())
        .catch((error) => {
            console.log(error);
        })

}
