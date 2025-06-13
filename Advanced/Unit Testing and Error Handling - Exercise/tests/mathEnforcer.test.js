import {expect} from "chai";
import { mathEnforcer } from "../mathEnforcer.js";

describe("mathEnforcer", function() {
    describe("addFive", function() {
        it ("should return correct result with non number parameter", function() {
            expect(mathEnforcer.addFive("string")).to.equal(undefined);
            expect(mathEnforcer.addFive([1, 2, 3])).to.equal(undefined);
            expect(mathEnforcer.addFive({key: "value"})).to.equal(undefined);
        })

        it ("it should return correct result with number parameter", function() {
                expect(mathEnforcer.addFive(5)).to.equal(10);
                expect(mathEnforcer.addFive(10)).to.equal(15);
                expect(mathEnforcer.addFive(15)).to.equal(20);

                expect(mathEnforcer.addFive(10.5)).to.equal(15.5);
                expect(mathEnforcer.addFive(-5)).to.equal(0);
                expect(mathEnforcer.addFive(-10)).to.equal(-5);
        })
    })

    describe("subtractTen", function() {
        it ("it should return correct result with non number parameter", function() {
            expect(mathEnforcer.subtractTen("string")).to.equal(undefined);
            expect(mathEnforcer.subtractTen([1, 2, 3])).to.equal(undefined);
            expect(mathEnforcer.subtractTen({key: "value"})).to.equal(undefined);
        })

        it ("it should return correct result with number parameter", function() {
            expect(mathEnforcer.subtractTen(15)).to.equal(5);
            expect(mathEnforcer.subtractTen(20)).to.equal(10);
            expect(mathEnforcer.subtractTen(25)).to.equal(15);

            expect(mathEnforcer.subtractTen(22.5)).to.equal(12.5);
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
        })
    })

    describe("sum", function() {
        it ("it should return correct result with non number parameter", function() {
            expect(mathEnforcer.sum("string", 2)).to.equal(undefined);
            expect(mathEnforcer.sum([1, 2, 3], 2)).to.equal(undefined);
            expect(mathEnforcer.sum({key: "value"}, 2)).to.equal(undefined);

            expect(mathEnforcer.sum(2, "string")).to.equal(undefined);
            expect(mathEnforcer.sum(2, [1, 2, 3], 2)).to.equal(undefined);
            expect(mathEnforcer.sum(2, {key: "value"}, 2)).to.equal(undefined);

            expect(mathEnforcer.sum("string", "string")).to.equal(undefined);
            expect(mathEnforcer.sum([1, 2, 3], [1, 2, 3], 2)).to.equal(undefined);
            expect(mathEnforcer.sum({key: "value"}, {key: "value"}, 2)).to.equal(undefined);
        })

        it ("it should return correct result with number parameter", function() {
            expect(mathEnforcer.sum(15, 20)).to.equal(35);
            expect(mathEnforcer.sum(20, 35)).to.equal(55);
            expect(mathEnforcer.sum(20.5, 35)).to.equal(55.5);
            expect(mathEnforcer.sum(25, -25)).to.equal(0);
            expect(mathEnforcer.sum(-25, -25)).to.equal(-50);
            expect(mathEnforcer.sum(25.1, 25.1)).to.equal(50.2);
        })
    })
})

