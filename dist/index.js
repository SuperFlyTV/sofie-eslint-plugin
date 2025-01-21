"use strict";
const tslib_1 = require("tslib");
const require_typed_object_values_and_entries_1 = tslib_1.__importDefault(require("./rules/require-typed-object-values-and-entries"));
module.exports = {
    rules: {
        'require-typed-object-values-and-entries': require_typed_object_values_and_entries_1.default,
    },
    configs: {
        all: {
            rules: {
                '@sofie-automation/require-typed-object-values-and-entries': 'error',
            },
        },
    },
};
