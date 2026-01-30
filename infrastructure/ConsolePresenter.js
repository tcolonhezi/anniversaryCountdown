export const ConsolePresenter = {
  output: (time) => {
    console.clear();
    console.log(
      `Faltam: ${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s`,
    );
  },
};
