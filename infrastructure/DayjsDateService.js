const now = dayjs();
import { TimeRemaining } from "../domain/ValueObjects.js";

export class DayjsDateService {
  calculateDiff(targetDate, now) {
    const target = dayjs(targetDate);
    const current = dayjs(now);

    return new TimeRemaining({
      days: target.diff(current, "day"),
      hours: target.diff(current, "hour") % 24,
      minutes: target.diff(current, "minute") % 60,
      seconds: target.diff(current, "second") % 60,
    });
  }
}
