import { s } from './CardTodo.style'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import check from "../../assets/check.png"
export function CardTodo({todo}) {

    
    return (
        <TouchableOpacity style={s.card}>
            <Text style={[s.txt, todo.isCompleted && {textDecorationLine: "line-through"}]}>{todo.title}</Text>
         {todo.isCompleted && <Image style={s.img}source={check}/>}   
        </TouchableOpacity>
    )
}