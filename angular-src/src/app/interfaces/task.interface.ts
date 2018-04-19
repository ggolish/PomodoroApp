interface Pomodoro {
  amount: number,
  length: number,
  date: Date
}

export interface Task {
  name: String,
  description: String,
  pomodoros: Pomodoro[],
  active: boolean,
  total: number
}
