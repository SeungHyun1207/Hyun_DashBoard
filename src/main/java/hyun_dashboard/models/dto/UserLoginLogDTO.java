package hyun_dashboard.models.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class UserLoginLogDTO {

    private Long seqId;                         // 시퀀스 아이디
    private String userId;                      // 유저 아이디
    private String userName;                    // 유저 이름
    private boolean userLoginSuccess;           // 로그인 성공여부
    private String userLoginTryId;              // 로그인을 시도한 아이디
    private String userLoginIp;                 // 로그인한 유저 IP
    private String userLoginAgent;              // 
    private String userLoginUrl;                //
    private LocalDateTime userAccessDate;       // 유저 로그인 접속 날짜

}
