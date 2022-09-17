import Base from "@patternslib/patternslib/src/core/base";
import Parser from "@patternslib/patternslib/src/core/parser";

export const parser = new Parser("PATTERN_TEMPLATE");
parser.addArgument("example-option", [1, 2, 3]);

export default Base.extend({
    name: "PATTERN_TEMPLATE",
    trigger: ".pat-PATTERN_TEMPLATE",

    async init() {
        this.options = parser.parse(this.el, this.options);

        // Just an example!
        // eslint-disable-next-line no-unused-vars
        const $ = (await import("jquery")).default; // try to avoid jQuery.

        // Just an example!
        // eslint-disable-next-line no-unused-vars
        const example_option = this.options.exampleOption;

        // Just an example!
        // And completly useless.
        this.el.innerHTML = "<p>hello.</p>";
    },
});
