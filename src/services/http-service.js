import 'whatwg-fetch';
import { resolve } from 'url';


class HttpService {
    getProducts = () => { // This is an async function

        //1
        var promise = new Promise((resolve, reject) => {

        //2
            fetch('http://localhost:3000/product')
            .then(response => {
                //4
                resolve(response.json());
            })
            .catch(() => console.log("Can’t access  response. Blocked by browser?"))

        })

        //3
        return promise;
    }
}

export default HttpService;