type VerifyingMobileProps = {
  onSignupRequired: () => void;
  onLoginSuccess: () => void;
};

const VerifyingMobile: React.FC<VerifyingMobileProps> = ({
  onSignupRequired,
  onLoginSuccess,
}) => {
  return (
    <>
      <p>인증번호를 입력해주세요.</p>
      <input type="number" />
      <button type="button">인증번호 재전송</button>
      <button type="button" onClick={onSignupRequired}>
        인증하기
      </button>
    </>
  );
};

export default VerifyingMobile;
