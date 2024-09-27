import lodash from "lodash";
import chalk from "chalk";

const array = [1, 1, 2, 6, 5, 2, 12, 5, 8, 6, 2, 1, 3];
const uniqueNums = lodash.uniq(array);
console.log(chalk.green(uniqueNums));

console.log(chalk.blue("Hello world!"));
