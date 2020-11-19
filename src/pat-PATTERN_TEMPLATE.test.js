import "regenerator-runtime/runtime"; // needed for ``await`` support
import pattern from "./pat-PATTERN_TEMPLATE";
import utils from "patternslib/src/core/utils";

describe("pat-PATTERN_TEMPLATE", () => {
    beforeEach(() => {
        document.body.innerHTML = "";
    });

    it("is initialized correctly", async (done) => {
        document.body.innerHTML = `<div class="pat-PATTERN_TEMPLATE" />`;

        const instance = pattern.init(
            document.querySelector(".pat-PATTERN_TEMPLATE")
        );
        await utils.timeout(1);

        expect().toBe("");

        done();
    });
});
