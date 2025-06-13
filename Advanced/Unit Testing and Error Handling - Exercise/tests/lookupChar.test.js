import {lookupChar} from "../lookupChar.js";
import { expect } from "chai";

describe ("main tests", ()=> {
    it("non string value", ()=> {
        expect(lookupChar(123, 2)).to.equal(undefined);
        expect(lookupChar([1, 2, 3]), 2).to.equal(undefined);
        expect(lookupChar({key: "value"}, 2)).to.equal(undefined);
    })

    it ("non integer value", ()=> {
        expect(lookupChar("string", 2.2)).to.equal(undefined);
        expect(lookupChar("string", "string")).to.equal(undefined);
        expect(lookupChar("string", [1, 2, 3])).to.equal(undefined);
        expect(lookupChar("string", {key: "value"})).to.equal(undefined);
    })

    it ("check incorrect index", ()=> {
        expect(lookupChar("string", 6)).to.equal("Incorrect index");
        expect(lookupChar("string", 7)).to.equal("Incorrect index");
        expect(lookupChar("string", -1)).to.equal("Incorrect index");
    })

    it("correct returned value", ()=> {
        expect(lookupChar("string", 0)).to.equal("s");
        expect(lookupChar("string", 5)).to.equal("g");
        
    })


})