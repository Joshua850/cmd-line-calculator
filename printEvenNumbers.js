const parameterFromCommandLine = parseInt(process.argv[2]);

const printEvenNumbers = (n) => {
    for (i = 0; i <= n; i++) {
      if (i % 2 == 0) {
        console.log(i);
      }
    }
  };

printEvenNumbers(parameterFromCommandLine)