const Live15 = () => {
  const [isParagraphVisible, setParagraphVisibility] = useState(true);

  const toggle = () => {
    setParagraphVisibility(!isParagraphVisible);
  };

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      {isParagraphVisible && (
        <p>
          Sed dapibus, ipsum vel convallis facilisis, odio nisl scelerisque
          sapien, in tincidunt ipsum mi ac urna.
        </p>
      )}
    </div>
  );
};
export default Live15;
