// export default function Todo({task, isdone}){
//     return(
//         <li>{task} {isdone && ':done'}</li>
//     )
// }



// export default function Todo({task, isdone}){
//     return(
//         <li>{task} {isdone || ':Not Done'}</li>
//     )
// }



export default function Todo({task, isDone}){
    let listItem;
    if(isDone){
        listItem = <li>Finish: {task}</li>
    }
    else{
        listItem = <li>Work on: {task}</li>
    }
    return listItem
}