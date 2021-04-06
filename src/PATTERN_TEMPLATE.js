import "regenerator-runtime/runtime"; // needed for ``await`` support
import $ from "jquery"; // try to avoid
import Base from "patternslib/src/core/base";
import Parser from "patternslib/src/core/parser";

const parser = new Parser("PATTERN_TEMPLATE");
parser.addArgument("example-option", [1, 2, 3]);

export default Base.extend({
    name: "PATTERN_TEMPLATE",
    trigger: ".pat-PATTERN_TEMPLATE",

    async init() {
        this.options = parser.parse(this.el, this.options);
        let external_library = await import("EXTERNAL_LIBRARY");
        external_library = external_library.default;

        const example_option = this.options.exampleOption;
    },
});
