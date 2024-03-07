/**
 *  작성자 	: 강승현
 *  작성일 	: 2024-03-07
 *  내용 	: 에러페이지 호출
 */
function GetClientErrorPage(jqXHRStatus){
    
    if(jqXHRStatus === 400){
        
    }
    // 권한
    if(jqXHRStatus === 401){

    }
    // 페이지 찾을수 없음
    if(jqXHRStatus === 404){

    }
    // 리소스 허용 불가
    if(jqXHRStatus === 405){

    }
    // 내부서버 오류
    if(jqXHRStatus === 500){

    }

}

export default GetClientErrorPage;