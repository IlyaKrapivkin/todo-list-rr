import { useDispatch } from 'react-redux';
import style from './style.module.css';
import * as AC from '../../redux/actionCreators/tasks';

function Item({id, index, text, status}) {

  const dispatch = useDispatch();

  const changeStatus = () => {
    dispatch(AC.changeStatus(id))
  }

  const deleteTask = () => {
    dispatch(AC.deleteTask(id))
  }

  return (
    <li className="list-group-item d-flex justify-content-between">
      <div className={`${status ? style.done : ""} d-flex align-items-center`}>
        {`${index}. ${text}`}
      </div>
      <div className="d-flex">
        <button onClick={changeStatus} type="button" className="btn btn-primary mx-1">Status</button>
        <button onClick={deleteTask} type="button" className="btn btn-danger mx-1">Delete</button>
      </div>
    </li>
  )
}

export default Item;
