/**
 * 📦 전역 로딩 컴포넌트
 * - 화면 전체를 덮는 Backdrop과 이중 원형 로딩 스피너를 사용
 * - 두 개의 CircularProgress를 겹쳐서 하나는 배경용(회색), 하나는 회전 애니메이션용(파란색)으로 구성
 */

import {
  Backdrop,
  CircularProgress,
  circularProgressClasses,
  styled,
} from '@mui/material';

// ✅ 로딩 컴포넌트 본체
const GlobalLoading = () => {
  return (
    <Backdrop open={true}>
      {/* 아래쪽 회색 배경 원 */}
      <OuterSpinner
        variant="determinate" // 고정된 원 (회전 안 함)
        size={82} // 크기
        thickness={2.5} // 원의 두께
        value={100} // 100%로 채운 상태
      />
      {/* 위쪽 회전하는 파란 원 */}
      <InnerSpinner
        variant="indeterminate" // 계속 회전하는 상태
        size={82}
        thickness={2.5}
      />
    </Backdrop>
  );
};

export default GlobalLoading;

// 🎨 회색 바깥쪽 원 (배경 역할)
const OuterSpinner = styled(CircularProgress)({
  color: `rgba(255,255,255,0.1)`, // 희미한 회색 (불투명도 0.1)
});

// 🎨 파란색 안쪽 원 (회전 애니메이션 역할)
const InnerSpinner = styled(CircularProgress)({
  color: `#5A64FF`, // 파란색
  position: 'absolute', // 부모인 Backdrop 기준으로 절대 위치
  left: '0',
  top: '0',

  // 원의 끝을 둥글게 (더 부드러운 애니메이션 효과)
  [`& .${circularProgressClasses.circle}`]: {
    strokeLinecap: 'round',
  },
});
