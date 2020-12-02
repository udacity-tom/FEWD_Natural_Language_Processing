import { clearUI } from "../src/client/js/clearUI"
describe("Modifys DOM elements to remove previous sentiment analysis", () => {
    test("Takes each <td> Sentiment value and replaces the innerHTML with an empty string", () =>{
        
        document.body.innerHTML = `
        <table>
        <tbody>
        <tr>
        <td id="agreement">AGREEMENT</td>
        <td id="confidence">100</td>
        <td id="irony">NONIRONIC</td>
        <td id="subjectivity">OBJECTIVE</td>
        </tr>
        </tbody>
        </table>
        <button id="error" class="error" style="display: block; font-size: 2em;">There was an error. Error Code 4X3 : Some Random error, please check your input. Please try again..</button>
        `;
        
        require('../src/client/js/clearUI.js');

        const agreement = document.getElementById("agreement");
        const confidence = document.getElementById("confidence");
        const irony = document.getElementById("irony");
        const subjectivity = document.getElementById("subjectivity");
        const error = document.getElementById("error");

        // const output = `<body><table><tbody><tr><td id="agreement">AGREEMENT</td><td id="confidence">100</td><td id="irony">NONIRONIC</td><td id="subjectivity">OBJECTIVE</td></tr></tbody></table></body>`;

        clearUI();
        expect(agreement.innerHTML).toEqual("");
        expect(confidence.innerHTML).toEqual("");
        expect(irony.innerHTML).toEqual("");
        expect(subjectivity.innerHTML).toEqual("");
        expect(error.style.display).toEqual("none");
    })
})