import { formHandler } from "../src/client/js/formHandler"
describe("Takes click event, Processes input (checks validity-http,etc), Posts to server, Gets data from Server, Checks data validity, passes to updateUI", () => {
    test("Receives data containing error message and displays it", () =>{
        const data = {
                status: {
                    code: "4X3",
                    msg: "Some Random error, please check your input."
                }
            };
        
        document.body.innerHTML = `
        <button id="error" class="error">
        </button>`;
        require('../src/client/js/notifyError.js');

        const error = document.getElementById("error");
        const output = `<button id="error" class="error" style="display: block; font-size: 2em;">There was an error. Error Code 4X3 : Some Random error, please check your input. Please try again..</button>`;

        notifyError(data);
        expect(error.outerHTML).toEqual(output)
    })
})