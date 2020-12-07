import { handleSubmit } from "../src/client/js/formHandler"

const fetch = require('node-fetch') 

jest.mock('node-fetch')

describe("Processes input", () => {
    test("Runs, fetch request, fetch response-this is what needs to be tested", async () =>{
        fetch.mockResolvedValue({
            'status': { 'code': "0", 'msg': "OK", 'credits': "1", 'remaining_credits': "19863" }
          }
        );
        
        document.body.innerHTML = `
        <input type="checkbox" id="inputAreaType" onclick="Client.changeInputArea()" value="true">
        <textarea id="url" class="inputURL" name="input" rows="5" cols="60" placeholder="http://URL-Uniform-Resource-Locator" style="display: block;">https://www.theguardian.com</textarea>`;
        
        expect(handleSubmit()).toBeUndefined()
    })
})

// https://dev.to/zaklaughton/the-only-3-steps-you-need-to-mock-an-api-call-in-jest-39mb
// 1. import module to mock into the test File
// 2. jest.mock() the module
// 3. Use .mockResolvedValue(<mocked response>) to mock the response
