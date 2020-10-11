class EasyHTTP {
    // Make HTTP GET req
    async get(url) {
        const response = await fetch(url);

        const resData = await response.json();
        return resData;
    }
    
    // Make HTTP POST req
    async post(url, data) {
        
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const resData = await response.json();
            return resData;
        
    }
    
    // Update PUT req
    async put(url, data) {
        
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const resData = await response.json();
            return resData;
        
    }

    // DELETE req
    async delete(url) {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            });

            const resData = await 'Resource delete';
            return resData;
    }
}