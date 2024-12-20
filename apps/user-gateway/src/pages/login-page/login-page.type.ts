export type LoginFunnelStep =
  | 'intro'
  | 'input-mobile'
  | 'verifying-mobile'
  | 'login-success'
  | 'input-id'
  | 'signup-success';

export type LoginFunnel = {
  step: LoginFunnelStep;
};
