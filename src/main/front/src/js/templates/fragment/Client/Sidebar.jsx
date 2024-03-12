/**
 *  @author 강승현
 *  작성일 : 2024-03-12
 */
function Sidebar(){

    return(
        <aside className="sidebar-wrap">
            <div className="sidebar_top">
                <div className="logo_wrap">
                    <h2>로고</h2>
                </div>
            </div>
            <div className="sidebar_links">
                <ul>
                    <li>
                        <a>
                            <span>Profile</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span>PortFolio</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span>Study</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="sidebar_bottom">
                <ul>
                   <li>
                       <a>
                           <span>Setting</span>
                       </a>
                   </li>
                </ul>
            </div>
        </aside>
    );

}

export default Sidebar;