function Person(props){
    // If the person is over 18 years old, display an additional h3 that says “please go vote!”. Otherwise, display an h3 that says “you must be 18”. If the person’s name is longer than 8 characters, only display the first six characters of their name.
    const voteText = props.age > 18 ? "please go vote!" : "you must be 18";
    return (<div>
    <p>Learn some information about this person</p>
    <p>Name: {props.name.length > 8 ? `${props.name.slice(0,6)}...` : props.name}</p>
    <p>Age: {props.age}</p>
    <h3>Vote status: {voteText}</h3>
    <p>Hobbies:</p>
    <ul>{props.hobbies.map(e=> <li>{e}</li>)}</ul>
    </div>);
}