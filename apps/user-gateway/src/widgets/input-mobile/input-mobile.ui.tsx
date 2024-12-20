type InputMobileProps = {
  onSubmit: () => void;
};

const InputMobile: React.FC<InputMobileProps> = ({ onSubmit }) => {
  return (
    <>
      <p>전화번호를 입력해주세요.</p>
      <div>
        <button type="button">+82</button>
        <input type="number" placeholder="전화번호 입력(-제외)" />
      </div>
      <button type="button" onClick={onSubmit}>
        다음
      </button>
    </>
  );
};

export default InputMobile;
