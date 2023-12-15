export default function convertDisplayTimeToSeconds(displayTime: string): number {
  const [hours, minutes, seconds] = displayTime.split(':').map((time) => Number(time));

    return hours * 3600 + minutes * 60 + seconds;
}