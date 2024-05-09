module.exports = {
    plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
    importOrder: [
        "<THIRD_PARTY_MODULES>",
        "^[@/]",
        "^~/atoms/(.*)$",
        "^~/molecures/(.*)$",
        "^~/organics/(.*)$",
        "^~/templates/(.*)$",
        "^~/pages/(.*)$",
        "^~/(.*)$",
        "^[./]",
        "^[../]",
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    semi: true,
    singleQuote: false,
    tabWidth: 2,
    printWidth: 120,
    trailingComma: "es5",
};