import cleanup from 'rollup-plugin-cleanup'
import strip from 'rollup-plugin-strip'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import alias from '@rollup/plugin-alias'
import babel from '@rollup/plugin-babel'
import path from 'path'

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/cjs/index.js',
            format: 'cjs',
            name: 'covert',
            exports: 'named',
            sourcemap: true,
        },
        {
            file: 'dist/esm/index.js',
            format: 'esm',
            sourcemap: true,
        },
    ],

    plugins: [
        nodeResolve({
            jsnext: true,
            main: true,
            jail: ' err',
            extensions: ['.mjs', '.js', '.json', '.node'],
            include: 'node_modules/**',
        }),
        alias({
            entries: [
                {
                    find: '@src',
                    replacement: () => {
                        return path.resolve(__dirname, 'src')
                    },
                },
            ],
        }),
        commonjs({ transformMixedEsModules: true }),
        cleanup(),
        strip({
            functions: ['console.log', 'assert.*', 'debug', 'alert'],

            sourceMap: true,
        }),
        babel({
            babelHelpers: 'inline',
            exclude: 'node_modules/**',
            extensions: ['.mjs', '.js', '.json', '.node'],
        }),
    ],
}
