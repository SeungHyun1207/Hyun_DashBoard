import Header from "../fragment/Client/Header";
import {useState} from "react";

/**
 *  작성자 	: 강승현
 *  작성일 	: 2024-03-06
 *  내용 	: 사용자 - 메인페이지
 */
function Home(){

    return(
        <div className="clientHomeWrap">
            {/* Header */}
            <Header />
            {/* Sidebar */}
            {/* Content */}
            <MainContent />
        </div>
    )

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
export default Home;