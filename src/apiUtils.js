export async function apiPost(url, body, token) {

    let paramHeader = {}

    if (token !== null) {
        paramHeader = {
            "Content-Type": "application/json",
            "Authorization": "Bearer" + token
        }
    } else {
        paramHeader = {
            "Content-Type": "application/json"
        }
    }

    let bodyToSend = null

    if(body !== null) {
        bodyToSend = JSON.stringify(body)
    }
    
    return await fetch('http://localhost:3001/api/v1/' + url, {
        method: 'POST',
        body: bodyToSend,
        headers: paramHeader
    })
    .then(response => {
        if(response.type !== undefined && response.type === 'cors') {
            return response.json()
        }
    })
    .catch(e => {
        console.log(e)
    })
    .then(data => {
        return data
    })
}

export async function apiPut(url, body, token) {

    let paramHeader = {
        "Content-Type": "application/json",
        "Authorization": "Bearer" + token
    }

    let bodyToSend = JSON.stringify(body)

    return await fetch('http://localhost:3001/api/v1/' + url, {
        method: 'PUT',
        body: bodyToSend,
        headers: paramHeader
    })
    .then(response => {
        if(response.type !== undefined && response.type === 'cors') {
            return response.json()
        }
    })
    .catch(e => {
        console.log(e)
    })
    .then(data => {
        return data
    })
}