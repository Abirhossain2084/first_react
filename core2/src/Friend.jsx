export default function Friend({friend}){
    const {name,email} =friend;
    const teamStyle ={
        border: '4px solid violet',
        margin: '15px',
        borderRadius: '20px'
    }
    return(
        
        <div style={teamStyle}>
            <h4>Name: {name}</h4>
            <h6>Email: {email} </h6>
            
        </div>
    )
}