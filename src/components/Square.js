const Square = ({ name, selected, handleClick }) => (
    <div
        style={{
            background : selected ? "green" : "hotpink", 
            width: 200, 
            height : 200,
        }}
        onClick={ handleClick }
    />
    
  );

  export default Square;