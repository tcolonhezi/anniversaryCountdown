export class CountdownUseCase {
  constructor(dateService, presenter) {
    this.dateService = dateService;
    this.presenter = presenter;
  }

  execute(anniversary) {
    const now = new Date();
    const nextDate = anniversary.getNextOccurrence(now);
    const timeLeft = this.dateService.calculateDiff(nextDate, now);

    this.presenter.output(timeLeft);
  }
}
