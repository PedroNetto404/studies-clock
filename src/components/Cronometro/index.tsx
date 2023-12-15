import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss";
import convertDisplayTimeToSeconds from "../../utils/convertDisplayTimeToSeconds";
import { useEffect, useState, useRef } from "react";

interface Props {
  taskDuration: string | undefined;
}

export default function Cronometro({ taskDuration }: Props) {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout>();

  console.log(seconds)

  useEffect(() => {
    const timeInSeconds = convertDisplayTimeToSeconds(
      taskDuration ?? "00:00:00"
    );
    setSeconds(timeInSeconds);
  }, [taskDuration]);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds > 0) {
            return prevSeconds - 1;
          } else {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            return 0;
          }
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  const handleButtonClick = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio taskDurationInSecs={seconds} />
      </div>
      <Botao onClick={handleButtonClick}>
        {isRunning ? "Pausar" : "Iniciar"}
      </Botao>
    </div>
  );
}
