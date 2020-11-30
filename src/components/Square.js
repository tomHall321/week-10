const Square = ({ name, selected, handleClick }) => (
    <div
        style={{
            width: 200, 
            height : 200,
            background : selected ? "green" : "hotpink", 
        }}
        onClick={ handleClick }
    />
    
  );

  export default Square;