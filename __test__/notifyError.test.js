import { notifyError } from "../src/client/js/notifyError"
describe("Modifys DOM element to display error warning", () => {
    test("Receives data containing error message", () =>{
        const data = {
                status: {
                    code: "998",
                    msg: "URL Problem, please check your input."
                }
            };
        
        document.body.innerHTML =
        '<button id="error" class="error">'+
        '</button>';

        
        const output = '<button id="error" class="error">'+"There was an error. Error Code "+"998"+" : "+"URL Problem, please check your input."+" Please try again.."+
        '</button>';


        expect(notifyError(data).text()).toEqual(output)
    })
})