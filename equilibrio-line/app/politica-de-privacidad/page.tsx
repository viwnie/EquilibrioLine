import Link from "next/link";

export default function PoliticaPrivacidadPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 text-white">
      <h1 className="text-3xl font-light mb-6" style={{ fontFamily: 'var(--font-adelia)' }}>Política de privacidad</h1>

      <p className="text-white/80 mb-4">
        En Equilibrio Line respetamos tu privacidad y nos comprometemos a proteger tus datos personales.
        Esta política explica cómo tratamos tus datos conforme al Reglamento (UE) 2016/679 (RGPD) y la
        Ley Orgánica 3/2018 (LOPDGDD).
      </p>

      <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6 text-sm">
        <p>
          También puedes consultar o descargar la versión en documento: {" "}
          <Link href="/politica-de-privacidad.docx" className="text-[var(--cor-dourado-claro)] hover:underline">Política de privacidad (DOCX)</Link>
        </p>
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-3">Responsable del tratamiento</h2>
      <p className="text-white/80">
        Interex S.L. — Email: equilibriolinemolina@gmail.com — Dirección: Molina de Segura, Murcia (España).
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Datos que tratamos</h2>
      <p className="text-white/80">
        Identificativos (nombre), contacto (teléfono, email) y preferencias de tratamiento indicadas en el formulario.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Finalidades y base jurídica</h2>
      <ul className="list-disc pl-6 text-white/80">
        <li>Gestionar tus consultas y comunicaciones — Base jurídica: consentimiento (art. 6.1.a RGPD).</li>
        <li>Programación de citas y seguimiento — Base jurídica: consentimiento y/o interés legítimo (art. 6.1.f).</li>
        <li>Envío puntual de información sobre servicios — Base jurídica: consentimiento. Puedes revocarlo en cualquier momento.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">Conservación</h2>
      <p className="text-white/80">
        Los datos se conservarán durante el tiempo necesario para atender tu solicitud y, en su caso, durante un máximo
        de 12 meses para comunicaciones relacionadas, salvo que solicites su supresión o exista obligación legal distinta.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Destinatarios</h2>
      <p className="text-white/80">
        No se ceden datos a terceros, salvo obligación legal. Podrán acceder proveedores que prestan servicios al Titular
        (por ejemplo, alojamiento web, correo electrónico, analítica) bajo contratos de encargo de tratamiento.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Transferencias internacionales</h2>
      <p className="text-white/80">
        En caso de utilizar herramientas con servidores fuera del EEE, se garantizarán salvaguardas adecuadas como cláusulas
        contractuales tipo o proveedores adheridos a marcos de adecuación.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Derechos</h2>
      <p className="text-white/80">
        Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad enviando un
        email a <a href="mailto:equilibriolinemolina@gmail.com" className="text-[var(--cor-dourado-claro)]">equilibriolinemolina@gmail.com</a>.
        Si consideras que no se ha atendido adecuadamente, puedes reclamar ante la Agencia Española de Protección de Datos.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Seguridad</h2>
      <p className="text-white/80">
        Aplicamos medidas técnicas y organizativas apropiadas para proteger tus datos contra accesos no autorizados,
        pérdida o alteración.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Cookies</h2>
      <p className="text-white/80">
        Utilizamos cookies y tecnologías similares para mejorar la experiencia. Puedes obtener más información en nuestra {" "}
        <Link href="/politica-de-cookies" className="text-[var(--cor-dourado-claro)] hover:underline">Política de cookies</Link>.
      </p>
    </section>
  );
}