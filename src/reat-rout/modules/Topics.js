import {
  Route,
  Link,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";

export default function Topics() {
  let match = useRouteMatch();
  console.log('match--->',match)
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components:{match.url}</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v.State</Link>
        </li>
      </ul>
      {/* Topics有自己的switch */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>please select a topic:{match.path}</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>requested topic ID :{topicId}</h3>;
}
