type buttonProps = {
  value: string,
  handleClick: () => void,
  handleClick2: (e: React.MouseEvent<HTMLButtonElement>) => void,
  handleChange3: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Billboard = (props : buttonProps) => {
  const {handleClick,handleClick2, value,handleChange3} = props;
  
  return (
    <div>
        BOard
        <button onClick={handleClick}>Button</button>
        <button onClick={handleClick2}>Button2</button>
        <input value={value} onChange={handleChange3}/>
    </div>
  );
}
