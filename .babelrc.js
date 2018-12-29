module.exports = {
  "presets": [
    [
      "env",
      {
        "targets": { "browsers": [ "last 2 versions", "> 5%" ] },
        "modules": false
      }
    ]
  ],
  "plugins": [ "transform-object-rest-spread", "external-helpers", "array-includes" ]
}