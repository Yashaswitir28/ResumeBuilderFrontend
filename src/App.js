import React from "react";
import "./App.css";
import Resume from "./components/Resume";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
export function App() {
  const classes = useStyles();

  return <Resume classes={classes} />;
}

export default App;

//update
// const handleUpdate = (todo) => {
//   setIsEdit(true);
//   setTempUuid(todo.uuid);
//   setTodo(todo.todo);
// };

// const handleSubmitChange = () => {
//   update(ref(db, `/${tempUuid}`), {
//     todo,
//     uuid: tempUuid,
//   });

//   setTodo("");
//   setIsEdit(false);
// };

// //delete
// const handleDelete = (todo) => {
//   remove(ref(db, `/${todo.uuid}`));
// };
