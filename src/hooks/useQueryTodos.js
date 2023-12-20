import { useMutation } from "react-query";
import { addTodo, removeTodo, switchTodo } from "../api/todos";

export const UseAddMutate = () => useMutation(addTodo);
export const UseRemoveMutate = () => useMutation(removeTodo);
export const UseSwitchMutate = () => useMutation(switchTodo);
