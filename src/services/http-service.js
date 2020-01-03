function submitEmailToCollection(emailAddress) {
    const apiEndpoint = '';
    fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify({
            emailAddress: emailAddress
        }),
    })
    .then(res => console.log(res))
    .catch(err => console.error('handle error in submitEmailToCollection service'));
}

export {submitEmailToCollection};