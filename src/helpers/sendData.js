export default async function sendData(url, data) {
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
    })
    if (!response.ok){
        throw new Error(`Error in ${url}, status: ${response}`);
    }
    return await response.json();
}