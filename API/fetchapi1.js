// The Fetch API provides an interface for fetching (sending and receiving) resources over the network.
// It uses Request and Response objects to handle HTTP requests and responses.
// When a client (like a browser) requests information from a target server,
// the Fetch API acts as a medium to facilitate communication between them.
// There are various APIs (Application Programming Interfaces) on the server that provide access to different types of information.
// The server processes the request and sends a response back to the client based on the requested data.
// The server responses are sent via the APIs.
// Each API have there own docs/documentation about how we can use them
// we enter a link or URLs which are basically endpoints (specific locations) in the server where the client can send requests and the API sends the client the response by sending relevant data based URL or endpoints



// this URL sends a request github's REST API to search for user SHROUDSOURAV
// the number of user accounts found 
// search/users is the endpoint of the URL 
// q = <username account in github> 
const URL = 'https://meowfacts.herokuapp.com/';

// the fetch() method is used to fetch resource (data)
// fetch() method returns a promise
// now we are fetching data from the REST API of github
// fetching data from APIs can take time and we cannot gurantee the timing 
// so asynchronous function should be used


const para = document.querySelector('.cats-para');

const getData = async() => {
    // the response the from fetch() method is an object 
    // the response contains the requests made status code, and other data in key : value pair format
    let response = await fetch(URL); // await => wait until the promise is fullfilled/resolved
                                    // the response is sent by the API after request made
                                    // and since we cannot tell the timing so async-await used for asynchronouse activity
    console.log(`fetching data from ${URL}`);
    console.log(response);


    // the response we are getting is not the response we are seeing when we enter the URL in browser
    // its because we are not fetching the data in the correct format
    // this is where JSON comes in
    // JSON = Javascript Object Notation .... its a data format
    // json() method returns a second promise that revolves with the result of parsing the response body text in .JSON format
    // the json() and fetch() both are asynchronous methods
    // they let rest of the code run and do not let the rest of the program to stop even if work isn't done
    // these methods return a promise 
    let jsonResponse = await response.json();   // formatting the response from the api in json format
                                                // await used because json() returns a second promise and is asynchronous in nature
    console.log(jsonResponse);                                            
    console.log(jsonResponse.data[0]);  // data sent in json format is more readable and usable 
                                        // we can access the data sent like array indexes
    para.innerText = jsonResponse.data[0];                                
                                        
}

const button = document.querySelector('#cats');
button.addEventListener('click', () => {
    getData();
})

