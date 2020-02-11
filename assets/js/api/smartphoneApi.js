//////////////
// Request API
//////////////

export function getSmartphones() {
    return fetch('api/smartphones.json')
        .then(response => {
            return response.text()
                .then((text) => {
                    if (text) {
                        if (JSON.parse(text).hasOwnProperty('hydra:member')) return JSON.parse(text)['hydra:member'];
                        console.log(JSON.parse(text));
                    }
                    return JSON.parse(text);
                });
        });
}

export function getOneSmartphone(id) {
    console.log('requete One Smartphone');
    return fetch('api/smartphones/'+id+'.json')
        .then(response => {
            return response.text()
                .then((text) => {
                    if (text) {
                        if (JSON.parse(text).hasOwnProperty('hydra:member')) return JSON.parse(text)['hydra:member'];
                        console.log(JSON.parse(text));
                    }
                    return JSON.parse(text);
                });
        });
}

export function getUsers() {
    return fetch('api/users.json?page=1')
        .then(response => {
            return response.text()
                .then((text) => {
                    if (text) {
                        if (JSON.parse(text).hasOwnProperty('hydra:member')) return JSON.parse(text)['hydra:member'];
                        console.log(JSON.parse(text));
                    }
                    return JSON.parse(text);
                });
        });
}