import "./App.css";
import data from "./CollegeBasketballTeams.json";

function Heading() {
  return (
    <>
      <h1>NCAA College Basketball Team Information</h1>
    </>
  );
}

function Team({
  schoolName,
  mascotName,
  city,
  state,
}: {
  schoolName: string;
  mascotName: string;
  city: string;
  state: string;
}) {
  return (
    <>
      <h2>{schoolName}</h2>
      <h3>Mascot: {mascotName}</h3>
      <h3>
        Location: {city}, {state}
      </h3>
    </>
  );
}

function TeamList() {
  return (
    <div className="team-list">
      {data.teams.map((singleTeam) => (
        <div className="team-card" key={singleTeam.tid}>
          <Team
            schoolName={singleTeam.school}
            mascotName={singleTeam.name}
            city={singleTeam.city}
            state={singleTeam.state}
          />
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <>
      <Heading />
      <TeamList />
    </>
  );
}

export default App;
