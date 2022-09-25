import Pattern from "./PATTERN_TEMPLATE";
import utils from "@patternslib/patternslib/src/core/utils";

describe("pat-PATTERN_TEMPLATE", () => {
    beforeEach(() => {
        document.body.innerHTML = "";
    });

    it("is initialized correctly", async () => {
        document.body.innerHTML = `<div class="pat-PATTERN_TEMPLATE" />`;
        const el = document.querySelector(".pat-PATTERN_TEMPLATE");

        // Just an example!
        // eslint-disable-next-line no-unused-vars
        const instance = new Pattern(el);
        await utils.timeout(1); // wait a tick for async to settle.

        expect(el.innerHTML).toBe("<p>hello.</p>");
    });
});
