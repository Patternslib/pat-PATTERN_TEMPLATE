import "regenerator-runtime/runtime"; // needed for ``await`` support
import pattern from "./PATTERN_TEMPLATE";
import utils from "@patternslib/patternslib/src/core/utils";

describe("pat-PATTERN_TEMPLATE", () => {
    beforeEach(() => {
        document.body.innerHTML = "";
    });

    it("is initialized correctly", async () => {
        document.body.innerHTML = `<div class="pat-PATTERN_TEMPLATE" />`;

        // Just an example!
        // eslint-disable-next-line no-unused-vars
        const instance = pattern.init(document.querySelector(".pat-PATTERN_TEMPLATE"));
        await utils.timeout(1);

        expect(document.body.innerHTML).toBe("<p>hello.</p>");
    });
});
