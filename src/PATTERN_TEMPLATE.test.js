import Pattern from "./PATTERN_TEMPLATE";
import events from "@patternslib/patternslib/src/core/events";

describe("pat-PATTERN_TEMPLATE", function () {
    afterEach(function () {
        document.body.innerHTML = "";
    });

    it("is initialized correctly", async function () {
        document.body.innerHTML = `<div class="pat-PATTERN_TEMPLATE" />`;
        const el = document.querySelector(".pat-PATTERN_TEMPLATE");

        const instance = new Pattern(el);
        await events.await_pattern_init(instance);

        expect(el.innerHTML.trim()).toBe(
            `<p>hello ${instance.options.exampleOption}, this is pattern ${instance.name} speaking.</p>`
        );
    });
    it("is initialized correctly with options from attribute", async function () {
        document.body.innerHTML = `<div
            class="pat-PATTERN_TEMPLATE"
            data-pat-PATTERN_TEMPLATE='{"example-option": "World"}'
            />`;
        const el = document.querySelector(".pat-PATTERN_TEMPLATE");

        const instance = new Pattern(el);
        await events.await_pattern_init(instance);

        expect(el.innerHTML.trim()).toBe(
            `<p>hello World, this is pattern ${instance.name} speaking.</p>`
        );
    });
});
