function submitEmailToCollection(emailAddress) {
    const apiEndpoint = '';
    return fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify({
            emailAddress: emailAddress
        }),
    });
}

export {submitEmailToCollection};