import "regenerator-runtime/runtime"; // needed for ``await`` support
import Base from "patternslib/src/core/base";
import Parser from "patternslib/src/core/parser";
// Just an example!
// eslint-disable-next-line no-unused-vars
import $ from "jquery"; // try to avoid.

export const parser = new Parser("PATTERN_TEMPLATE");
parser.addArgument("example-option", [1, 2, 3]);

export default Base.extend({
    name: "PATTERN_TEMPLATE",
    trigger: ".pat-PATTERN_TEMPLATE",

    async init() {
        this.options = parser.parse(this.el, this.options);

        // Just an example!
        // eslint-disable-next-line no-unused-vars
        const external_library = (await import("EXTERNAL_LIBRARY")).default;

        // Just an example!
        // eslint-disable-next-line no-unused-vars
        const example_option = this.options.exampleOption;
    },
});
