export class Anniversary {
  constructor(day, month) {
    this.day = day;
    this.month = month;
  }

  // Lógica de negócio: descobrir a próxima data baseada no "agora"
  getNextOccurrence(relativeTo) {
    const year = relativeTo.getFullYear();
    const date = new Date(year, this.month - 1, this.day);

    if (date < relativeTo) {
      date.setFullYear(year + 1);
    }
    return date;
  }
}

export class TimeRemaining {
  constructor({ days, hours, minutes, seconds }) {
    this.days = days;
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }
}
