import style from './Relogio.module.scss';

interface Props {
    taskDurationInSecs: number
}

export default function Relogio({ taskDurationInSecs }: Props) {
    const hourDigits = String(Math.floor(taskDurationInSecs / 3600)).padStart(2, '0').split('');
    const minuteDigits =  String(Math.floor(taskDurationInSecs % 3600 / 60)).padStart(2, '0').split('');

    return <>
        <span className={style.relogioNumero}>{hourDigits[0]}</span>
        <span className={style.relogioNumero}>{hourDigits[1]}</span>
        <span className={style.relogioDivisao}>:</span>
        <span className={style.relogioNumero}>{minuteDigits[0]}</span>
        <span className={style.relogioNumero}>{minuteDigits[1]}</span>
    </>
}