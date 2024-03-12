package hyun_dashboard.apps.admin;

import jakarta.servlet.http.HttpSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *  작성자 	: 강승현
 *  작성일 	: 2024-03-12
 *  내용 	: 관리자 메인 대시보드
 */
@RestController
@RequestMapping("/admin")
public class HomeCtl {

    private final Logger log = LoggerFactory.getLogger(this.getClass());

    @GetMapping("")
    public ResponseEntity<?> ClientCtl(){

        HttpSession session;
        //session.setAttribute("",);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
