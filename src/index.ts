import {
  SFCCompiler,
  StyleOptions,
  TemplateOptions,
  ScriptOptions
} from './compiler.ts'

export const createCompiler = ({
  script,
  style,
  template
}: {
  script: ScriptOptions
  style: StyleOptions
  template: TemplateOptions
}) => new SFCCompiler(script, style, template)

export const createDefaultCompiler = (options: {
  script?: ScriptOptions
  style?: StyleOptions
  template?: TemplateOptions
} = {}) =>
  createCompiler({
    script: { ...options.script },
    style: { trim: true, ...options.style },
    template: {
      compiler: require('vue-template-compiler'),
      compilerOptions: {},
      isProduction: process.env.NODE_ENV === 'production',
      optimizeSSR: process.env.VUE_ENV === 'server',
      ...options.template
    }
  })

export * from './compiler.ts'
export * from './assembler.ts'
