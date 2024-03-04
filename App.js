import { ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";
import { CardTodo } from "./components/CardTodo/CardTodo";
import { Header } from "./components/header/Header";
import { useState } from "react";

export default function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Sortir le chien", isCompleted: true },
    { id: 2, title: "Allez chez le gagariste", isCompleted: false },
    { id: 3, title: "Faire les courses", isCompleted: true },
    { id: 4, title: "Appeler le vétérinaire", isCompleted: true },
    { id: 5, title: "Donnez à manger au chats", isCompleted: true },
    { id: 6, title: "Faire des markrout", isCompleted: false },
    { id: 7, title: "Boire de l'eau", isCompleted: true },
    { id: 8, title: "Regarder un film", isCompleted: true },
  ]);

  function renderTodoList() {
    return todoList.map((todo) => (
      <View style={s.cardItem} key={todo.id}>
        <CardTodo todo={todo} />
      </View>
    ));
  }

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.app}>
          <View style={s.header}>
            <Header />
          </View>
          <View style={s.body}>
            <ScrollView>{renderTodoList()}</ScrollView>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={s.footer}>
        <Text>Footer</Text>
      </View>
    </>
  );
}
