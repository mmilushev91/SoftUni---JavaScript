import {isOddOrEven} from "../isOddOrEven.js";
import { expect } from "chai";

describe("main test", ()=> {
    it ("testing non string value", ()=> {
        expect(isOddOrEven(123)).to.equal(undefined);
        expect(isOddOrEven([1, 2, 3])).to.equal(undefined);
        expect(isOddOrEven({key: "value"})).to.equal(undefined);
    })

    it ("testing even string length", () => {
        expect(isOddOrEven("string")).to.equal("even");
    })

    it ("testing odd string length", () => {
        expect(isOddOrEven("strin")).to.equal("odd");
    })

    it ("testing multiple different strings", ()=> {
        expect(isOddOrEven("ocean")).to.equal("odd");
        expect(isOddOrEven("oceans")).to.equal("even");
        expect(isOddOrEven("Maria")).to.equal("odd");
        expect(isOddOrEven("Marian")).to.equal("even");
    })
})