import { updateUI } from "../src/client/js/updateUI"
describe("Modifys DOM elements to display sentiment analysis", () => {
    test("Receives data containing summary message and displays it", () =>{
        const data = {
            status: { code: '0', msg: 'OK', credits: '1', remaining_credits: '19863' },
            model: 'general_en',
            score_tag: 'P',
            agreement: 'AGREEMENT',
            subjectivity: 'OBJECTIVE',
            confidence: '100',
            irony: 'NONIRONIC',
          };
        
        document.body.innerHTML = `
        <table>
        <tbody>
        <tr>
        <td id="agreement"></td>
        <td id="confidence"></td>
        <td id="irony"></td>
        <td id="subjectivity"></td>
        </tr>
        </tbody>
        </table>
        `;
        
        require('../src/client/js/updateUI.js');

        const agreement = document.getElementById("agreement");
        const confidence = document.getElementById("confidence");
        const irony = document.getElementById("irony");
        const subjectivity = document.getElementById("subjectivity");
        

        // const output = `<body><table><tbody><tr><td id="agreement">AGREEMENT</td><td id="confidence">100</td><td id="irony">NONIRONIC</td><td id="subjectivity">OBJECTIVE</td></tr></tbody></table></body>`;

        updateUI(data);
        expect(agreement.innerHTML).toEqual("AGREEMENT");
        expect(confidence.innerHTML).toEqual("100");
        expect(irony.innerHTML).toEqual("NONIRONIC");
        expect(subjectivity.innerHTML).toEqual("OBJECTIVE");
    })
})