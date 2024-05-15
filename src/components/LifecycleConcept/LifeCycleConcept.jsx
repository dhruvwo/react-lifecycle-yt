import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react";
import UserNames from "../CalculateWithMemo/Users";
import { generateRandomId, getNewName } from "../../services/common";

export default function LifeCycleConcept({ users, setUsers }) {
  console.log("RENDERING COMPONENT LifeCycleConcept...");
  const myDiv = useRef();

  useEffect(() => {
    console.log("HOOK => LifeCycleConcept => useEffect");
    return () => {
      console.log("HOOK => LifeCycleConcept => useEffect => return");
    };
  }, [users]);

  useLayoutEffect(() => {
    console.log("HOOK => LifeCycleConcept => useLayoutEffect");
  }, [users]);

  const userNames = useMemo(() => {
    console.log("HOOK => LifeCycleConcept => useMemo => userNames");
    return users.map((user) => user.name).join(", ");
  }, [users]);

  const addUser = useCallback(() => {
    console.log("HOOK => LifeCycleConcept => useCallback => addUser");
    const userName = getNewName();
    const userId = generateRandomId();
    setUsers((prev) => [
      ...prev,
      {
        id: userId,
        name: userName,
      },
    ]);
  }, []);

  return (
    <div
      ref={myDiv}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 15,
      }}
    >
      <UserNames addUser={addUser} userNames={userNames} />
    </div>
  );
}
