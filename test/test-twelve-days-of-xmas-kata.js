/*global describe, it*/

import chai from "chai";
import twelveDaysOfXmasKata from "../src/twelve-days-of-xmas-kata";
import {readFile} from "fs";

const expect = chai.expect;

describe("twelve-days-of-xmas-kata", function () {
  it("should print the lyrics to the Twelve days of Christmas", function (done) {
    readFile("test/full-lyrics.txt", "utf-8", (err, lyrics) => {
        expect(twelveDaysOfXmasKata()).to.equal(lyrics);
        done();
    });
  })
});
