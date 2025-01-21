"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
exports.default = utils_1.ESLintUtils.RuleCreator.withoutDocs({
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Require Object.values() and Object.entries() calls to have generic type specified',
            // recommended: 'recommended',
            // extendsBaseRule: true,
        },
        messages: {
            useGenericValues: 'Object.values() calls must have type specified',
            useGenericEntries: 'Object.entries() calls must have type specified',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        function check(node) {
            if (node.arguments.length === 1 &&
                node.callee.type === utils_1.AST_NODE_TYPES.MemberExpression &&
                node.callee.object.type === utils_1.AST_NODE_TYPES.Identifier &&
                node.callee.object.name === 'Object' &&
                node.callee.property.type === utils_1.AST_NODE_TYPES.Identifier &&
                !node.typeArguments) {
                if (node.callee.property.name === 'values') {
                    context.report({
                        node,
                        messageId: 'useGenericValues',
                    });
                }
                else if (node.callee.property.name === 'entries') {
                    context.report({
                        node,
                        messageId: 'useGenericEntries',
                    });
                }
            }
        }
        return {
            CallExpression: check,
        };
    },
});
