import { Link } from "react-router-dom";

function Index() {
  return (
    <section className="hero">
      <h1>Registro de estaciones ferroviarias</h1>
      <p>
        Recopilación de estaciones ferroviarias de la Ciudad Autónoma de Buenos
        Aires
      </p>
      <Link to="/lineas" className="btn btn-primary">
        Ver líneas ferroviarias
      </Link>
    </section>
  );
}

export default Index;
