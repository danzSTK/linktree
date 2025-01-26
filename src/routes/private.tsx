import { useEffect, useState } from "react";
import { auth } from "../services/firebaseConnection";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router";

type PrivateProps = {
  children: React.ReactNode;
};

const Private = ({ children }: PrivateProps): any => {
  const [loading, setLoading] = useState(true);
  const [signed, setSigned] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        setLoading(false);
        setSigned(false);
      } else {
        const userData = {
          uid: user.uid,
          email: user.email,
        };

        localStorage.setItem("@meulinktree", JSON.stringify(userData));
        setLoading(false);
        setSigned(true);
      }
    });

    return () => {
      unsubscribe()
    }
  }, []);

  if (loading) {
    return <div></div>;
  }

  if (!signed) {
    return <Navigate to={"/login"} />;
  }

  return children;
};

export default Private;
