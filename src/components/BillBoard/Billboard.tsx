type buttonProps = {
  value: string,
  handleClick: () => void,
  handleClick2: (e: React.MouseEvent<HTMLButtonElement>) => void,
  handleChange3: (e: React.ChangeEvent<HTMLInputElement>) => void
}

 const Billboard : React.FC<buttonProps >= ({
  value, handleChange3, handleClick, handleClick2
}) => {

  
  return (
    <div>
        BOard
        <button onClick={handleClick}>Button</button>
        <button onClick={handleClick2}>Button2</button>
        <input value={value} onChange={handleChange3}/>
    </div>
  );
}

export default Billboard;
