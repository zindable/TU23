
const backend = "https://api.tu23.ch";
const PROJECTORURL = "http://192.168.1.33";

const projectorToken = ""


function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

export function projectorHome() {
    return fetch(`${PROJECTORURL}/cgi-bin/lens_home.cgi`, {
        // TODO: Is there data in the request body?
        method: "POST",
        headers: {
            // TODO: check how auth is done
            Authorization: `Bearer ${projectorToken}`,
        }
    }).then(checkStatus);
}


export function moveProjector(direcrion, speed) {
    const dir = ""
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
    return fetch(`${PROJECTORURL}/cgi-bin/proj_ctl.cgi?key=lens_${dir}${speed}&lang=e&x=38&y=26`, {
        method: "GET",
        headers: {
            // TODO: check how auth is done
            Authorization: `Bearer ${projectorToken}`,
        }
    }).then(checkStatus);
}

