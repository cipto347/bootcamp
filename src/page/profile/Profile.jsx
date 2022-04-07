import { useState, useEffect } from "react";

import InputText from "../../components/atom/InputText";

function Profile() {
  const [name, setName] = useState("cipto tri utomo");
  const [profileObject, setProfileObject] = useState({
    name: "cipto aja",
    ttl: "kasur 34234",
  });

  function setNameFunction(nameVariable) {
    setName(nameVariable);
  }

  useEffect(() => {
    setNameFunction("100000");
  }, []);

  return (
    <>
      <div className="bg-accent text-base-100">
        ini halaman profile {name} {profileObject.name} {profileObject.ttl}
      </div>
      <InputText
        id="name"
        value={profileObject.name}
        label="nama lengkap kamu"
        type="text"
        placeholder="Masukkan nama kamu"
        onChange={(e) => {
          setProfileObject({ ...setProfileObject, name: e.target.value });
        }}
      />
    </>
  );
}

export default Profile;
