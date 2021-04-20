# pat-PATTERN_TEMPLATE

## Code style

The release process based on release-it includes automatic changelog generation via conventional-commit, commitlint and a pre-commit hook by husky.
Please check the [code style guide](https://github.com/Patternslib/Patterns/blob/master/docs/developer/styleguide.md#commits-messages) for the commit specification!


## Release

The created package has a Patternslib enabled release workflow.
By default the package lives in the ``@patternslib`` scope on npm and downloadable bundles are published to the [Patterns-releases](https://github.com/Patternslib/Patterns-releases/tree/main/releases) repository on Github.

You might want to change these paramters to fit your release process and accessible npm scopes and Github repos.
If you believe you need access to the npm ``@patternslib`` scope create an [Issue on Patterns-releases](https://github.com/Patternslib/Patterns-releases/issues).


## Documentation

This is simple pattern project bootstrap template.

Usage:

    ./create.sh PROJECTNAME

This will create a directory within this directory with the name `pat-PROJECTNAME`.
You can use it for developing a new pattern.

### Options reference

| Property       | Default Value | Values | Type              | Description                   |
| -------------- | ------------- | ------ | ----------------- | ----------------------------- |
| example_option | [1, 2, 3]     |        | Array of integers | Example configuration option. |
