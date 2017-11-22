import { Base64 } from 'js-base64';
import {
  GraphQLNonNull,
  GraphQLID,
} from 'graphql';

export function toGlobalId(type, id) {
  return Base64.encode([type, id].join(':'));
}

export function fromGlobalId(globalId) {
  const unbasedGlobalId = Base64.decode(globalId);
  const delimiterPos = unbasedGlobalId.indexOf(':');
  return {
    type: unbasedGlobalId.substring(0, delimiterPos),
    id: unbasedGlobalId.substring(delimiterPos + 1),
  };
}

export function globalIdField(typeName) {
  return {
    name: 'id',
    description: 'The ID of an object',
    type: new GraphQLNonNull(GraphQLID),
    resolve: (obj, args, context, info) => {
      return toGlobalId(
        typeName || info.parentType.name,
        obj.id
      );
    },
  };
}
