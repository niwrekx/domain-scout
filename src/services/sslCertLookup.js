export const sslCertLookup = async(domain) => {
    const url = `https://zozor54-whois-lookup-v1.p.rapidapi.com/ssl-cert-check?domain=${domain}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': import.meta.env.VITE_SSL_CERT_API_KEY,
            'x-rapidapi-host': 'zozor54-whois-lookup-v1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        return result
    } catch (error) {
        console.error('Failed to fetch name server data:', error.message);
        throw error;
    }

}