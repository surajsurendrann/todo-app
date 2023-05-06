import styled from "styled-components";
import Todo from "./components/Todo";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState("");
  const [_id, set_id] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    const fetchTodo = async () => {
      const response = await axios.get("http://localhost:5000/");
      setTodo(response.data);
    };
    fetchTodo();
  }, [todo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(task);
      const response = await axios.post("http://localhost:5000/save", {
        text: task.toUpperCase(),
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      console.log(task);
      const response = await axios.put("http://localhost:5000/update", {
        _id: _id,
        text: task.toUpperCase(),
      });
      console.log(response);
      setIsUpdating(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Wrapper>
        <H1>TODO APP</H1>
        <AddContainer>
          <form
            action=""
            onSubmit={isUpdating ? handleUpdate : handleSubmit}
            style={{ display: "flex" }}
          >
            <Input
              type="text"
              value={task}
              placeholder="Add to list.."
              onChange={(e) => {
                setTask(e.target.value);
              }}
              required
            />
            <AddButton type="submit">{isUpdating ? "UPDATE" : "ADD"}</AddButton>
          </form>
        </AddContainer>
        <TodoContainer>
          {todo.map((item) => (
            <Todo
              key={item._id}
              item={item}
              setTask={setTask}
              setIsUpdating={setIsUpdating}
              set_id={set_id}
            />
          ))}
        </TodoContainer>
      </Wrapper>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H1 = styled.h1`
  text-align: center;
  color: white;
`;

const AddContainer = styled.div`
  display: flex;
`;

const Input = styled.input`
  width: 350px;
  border: none;
  color: white;
  background: transparent;
  border-bottom: 1px solid white;
  outline: none;
`;

const AddButton = styled.button`
  padding: 10px 20px;
  margin-left: 5px;
  background-color: white;

  cursor: pointer;
  border: none;
  border-radius: 5px;
`;

const TodoContainer = styled.div``;
