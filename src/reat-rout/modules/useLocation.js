import { useLocation } from "react-router-dom";

export default function UseLocation() {
  let location = useLocation();
  return (
    <h3>
      location:{location.pathname}
      {console.log(location)}
    </h3>
  );
}
