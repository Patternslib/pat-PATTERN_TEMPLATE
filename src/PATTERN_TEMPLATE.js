import { BasePattern } from "@patternslib/patternslib/src/core/basepattern";
import Parser from "@patternslib/patternslib/src/core/parser";
import registry from "@patternslib/patternslib/src/core/registry";

export const parser = new Parser("PATTERN_TEMPLATE");
parser.addArgument("example-option", "Stranger");

class Pattern extends BasePattern {
    static name = "PATTERN_TEMPLATE";
    static trigger = ".pat-PATTERN_TEMPLATE";
    parser = parser;

    async init() {
        import("./PATTERN_TEMPLATE.scss");

        // Try to avoid jQuery, but here is how to import it.
        // eslint-disable-next-line no-unused-vars
        const $ = (await import("jquery")).default;

        // The options are automatically created, if parser is defined.
        const example_option = this.options.exampleOption;
        this.el.innerHTML = `
            <p>hello ${example_option}, this is pattern ${this.name} speaking.</p>
        `;
    }
}

// Register Pattern class in the global pattern registry and make it usable there.
registry.register(Pattern);

// Export Pattern as default export.
// You can import it as ``import AnyName from "./PATTERN_TEMPLATE";``
export default Pattern;
// Export BasePattern as named export.
// You can import it as ``import { Pattern } from "./PATTERN_TEMPLATE";``
export { Pattern };
