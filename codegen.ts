import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: [
    {
      "https://api.start.gg/gql/alpha": {
        headers: {
          Authorization: `Bearer ${process.env.STARTGG_PAT}`,
        },
      },
    },
  ],
  generates: {
    "src/graphql/generated.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        useIndexSignature: true,
        defaultScalarType: "unknown",
      },
    },
  },
};

export default config;
