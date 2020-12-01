const Password = ({label, value, onChange, valid}) => (

	<div>
		<label>{label}</label>
        <input 
            type="password" //hides what user is entering 
            value={value} 
            onChange={onChange} 
            style={valid ? {} : {borderColor :'red'}}
		/>
	</div>	
);

export default Password;