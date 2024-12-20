import { useEffect } from 'react';

type SignupSuccessProps = {
  goToService: () => void;
};

const SignupSuccess = ({ goToService }: SignupSuccessProps) => {
  useEffect(() => {
    setTimeout(goToService, 1000);
  }, []);
  return (
    <>
      <p>
        {'${아이디}'}님,
        <br />
        환영합니다.
      </p>
    </>
  );
};

export default SignupSuccess;
