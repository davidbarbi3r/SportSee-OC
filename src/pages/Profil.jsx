import "./Profil.css";
import userData from "../assets/user-main-data.json";
import { NavLink } from "react-router-dom";

function Profil() {
  return (
    <section className="profil-select">
      <h2>Selectionne ton profil utilisateur</h2>
      <div className="profil-select-cards">
        {userData.map((user) => (
          <NavLink to={`/${user.data.id}`} key={user.data.id} className="profil-select-card">
            <article >
              <h3>
                {user.data.userInfos.firstName} {user.data.userInfos.lastName}
              </h3>
              <p>{user.data.userInfos.age} ans</p>
            </article>
          </NavLink>
        ))}
      </div>
    </section>
  );
}

export default Profil;
