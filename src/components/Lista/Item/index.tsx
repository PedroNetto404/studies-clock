import style from './Item.module.scss'
import { Task } from '../../../types/Tarefa';

interface Props { 
    task: Task,
    onClick: () => void
}

export default function Item(props : Props){
    const { name, duration, selected } = props.task;
    return (
        <li 
            onClick={props.onClick}
            className={`${style.item} ${selected ? style.itemSelecionado : ''}`} >
            <h3>{name}</h3>
            <span>{duration}</span>
        </li>
    );
}