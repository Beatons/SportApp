export interface ITimer {
  seconds: number;
  secondsPassed: number;
  runTimer: boolean;
  hasStarted: boolean;
  hasFinished: boolean;
  displayTime: string;
 
}