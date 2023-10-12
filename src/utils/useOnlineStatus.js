import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    console.log("SetOnlineStatus");
    window.addEventListener("offline", () => {
      console.log("OFFLINE");
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      console.log("ONLINE");
      setOnlineStatus(true);
    });
  }, []);
  return onlineStatus;
};

export default useOnlineStatus;
