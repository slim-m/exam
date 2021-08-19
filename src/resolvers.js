import { livre } from "./models/livre";

export const resolvers = {
  Query: {
    hello: () => "hi",
    livres: () => livre.find()
  },
  Mutation: {
    createlivre: async (_, { titre }) => {
      const lafindumonde = new livre({ titre });
      await lafindumonde.save();
      return lafindumonde;
    }
  }
};
