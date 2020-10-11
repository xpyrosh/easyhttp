class EasyHTTP {
    // Make HTTP GET req
    get(url) {
        return new Promise((resolve, reject)=> {
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }
    
    // Make HTTP POST req
    post(url, data) {
        return new Promise((resolve, reject)=> {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }
    
    // Update PUT req
    put(url, data) {
        return new Promise((resolve, reject)=> {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }

    // DELETE req
    // Update PUT req
    delete(url) {
        return new Promise((resolve, reject)=> {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(() => resolve('Deleted'))
            .catch(err => reject(err));
        });
    }
}