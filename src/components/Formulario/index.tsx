import React, { useState } from 'react';
import Botao from '../Botao';
import style from './Formulario.module.scss';
import { Task } from '../../types/Tarefa';
import { v4 as newUUID } from 'uuid';

export interface FormularioProps{
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

export default function Formulario({setTasks} : FormularioProps){
    const [ taskTime, setTaskTime ] = useState('00:00');
    const [ taskName, setTaskName ] = useState('');

    const saveTask = function (e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        const newTask : Task = {
            id: newUUID(),
            name: taskName,
            duration: taskTime,
            completed: false,
            selected: false
        }

        setTasks(tasks => [...tasks, newTask]);
        setTaskName('');
        setTaskTime('00:00');
    }

    return <>
        <form className={style.novaTarefa} onSubmit={saveTask}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    placeholder="O que você quer estudar?"
                    value={taskName}
                    onChange={e => setTaskName(e.target.value)}
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">Tempo</label>
                <input
                    type="time"
                    step="1"
                    name="tempo"
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    value={taskTime}
                    onChange={(e) => setTaskTime(e.target.value)}
                    required
                />
            </div>
            <Botao type="submit">Adicionar</Botao>
        </form>
    </>
}