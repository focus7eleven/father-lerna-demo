import { dark } from 'umi-ui-theme';

const version = process.env.VERSION;

export default {
  esm: 'rollup',
  cjs: 'rollup',
  disableTypeCheck: true,
  extraBabelPlugins: [['babel-plugin-styled-components']],
  lessInRollupMode: {
    modifyVars: version === 'UMI' ? { ...dark } : {},
  },
  cssModules: {
    generateScopedName: (name, filename, css) => {
      const i = css.indexOf('.' + name);
      const line = css.substr(0, i).split(/[\r\n]/).length;
      const folderPath = filename
        .slice(filename.lastIndexOf('/src/') + 12, -5)
        .split('/')
        .join('_');
      return folderPath + '_' + line + '_' + name;
    },
  },
};
