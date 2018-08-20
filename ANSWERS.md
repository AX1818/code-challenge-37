# Test Answers

## Assumptions

### 'Input' collection can be either a `array` or a `set` collection

My implementations suport both `array` and `set` type. Specifically, `for ... of` loop is used instead of `for (...)` loop. A `babel` plugin can be used to transpile the api module so that it can be used in the envs where `for ... of` is not supported yet.

### No validation against arguments is required

My implementations assume there is a clear `contract` between the calling methods and this api module, which defines the following conventions:

- `Input` arguments must be valid collections. They can not be `null` or `undefined`, but can be empty arrays or sets.
- If there is any invalid values, such as `null` or `undefined` inside `input` collection, the `fn` fuction should handle them properly. For example, for `fanOut`, return `null` for `null` input value in `fanOut`.
- There is no embeded colleciton in the `input` collection.

The current implementations can be enhaned to validate the arguments if the contract is not correct.

## Changes

- main.js
- test-data.js :   add `set` test data
- spec/*.test.js :  add more tests for `set` collections
