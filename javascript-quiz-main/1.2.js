// resolves after 3 seconds
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 3000);
});

// resolves immediately
const promise2 = new Promise((resolve, reject) => {
    resolve('Promise 2 resolved');
});

// rejects after 5 seconds
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise 3 rejected');
    }, 5000);
});

// Log the orders of promises
promise1.then((result) => {
    console.log(result); // promise 1 resolved
}).catch((error) => {
    console.error(error);
});

promise2.then((result) => {
    console.log(result); // promise 2 resolved
}).catch((error) => {
    console.error(error);
});

promise3.then((result) => {
    console.log(result);
}).catch((error) => {
    console.error(error); // promise 3 rejected
});
