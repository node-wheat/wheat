const chalk = require('chalk')  // eslint-disable-line
const msgPath = process.env.GIT_PARAMS;
const msg = require('fs')
  .readFileSync(msgPath, 'utf-8')
  .trim();

const commitRE = /^(v\d+\.\d+\.\d+(-(alpha|beta|rc.\d+))?$)|((revert: )?(feat|fix|docs|style|refactor|perf|test|ci|chore)(\(.+\))?: .{1,50})/;

if (!commitRE.test(msg) && !msg.includes('Merge branch')) {
  // Proper commit message format is required for automated changelog generation
  console.error(
    `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red('提交信息不合法.')}\n\n${
      chalk.red('  自动化的changelog需要良好的commit信息格式. Examples:\n\n')
    }    ${chalk.green('feat(compiler): add \'comments\' option')}\n`
      + `    ${chalk.green(
        'fix(v-model): handle events on blur (close #28)',
      )}\n\n${
        chalk.red('  更多信息请看 docs/COMMIT_CONVENTION.md.\n')
      }${chalk.red(
        `  您也可以执行 ${chalk.cyan('npm run commit')} 交互式生成格式化信息.\n`,
      )}`,
  );
  process.exit(1);
}
