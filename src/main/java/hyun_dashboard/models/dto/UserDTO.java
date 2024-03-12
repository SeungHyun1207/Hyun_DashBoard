package hyun_dashboard.models.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class UserDTO {

    private String userSeq;                 // 유저 시퀀스
    private String userId;                  // 유저 아이디
    private String userName;                // 유저 이름
    private String userPassWord;            // 유저 비밀번호
    private String userEmail;               // 유저 이메일
    private LocalDateTime userBirthDay;     // 유저 생년월일
    private String userAddress;             // 유저 주소


}
