// promises

const promiseExample = new Promise(
    
    (resolve, reject) => {

        // const timeHandler = () => {
        //     const fortuna = Math.random();
        // if(fortuna > 0.5) {
        //     resolve(fortuna);
        // } else {
        //     reject(fortuna);
        // }
        // }

        // setTimeout(timeHandler, 5000);

        const fortuna = Math.random();
        resolve(fortuna);

}

)

console.log(promiseExample);