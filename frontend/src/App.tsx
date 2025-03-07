import './App.css';

//Import NCAA Team Info from the Json file
import data from './CollegeBasketballTeams.json';

//Header for the page
function Heading() {
  return (
    <>
      <h1>NCAA College Basketball Team Information</h1>
    </>
  );
}

//Team Card with their name, mascot, and location
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

//Map through the json file and pull out the name, mascot, city, and state for each team and pass each single team to the Team function
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

//App function that combines the functions on the main page
function App() {
  return (
    <>
      <Heading />
      <TeamList />
    </>
  );
}

export default App;
