import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Components
import { Heading } from "../../components/Heading";
import { ContentCenter } from "../../components/ContentCenter";
import { MainTemplates } from "../../templates/MainTemplates";

// Icons
import { SquareCheckBig } from "lucide-react";

export function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/steps");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <MainTemplates>
      <ContentCenter>
        <SquareCheckBig size={95} color="#8685E7" />
        <Heading>UpTodo</Heading>
      </ContentCenter>
    </MainTemplates>
  );
}
