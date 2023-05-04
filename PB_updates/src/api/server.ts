let token = '961f94e351ca423b0fe686fc1ab55066b90084946af1dddc'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://woolly-fast-mammal.glitch.me/api/contacts`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://woolly-fast-mammal.glitch.me/api/contacts`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },


    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://woolly-fast-mammal.glitch.me/api/contacts/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Update new data on server')
        }

        return await response.json()
    },


    delete: async(id:string) => {
        const response = await fetch(`https://woolly-fast-mammal.glitch.me/api/contacts/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
            }
        })

        if(!response.ok){
            throw new Error('Failed to Update new data on server')
        }

        return;
    }, 
}