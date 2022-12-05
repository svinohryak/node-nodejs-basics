import { argv } from "node:process";

const parseArgs = () => {
  const argReg = /^--/;
  const inputArguments = argv.reduce((cal, arg, index, arr) => {
    if (argReg.test(arg)) {
      cal.push(`${arg.replace(argReg, "")} is ${arr[index + 1]}`);
    }
    return cal;
  }, []);
  console.log(inputArguments.join(", "));
};

parseArgs();
