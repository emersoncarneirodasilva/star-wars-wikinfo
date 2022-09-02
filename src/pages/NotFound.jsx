import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="text-center">
      <h1 className="mb-4">404 - Página não encontrada!</h1>
      <Link to='/' className="btn btn-primary btn-lg">
        Voltar para página inicial
      </Link>
    </div>
  );
};

export default NotFound;