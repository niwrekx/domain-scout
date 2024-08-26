const propagationApiKey = import.meta.env.VITE_DNS_PROPAGATOIN_API_KEY;

export const dnsPropagationLookup = async(domain) => {
    // const url = `https://api.viewdns.info/propagation/?domain=${domain}&apikey=import.meta.env.VITE_DNS_PROPAGATOIN_API_KEYoutput=json`
    const url = `api/propagation/?domain=${domain}&apikey=${propagationApiKey}&output=json`;
    const options = {
        method: 'GET',
        mode: 'no-cors',
        headers: {
            'x-rapidapi-key':propagationApiKey,
            'x-rapidapi-host': 'community-viewdns.p.rapidapi.com'
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
}

