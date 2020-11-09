import { useHistory } from "react-router-dom";
export default function HomeBtn() {
  let history = useHistory();
  function handleClick() {
    history.push("/");
  }
  return <button onClick={handleClick}>go Home</button>;
}
