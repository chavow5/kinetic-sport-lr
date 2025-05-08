import { useEffect, useState } from "react";

export default function FormularioDriveContenido() {
  const [respuestas, setRespuestas] = useState([]);

  useEffect(() => {
    fetch("https://opensheet.elk.sh/11m1tt5qbloUch1L-hIAXBFgL0cDkbaRFZBfrI5HvxU0/Respuestas%20de%20formulario%201")

      .then((res) => res.json())
      .then((data) => setRespuestas(data));
  }, []);

  return (
    <div>
      <h1>Contenido cargado desde el formulario</h1>
      {respuestas.map((item, index) => (
        <div key={index} style={{ marginBottom: "2rem" }}>
          <h3>{item.Título}</h3>
          {item["Subí tu imagen"] &&
            item["Subí tu imagen"].includes("https://drive.google.com") && (
              <img
                src={convertirLinkDrive(item["Subí tu imagen"])}
                alt={item.Título}
                width={300}
              />
          )}
        </div>
      ))}
    </div>
  );
}

// Convierte el enlace de vista previa de Drive en uno embebible
function convertirLinkDrive(link) {
  const match = link.match(/\/d\/([a-zA-Z0-9_-]+)\//);
  if (!match) return "";
  const id = match[1];
  return `https://drive.google.com/uc?export=view&id=${id}`;
}
