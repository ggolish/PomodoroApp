interface Pomodoro {
  amount: number,
  length: number,
  date: Date
}

export interface Task {
  _id: string
  name: string,
  description: string,
  pomodoros: Pomodoro[],
  active: boolean,
  total: number,
  displayDescription: boolean
}
