'use client';
import { useState } from 'react';

import { InputId } from '@/widgets/input-id';
import { InputMobile } from '@/widgets/input-mobile';
import { Intro } from '@/widgets/intro';
import { LoginSuccess } from '@/widgets/login-success';
import { SignupSuccess } from '@/widgets/signup-success';
import { VerifyingMobile } from '@/widgets/verifying-mobile';

import { LoginFunnelStep } from './login-page.type';

const LoginPage: React.FC = () => {
  const [step, setStep] = useState<LoginFunnelStep>('intro');
  return (
    <>
      {step === 'intro' && (
        <Intro onClickNext={() => setStep('input-mobile')} />
      )}
      {step === 'input-mobile' && (
        <InputMobile onSubmit={() => setStep('verifying-mobile')} />
      )}
      {step === 'verifying-mobile' && (
        <VerifyingMobile
          onLoginSuccess={() => setStep('login-success')}
          onSignupRequired={() => setStep('input-id')}
        />
      )}
      {step === 'input-id' && (
        <InputId onSubmit={() => setStep('signup-success')} />
      )}
      {step === 'login-success' && (
        <LoginSuccess goToService={() => alert('로그인 성공')} />
      )}
      {step === 'signup-success' && (
        <SignupSuccess goToService={() => alert('회원가입 성공')} />
      )}
    </>
  );
};

export default LoginPage;
