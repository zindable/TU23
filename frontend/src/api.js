
const backend = "https://api.tu23.ch";
const projector = "http://192.168.1.33";

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
    return fetch(`${projector}/cgi-bin/lens_home.cgi`, {
        // TODO: Is there data in the request body?
        method: "POST",
        headers: {
            // TODO: check how auth is done
            Authorization: `Bearer ${projectorToken}`,
        }
    }).then(checkStatus);
}


export function projectorUpSlow() {
    return fetch(`${projector}/cgi-bin/proj_ctl.cgi?key=lens_vshift_inc1&lang=e&x=38&y=26`, {
        method: "GET",
        headers: {
            // TODO: check how auth is done
            Authorization: `Bearer ${projectorToken}`,
        }
    }).then(checkStatus);
}

export function projectorDownSlow() {
    return fetch(`${projector}/cgi-bin/proj_ctl.cgi?key=lens_vshift_dec1&lang=e&x=38&y=26`, {
        method: "GET",
        headers: {
            // TODO: check how auth is done
            Authorization: `Bearer ${projectorToken}`,
        }
    }).then(checkStatus);
}

export function projectorUpFast() {
    return fetch(`${projector}/cgi-bin/proj_ctl.cgi?key=lens_vshift_inc3&lang=e&x=38&y=26`, {
        method: "GET",
        headers: {
            // TODO: check how auth is done
            Authorization: `Bearer ${projectorToken}`,
        }
    }).then(checkStatus);
}

export function projectorDownFast() {
    return fetch(`${projector}/cgi-bin/proj_ctl.cgi?key=lens_vshift_dec3&lang=e&x=38&y=26`, {
        method: "GET",
        headers: {
            // TODO: check how auth is done
            Authorization: `Bearer ${projectorToken}`,
        }
    }).then(checkStatus);
}
