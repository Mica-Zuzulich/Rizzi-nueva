import { useNavigate } from "react-router-dom";
import styles from "./BanderaProyecto.module.css";

export default function BanderaProyecto() {
  const navigate = useNavigate();

  return (
    <div
      className={styles.bandera}
      onClick={() => navigate("/proyecto-exclusivo")}
    >
      🏠 Proyecto Exclusivo
    </div>
  );
}
