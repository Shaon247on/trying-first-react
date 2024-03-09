export default function Singer ({name, age}){
    console.log(name, age)
    return(
        <div>
            <h3>Singer: {name}</h3>
            <p>age: {age}</p>
        </div>
    )
}