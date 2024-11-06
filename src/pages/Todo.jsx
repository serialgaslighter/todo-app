/*

    Erstelle eine Todo-Liste. 
    Die Liste soll aus einem Input-Feld, einem Button zum Hinzufügen von Todos und einer Liste von Todos bestehen. 
    Jedes Todo besteht aus einem Text, einem Button zum Löschen und einem Checkbox zum Abhaken. 
    Wenn ein Todo abgehakt wird, soll es durchgestrichen werden. 
    Wenn ein Todo gelöscht wird, soll es aus der Liste entfernt werden. 
    Die Todos sollen persistent gespeichert werden.

    Versuche dabei so viele Components wie möglich bzw. nötig zu erstellen um den Code übersichtlich zu halten.
    Speichere deine Components  im Ordner src/components ab.
    Diese kannst du hier über @components importieren.

    Beispiel: "import ComponentName from '@components/ComponentDatei';"

    Best case scenario:
        für reine funktionen erstelle eine js Datei
        für ganze Components erstelle eine jsx Datei
    Dies ist aber nur eine Empfehlung und keine Pflicht.
*/

import { Input } from "@components/Input.jsx";
import { TodoList } from "../components/TodoList.jsx";

const Todo = () => {

    return(
        <>
            <h1>Todo</h1>
            <Input />
            <TodoList />
        </>
    )
}

export default Todo;