import { useEffect } from 'react';

type LoginSuccessProps = {
  goToService: () => void;
};

const LoginSuccess = ({ goToService }: LoginSuccessProps) => {
  useEffect(() => {
    setTimeout(goToService, 1000);
  }, []);
  return (
    <>
      <p>
        {'${아이디}'}님,
        <br />
        다시 돌아오신 걸 환영합니다.
      </p>
    </>
  );
};

export default LoginSuccess;
