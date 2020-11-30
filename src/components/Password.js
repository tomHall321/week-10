const Password = (props) => (
	<div>
		<label>{props.label}</label>
        <input 
            type="password" //hides what user is entering 
            value={props.value} 
            onChange={(e)=>{props.onChange(e)}} 
            style={props.valid ? {} : {borderColor :'red'}}
		/>
	</div>	
);

export default Password;