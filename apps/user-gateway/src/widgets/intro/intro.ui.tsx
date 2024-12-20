type IntroProps = {
  onClickNext: () => void;
};

const Intro: React.FC<IntroProps> = ({ onClickNext }) => {
  return (
    <>
      <p>
        어쩌구 저쩌구
        <br />
        환영 멘트
      </p>
      <button type="button" onClick={onClickNext}>
        시작하기
      </button>
    </>
  );
};

export default Intro;
