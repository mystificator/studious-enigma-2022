const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.4) {
                resolve('Here is your data:');
            }
            reject('Request error');    
        }, 2000);
    })
}

fakeRequest('/page1')
    .then((data) => {
        console.log('Request approved for page1');
        console.log(data);
        return fakeRequest('/page2');
    })
    .then ((data) => {
        console.log('Request approved for page2');
        console.log(data);
        return fakeRequest('/page3');
    })
    .then ((data) => {
        console.log('Request approved for page3');
        console.log(data);
    })
    .catch((err) => {
        console.log("Oh no,", err);
    })