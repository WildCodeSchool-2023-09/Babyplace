import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import avatar from "../../assets/avatar.png";
import "../../styles/layoutprofile.scss";

function LayoutProfile() {
  const [profile, setProfile] = useState([]);

  // const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/parents/1`)
      .then((response) => {
        const result = response.data;
        setProfile(result);
        console.info(result);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données:", error);
      });
  }, []);

  console.info(profile);
  return (
    <>
      <header className="headbar">
        {" "}
        <picture className="picture">
          <img src={avatar} alt="avatar" />
        </picture>
        <div>
          <h2>
            {profile.first_name} {profile.last_name}
          </h2>
          <p>{profile.birth_name}</p>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default LayoutProfile;
