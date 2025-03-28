import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: './schema.graphql',
  documents: './src/**/*.graphql',
  generates: {
    './src/app/generated/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-apollo-angular'],
    },
  },
}
export default config
