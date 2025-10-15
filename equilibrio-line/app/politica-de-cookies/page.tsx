import Link from "next/link";

export default function PoliticaCookiesPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 text-white">
      <h1 className="text-3xl font-light mb-6" style={{ fontFamily: 'var(--font-adelia)' }}>Política de cookies</h1>

      <p className="text-white/80 mb-4">
        Esta política describe qué son las cookies, qué tipos utilizamos y cómo puedes gestionarlas.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">¿Qué son las cookies?</h2>
      <p className="text-white/80">
        Las cookies son pequeños archivos que se almacenan en tu dispositivo al visitar un sitio web y permiten
        recordar información sobre tu visita, como preferencias y acciones realizadas.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Tipos de cookies que usamos</h2>
      <ul className="list-disc pl-6 text-white/80">
        <li>Cookies técnicas: necesarias para el funcionamiento del sitio y la seguridad.</li>
        <li>Cookies de preferencias: recuerdan tus opciones (por ejemplo, idioma).</li>
        <li>Cookies de análisis: nos ayudan a comprender el uso del sitio para mejorar la experiencia.</li>
        <li>Cookies de terceros: servicios integrados (por ejemplo, mapas, reproductores, analítica).</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">Gestión y desactivación</h2>
      <p className="text-white/80">
        Puedes aceptar, rechazar o configurar las cookies a través de la configuración de tu navegador. Ten en
        cuenta que bloquear ciertas cookies puede afectar al funcionamiento del sitio.
      </p>
      <ul className="list-disc pl-6 text-white/80">
        <li><a className="text-[var(--cor-dourado-claro)] hover:underline" href="https://support.google.com/chrome/answer/95647">Google Chrome</a></li>
        <li><a className="text-[var(--cor-dourado-claro)] hover:underline" href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web">Mozilla Firefox</a></li>
        <li><a className="text-[var(--cor-dourado-claro)] hover:underline" href="https://support.apple.com/es-es/guide/safari/sfri11471/mac">Safari</a></li>
        <li><a className="text-[var(--cor-dourado-claro)] hover:underline" href="https://support.microsoft.com/es-es/windows/microsoft-edge-datos-de-exploraci%C3%B3n-y-privacidad-2a2f1863-3a10-4bd5-af89-7a61d7a2a32b">Microsoft Edge</a></li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">Consentimiento</h2>
      <p className="text-white/80">
        Al navegar por el sitio, se te solicitará consentimiento para el uso de las cookies no técnicas. Puedes
        retirar tu consentimiento en cualquier momento eliminando las cookies de tu navegador o ajustando tu configuración.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Más información</h2>
      <p className="text-white/80">
        Para conocer cómo tratamos datos personales y tus derechos, consulta nuestra {" "}
        <Link href="/politica-de-privacidad" className="text-[var(--cor-dourado-claro)] hover:underline">Política de privacidad</Link>.
      </p>
    </section>
  );
}