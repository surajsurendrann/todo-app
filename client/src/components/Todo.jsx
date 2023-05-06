/* eslint-disable react/prop-types */
import styled from "styled-components";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";

const Todo = ({ item, setTask, setIsUpdating, set_id }) => {
  const updateMode = () => {
    setTask(item.text);
    set_id(item._id);
    setIsUpdating(true);
  };

  const deleteTodo = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/delete/${item._id}`
      );
      console.log(response);
      setIsUpdating(false);
      setTask("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrapper>
      {item.text}
      <IconsContainer>
        <BiEdit onClick={updateMode} />
        <AiFillDelete onClick={deleteTodo} style={{ marginLeft: "8px" }} />
      </IconsContainer>
    </Wrapper>
  );
};

export default Todo;

const Wrapper = styled.div`
  position: relative;
  background-color: white;
  color: black;
  margin-top: 1rem;
  padding: 1.5rem 2rem;
  display: flex;
  width: 400px;
  border-radius: 5px;
  transition: all ease-in-out;
`;

const IconsContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  cursor: pointer;
`;
