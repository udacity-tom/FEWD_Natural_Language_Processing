import { checkURLInput } from "../src/client/js/checkURLInput"
describe("Checks submitted URL and makes sure protocol is present", () => {
    test("examines start of URL input and confirms http:// or https:// are present", () =>{
        const inputToCheck = [
            "https://www.udacity.com",
            "https://www.theguardian.com",
            "https://www.link3.dev"
        ];
        const output = true;

        expect(checkURLInput(inputToCheck)).toEqual(output)
    });
    test("rejects inputs without http:// or https://", () => {
        const inputToCheck = [
            "htps://www.udacity.com",
            "https:/www.theguardian.com",
            "www.link3.dev"
        ];
        const output = false;

        expect(checkURLInput(inputToCheck)).toEqual(output)
    })
})