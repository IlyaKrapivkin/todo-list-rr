import { useSelector } from "react-redux";
import Item from '../Item';

function List() {
  const tasks = useSelector(state => state.tasks);

  // console.log(tasks);

  return (
    <ul className="list-group mt-5">
      {
        tasks.length ? tasks.map((el, i) => (
          <Item key={el.id} id={el.id} index={i + 1} text={el.text} status={el.status}/>
        )) :
        <li>задач нет</li>
      }
    </ul>
  )
}

export default List;
