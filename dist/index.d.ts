declare const _default: {
    rules: {
        'require-typed-object-values-and-entries': import("@typescript-eslint/utils/ts-eslint").RuleModule<"useGenericValues" | "useGenericEntries", [], unknown, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
    };
    configs: {
        all: {
            rules: {
                '@sofie-automation/require-typed-object-values-and-entries': "error";
            };
        };
    };
};
export = _default;
