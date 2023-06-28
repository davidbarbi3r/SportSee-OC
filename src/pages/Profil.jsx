import "./Profil.css";
import userData from "../assets/user-main-data.json";
import { NavLink } from "react-router-dom";

function Profil() {
  return (
    <section className="profil-select">
      <h2>Selectionne ton profil utilisateur</h2>
      <div className="profil-select-cards">
        {userData.map((user) => (
          <article className="profil-select-card" key={user.data.id}>
            <NavLink to={`/${user.data.id}`}>
              <h3>
                {user.data.userInfos.firstName} {user.data.userInfos.lastName}
              </h3>
              <p>{user.data.userInfos.age} ans</p>
            </NavLink>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Profil;
