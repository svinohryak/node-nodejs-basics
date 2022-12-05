const parseEnv = () => {
  const envFiles = process.env;
  const reg = /^RSS_/;
  const rssArr = Object.entries(envFiles).reduce((cal, [key, value]) => {
    if (reg.test(key)) {
      cal.push(`${key}=${value}`);
    }
    return cal;
  }, []);
  console.log(rssArr.join("; "));
};

parseEnv();
