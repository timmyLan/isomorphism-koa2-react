module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "installedESLint": true,
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "linebreak-style": [
            "error",
            "unix"
        ],
        "semi": [
            "warn",
            "always"
        ],
        "no-unused-vars": 0,
        "no-var":2,
        'no-console':1
    }
};
