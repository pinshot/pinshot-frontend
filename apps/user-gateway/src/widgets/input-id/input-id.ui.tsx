type InputIdProps = {
  onSubmit: () => void;
};

const InputId: React.FC<InputIdProps> = ({ onSubmit }) => {
  return (
    <>
      <p>
        환영합니다!
        <br />
        아이디를 만들어 주세요.
      </p>
      <p>생성된 아이디는 변경이 불가능해요.</p>
      <div>
        <input type="text" placeholder="아이디 입력" />
      </div>
      <button type="button" onClick={onSubmit}>
        만들기
      </button>
    </>
  );
};

export default InputId;
