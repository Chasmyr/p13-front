export async function apiPost(url, body, token) {

    // création des paramètre de header
    let paramHeader = {}

    // si le token est présent ajouter l'authorization
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

    // création du body à envoyer
    let bodyToSend = null

    // si le body est null alors ne rien envoyé
    if(body !== null) {
        bodyToSend = JSON.stringify(body)
    }
    
    // fetch l'api avec l'url et les différents paramètres
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

    // création des paramètre de header
    let paramHeader = {
        "Content-Type": "application/json",
        "Authorization": "Bearer" + token
    }

    // création des paramètre de header
    let bodyToSend = JSON.stringify(body)

    // fetch l'api avec l'url et les différents paramètres
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