/**
 *  @작성자 : SH.K
 *  @작성일 : 2024-02-28
 */

/**
 *  @작성자 : SH.K
 *  @작성일 : 2024-02-28
 */
function sidebarMenuAction(){
    // 세션에 depth2의 menuId 저장 > 저장에 대해선 $(document).ready에서 핸들링
    // 이동하기 전 클릭 시  set
    // if ($("#depth2List-" + strMenuId).attr("name") != null) {
    //     sessionStorage.setItem("clientMenuId", menuId);
    // }
}

$(document).ready(function(){

    /**
     *  @작성자 : SH.K
     *  @작성일 : 2024-02-28
     */
    $(".menu-1").on('click',function(){
        sidebarMenuAction();    //sidebarMenu를 클릭했을 때 실행
    })

    // // sidebar_drop관련
    // $(".depth-1").on("click", function () {
    //     let targetElClass = $(this).find('div').attr('class');
    //     if (targetElClass == 'dropdown') {
    //         $(this).find('div').removeClass('dropdown');
    //         $(this).find('div').addClass('dropup');
    //     } else {
    //         $(this).find('div').removeClass('dropup');
    //         $(this).find('div').addClass('dropdown');
    //     }
    // });
    // // depth2List 상태저장 관련
    // if (sessionStorage.getItem("clientMenuId") != '' || sessionStorage.getItem("clientMenuId") != null) {
    //     $("#depth2List-" + sessionStorage.getItem("clientMenuId")).parent().parent().parent().addClass("on");
    // }
    // if ($(".depth1").hasClass("on")) {  // 만약 depth1이 on클래스를 가지고 있다면
    //     $("#depth2List-" + sessionStorage.getItem("clientMenuId")).parent().parent().css("display", "block"); // depth2List의 display > block처리
    //     $("#depth2List-" + sessionStorage.getItem("clientMenuId")).css("color", "#fff");
    //     $("#depth2List-" + sessionStorage.getItem("clientMenuId")).css("font-weight", "bold");
    // }
    // // 다른 메뉴 클릭 시 on Class 삭제
    // $(".depth-1").click(function () {
    //     $("#depth2List-" + sessionStorage.getItem("clientMenuId")).parent().parent().parent().removeClass("on");
    // })
});