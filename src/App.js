import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import UserList from "./component/UserList";

export default function App() {
  const [list, setList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getList = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(res.data);
      setIsLoading(false);
      setList(res.data);
    } catch (err) {
      setIsLoading(false);
      console.log("error: ", err.message);
      setError(err.message);
    }
  };
  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="container">
      <UserList list={list} isLoading={isLoading} error={error} />
    </div>
  );
}
