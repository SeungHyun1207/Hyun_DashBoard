package hyun_dashboard.apps.client;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *  작성자 	: 강승현
 *  작성일 	: 2024-03-12
 *  내용 	: 사용자 메인 대시보드
 */
@RestController
@RequestMapping("/")
public class HomeCtl {

    private final Logger log = LoggerFactory.getLogger(this.getClass());

    @GetMapping("")
    public ResponseEntity<?> ClientCtl(){


        return null;
    }
}
