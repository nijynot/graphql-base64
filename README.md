# graphql-base64
> Turn IDs into opaque identifiers for GraphQL.

Encode and decode IDs in Base64. Partial fork of `graphql-relay-js` with slight changes. It does not rely node's internal `Buffer` when encoding/decoding in Base64.

## Install

```
$ yarn add graphql-base64
```

## Usage

Example:
```js
import { globalIdField } from 'graphql-base64';

export const userType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: globalIdField(),
  }),
});
```

## API

### globalIdField()

Returns configuration for the id field of an object.

### toGlobalId(_type_, _id_)

Encode a type name and ID in Base64.

### fromGlobalId(_string_)

Decode a global ID from Base64 and return it's type name and ID.

## Related

- [graphql-relay-js](https://github.com/graphql/graphql-relay-js)
- [Object Identification](https://facebook.github.io/relay/docs/en/graphql-object-identification.html)
