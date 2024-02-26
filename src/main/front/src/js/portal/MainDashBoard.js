import Header from "./commons/Header";
import Sidebar from "./commons/Sidebar";
import {useState} from "react";

/**
 *  @author 강승현
 */
function MainDashBoard(){

    return (
      <div className="mainWrap">
          {/*사이드바*/}
          <Sidebar/>
          {/*Header*/}
          <Header />
          <MainContent/>
      </div>
    );

}

function MainContent(){
    // TodoList
    let [todoList, setTodoList] = useState([]);
    let postFunction = (event) =>{
        event.preventDefault(); // 새로고침 방지하기 위한 것

        let todo = event.target.todo.value;
        setTodoList([...todoList, todo]);

        event.target.todo.value='';
    }

    return (
        <section className="main-content">
            <h2>TodoList</h2>
            <div className='todoListArea'>
                <ul>
                    {todoList.map((todo, index) => (
                        <li key={index}>{todo}</li>
                    ))}
                </ul>
            </div>
            <form onSubmit={postFunction}>
                <input type='text' name='todo' placeholder='오늘의 할일'/>
            </form>
        </section>
    )

}

export default MainDashBoard;