import {useState} from "react";
import Sidebar from "./commons/Sidebar";
import Header from "./commons/Header";

/**
 *  작성자 	: 강승현
 *  작성일 	: 2024-03-04
 *  파라미터	: Long ntcNo
 *  리턴값 	: 공지사항 상세 정보
 *  내용 	: 공지사항의 No를 전달 하여 해당 공지사항의 상세 정보를 가져 온다.
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