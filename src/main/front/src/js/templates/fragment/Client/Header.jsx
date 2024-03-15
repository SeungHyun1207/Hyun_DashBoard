/**
 *  @author 강승현
 *  작성일 : 2024-03-06
 *  내용 : Header
 */
function Header(){
    //https://burndogfather.com/269
    return(
        <header>
            <div className="header-wrap">
                <div className="logo-wrap">
                    <div className="Logo">
                        <h2>Logo</h2>
                    </div>
                </div>
                <div className="nav-wrap">
                    <ul>
                        <li>
                            <a>메뉴1</a>
                        </li>
                        <li>
                            <a>메뉴1</a>
                        </li>
                        <li>
                            <a>메뉴1</a>
                        </li>
                        <li>
                            <a>메뉴1</a>
                        </li>
                        <li>
                            <a>메뉴1</a>
                        </li>
                        <li>
                            <a>메뉴1</a>
                        </li>
                    </ul>
                </div>
                <div className="login-wrap">
                <SignUpAndLogin />
                </div>
            </div>
        </header>
    );

}

/**
 *  내용 : 회원가입 및 로그인
 */
function SignUpAndLogin (){
    return (
        <form className="signupandlogin">
            <div className="login">
                <a href="#">로그인</a>
            </div>
            |
            <div className="signup">
                <a href="#">회원가입</a>
            </div>
        </form>
    )
}

export default Header;