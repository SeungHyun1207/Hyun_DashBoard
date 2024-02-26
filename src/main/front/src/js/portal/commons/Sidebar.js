/**
 *  @author 강승현
 */
function Sidebar(){

    return(
      <div className="sidebar">
          <div className="sidebar-container">
              <div className="menu-container">
                  <div className="menu-1">
                      <ul>
                          <li>메뉴1</li>
                          <ul className="menu-2">
                            <li>메뉴2</li>
                          </ul>
                      </ul>
                  </div>
                  <div className="menu-1">
                      <ul>
                          <li>메뉴1</li>
                      </ul>
                  </div>
                  <div className="menu-1">
                      <ul>
                          <li>메뉴1</li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
    );

}

export default Sidebar;