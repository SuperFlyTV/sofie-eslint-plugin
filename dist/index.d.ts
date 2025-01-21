declare const _default: {
    rules: {
        'require-typed-object-values-and-entries': import("@typescript-eslint/utils/dist/ts-eslint").RuleModule<"useGenericValues" | "useGenericEntries", [], unknown, import("@typescript-eslint/utils/dist/ts-eslint").RuleListener>;
    };
    configs: {
        all: {
            plugins: string[];
            rules: {
                '@sofie-automation/require-typed-object-values-and-entries': string;
            };
        };
    };
};
export = _default;
