export const nameServerLookup = async(domain) =>{
    const url = `https://zozor54-whois-lookup-v1.p.rapidapi.com/nslookup?domain=${domain}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': import.meta.env.VITE_NSLOOKUP_API_KEY,
            'x-rapidapi-host': import.meta.env.VITE_API_HOST
        }
    };

    try {
        const response = await fetch(url, options);
        if(!response.ok){
            throw new Error (`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Failed to fetch name server data:', error.message);
        throw error;
    }

};

