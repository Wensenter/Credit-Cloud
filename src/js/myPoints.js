class Calender {
  DAY_LABELS = ['一', '二', '三', '四', '五', '六', '日'];

  constructor(days) {
    this.dayLabels = this.DAY_LABELS.slice();
    this.today = new Date();
    this.currDateCursor = days[0].date;
    this.days = days;
  }

  currentMonth() {
    return this.currDateCursor.getMonth();
  }

  currentYear() {
    return this.currDateCursor.getFullYear();
  }

  currentDate() {
    let currentMonth = this.currentMonth() + 1;
    currentMonth = currentMonth < 9 ? '0' + currentMonth : currentMonth;
    return `${this.currentYear()}-${currentMonth}`;
  }

  daysArray() {
    const date = this.currDateCursor;
    const startOfMonth = dateFns.startOfMonth(date);
    const endOfMonth = dateFns.endOfMonth(date);

    // 生成 日子的 数组
    // const days = dateFns.eachDay(startOfMonth, endOfMonth).map(day => ({
    //   date: day,
    //   isToday: dateFns.isToday(day)
    // }));
    const days = this.days;

    // gen the days from last month
    let previousMonthCursor = dateFns.lastDayOfMonth(
      dateFns.addMonths(date, -1)
    );
    // 生成周几
    const begIndex = dateFns.getDay(days[0].date);
    for (let i = begIndex; i > 1; i--) {
      days.unshift({
        date: previousMonthCursor,
        isOtherMonth: true
      });
      previousMonthCursor = dateFns.addDays(previousMonthCursor, -1);
    }

    // gen days for next month
    const daysNeededAtEnd = days.length % 7 > 0 ? 7 - (days.length % 7) : 0;
    let nextMonthCursor = dateFns.addMonths(date, 1);
    nextMonthCursor = dateFns.setDate(nextMonthCursor, 1);
    for (let x = 1; x <= daysNeededAtEnd; x++) {
      days.push({
        date: nextMonthCursor,
        isOtherMonth: true
      });
      nextMonthCursor = dateFns.addDays(nextMonthCursor, 1);
    }
    return days;
  }

  genTemplate(day) {
    // className => hassign:已签到 lottery:抽奖  lotteryafter:以后抽奖 signtoday:今天已经签到

    let item = '<div class="item"></div>';
    let date = `<div class="date" data-date="${
      day.date
    }">${day.date.getDate()}</div>`;

    // 是否今天
    if (day.isToday) {
      date = `<div class="date today" data-date="${day.date}">今日</div>`;
      item = '<div class="item sign-today" onclick="handleSign()"></div>';
    }
    // 是否中奖
    if (day.isLottery) {
      item = '<div class="item lottery" onclick="handleLottery()"></div>';
    }
    // 是否即将抽奖
    if (day.lotteryafter) {
      item = '<div class="item lottery-after"></div>';
    }
    // 是否签到
    if (day.hasSign) {
      item = '<div class="item has-sign"></div>';
    }
    // 时候今天签到后，可抽奖
    if (day.lotteryafter && day.isToday) {
      item =
        '<div class="item sign-today" onclick="handleLotteryToday()"></div>';
    }

    if (day.isOtherMonth) {
      return `<li class="calender-item" style="visibility: hidden"></li>`;
    }
    return `<li class="calender-item">${item}${date}</li>`;
  }

  renderNewMonth(newDays) {
    this.today = new Date();
    this.currDateCursor = newDays[0].date;
    this.days = newDays;
    this.render();
  }

  render() {
    const calender = document.querySelector('#calender');

    calender.innerHTML = `
          <div class="calender-content">
            <div class="calender-title">
              ${this.DAY_LABELS.map(i => `<span>${i}</span>`).join('')}
            </div>
            <ul class="calender-items">
              ${this.daysArray()
                .map(day => {
                  return this.genTemplate(day);
                })
                .join('')}
            </ul>
            <div class="calender-date">
              <i class="icon-prev" onclick="handlePrev('${this.currentDate()}')"></i>
                ${this.currentDate()}
              <i class="icon-next" onclick="handleNext('${this.currentDate()}')"></i>
            </div>
          </div>
          `;
    4e5;
  }
}
