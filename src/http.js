export async function updateUserPlaces(places){
    const response = await fetch('http://localhost:3000/user-places', {
        method: 'PUT',
        body: JSON.stringify({ places : places}),
        headers: {
            'Content-Type' : 'application/json'
        }
    });

    const resData = await response.json();

    if(!response.ok){
        throw new error("Failed to update user data!")
    }

    return resData.message
}