import Header from "../fragment/Client/Header";
import Sidebar from "../fragment/Client/Sidebar";
import {useState} from "react";
import Footer from "../fragment/Client/Footer";

/**
 * ============================================================
 * |                          Header                          |
 * |                          Banner                          |
 * |                          Content                         |
 * |                          Content                         |
 * |                          Content                         |
 * |                          Content                         |
 * |                          Content                         |
 * |                          Content                         |
 * |                          Content                         |
 * |                          Footer                          |
 * ============================================================
 */

/**
 *  Header : Logo |  Menu  |  Login & SignUp
 *                  Banner
 *  MyInfo
 */

/**
 *  작성자 	: 강승현
 *  작성일 	: 2024-03-06
 *  내용 	: 사용자 - 메인페이지
 */
function HyunDashBoard(){

    return(
        <main>
            {/* Header */}
            <Header />
            {/* Sidebar */}
            {/*<Sidebar />*/}
            {/* Content */}
            <MainContent />
            {/* Footer */}
            <Footer/>
        </main>
    )

}

function TodoList(){
    // TodoList
    let [todoList, setTodoList] = useState([]);
    let postFunction = (event) =>{
        event.preventDefault(); // 새로고침 방지하기 위한 것

        let todo = event.target.todo.value;
        setTodoList([...todoList, todo]);

        event.target.todo.value='';
    }

    return (
        <section>
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
        <article>
            <section className="top-banner-wrap">
                <div>
                    <h2>배너</h2>
                </div>
            </section>
            <section className="">
                <div className="image-wrap">
                    <h2>이미지</h2>
                </div>
                <div className="text-wrap">
                    <h2>텍스트</h2>
                </div>
            </section>
            <section className="">
                <div>
                    <h2>배너</h2>
                </div>
            </section>
            <section className="">
                <div>
                    <h2>배너</h2>
                </div>
            </section>
        </article>
    )

}

export default HyunDashBoard;