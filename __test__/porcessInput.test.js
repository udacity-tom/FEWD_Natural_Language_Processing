import { getResults } from "../src/client/js/formHandler"
import 'regenerator-runtime/runtime';
const fetch = require('node-fetch') 
// { node-fetch } from "../node_modules/node-fetch"

jest.mock('node-fetch', () => ({
    get: jest.fn()
}))

describe("Takes click event, Processes input (checks validity-http,etc), Posts to server, Gets data from Server, Checks data validity, passes to updateUI, finish", () => {
    test("Runs, fetch request, fetch response-this is what needs to be tested", async () =>{
        fetch.get.mockResolvedValue(
         {status: { code: '0', msg: 'OK', credits: '1', remaining_credits: '19863' }
           
          }
            

        );
        
        document.body.innerHTML = `
        <input type="checkbox" id="inputAreaType" onclick="Client.changeInputArea()" value="true">


        <textarea id="url" class="inputURL" name="input" rows="5" cols="60" placeholder="http://URL-Uniform-Resource-Locator" style="display: block;">https://www.theguardian.com</textarea>`;

        // const currentInput = document.getElementById("inputAreaType");
        // const inputToAnalyse = document.getElementById( (currentInput.checked ? "url" : "text"));

        // const returnedData = await postData('/process', {URL:currentInput.checked, currentInput: inputToAnalyse.value});


        // const output = undefined;
        // const output = `<button id="error" class="error" style="display: block; font-size: 2em;">There was an error. Error Code 4X3 : Some Random error, please check your input. Please try again..</button>`;


        const testHandleSubmit = getResults();
        
        expect(testHandleSubmit).toEqual(fetch.get())
    })
})

// https://dev.to/zaklaughton/the-only-3-steps-you-need-to-mock-an-api-call-in-jest-39mb
// 1. import module to mock into the test File
// 2. jest.mock() the module
// 3. Use .mockResolvedValue(<mocked response>) to mock the response
