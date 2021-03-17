# [BACK](https://github.com/bonnysid/lessons/tree/main)
# WEBPACK LESSONS

## NPM:
- npm i -D webpack webpack-cli (webpack - main package, webpack-cli - terminal commands for webpack)
- webpack (pack the project)
- npm i -D plugin

## Fields:
- context (Type: String, Value: folder path)
- mode (Type: String, Values: production/development)
- entry (Type: String/Object,string - entry file path, object - object with the name of file and file path (main: './src/main.js'))
- output (Type: Object, with fields: path(file path),filename(out a filename) ([name].bundle.js/bundle.js/[name].[contenthash].js))
- plugins (Type: Array)
- module (Type: Object, Values: rules[{
  test: regExp
  use: [loader-1, loader-2]
  }])

## Plugins (new Plugin()):
- html-webpack-plugin (from require, title, template(main index.html))
- clean-webpack-plugin (delete the earlier outputs)


## Loaders:

- css-loader
- plugin-loader