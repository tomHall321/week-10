const Square = ({ name, selected, handleClick, colour }) => (
    <div
        style={{
            background : selected ? "green" : colour, 
            width: 200, 
            height : 200,
        }}
        onClick={ handleClick }
    />
    
  );

  export default Square;