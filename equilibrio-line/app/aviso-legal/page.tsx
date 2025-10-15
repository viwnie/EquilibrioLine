export default function AvisoLegalPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[var(--cor-charcoal)] to-black text-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-light mb-6" style={{ fontFamily: 'var(--font-adelia)' }}>Aviso legal</h1>

        <p className="text-white/80 mb-4">
          Este sitio web es titularidad de Interex S.L. (en adelante, "el Titular").
          El acceso y uso de este sitio implican la aceptación de los términos y condiciones
          recogidos en este Aviso Legal.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Datos identificativos</h2>
        <p className="text-white/80">
          - Titular: Interex S.L.<br/>
          - Email de contacto: equilibriolinemolina@gmail.com<br/>
          - Dirección: Molina de Segura, Murcia (España).<br/>
          - Finalidad del sitio: Información sobre servicios y contacto.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Propiedad intelectual</h2>
        <p className="text-white/80">
          Todos los contenidos (textos, imágenes, diseños, logotipos, etc.) son propiedad del Titular
          o de terceros que han autorizado su uso. Queda prohibida su reproducción, distribución o
          transformación sin autorización expresa.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Condiciones de uso</h2>
        <p className="text-white/80">
          El usuario se compromete a utilizar el sitio de forma diligente, lícita y conforme a la ley.
          El Titular no se hace responsable del uso indebido del sitio ni de los daños derivados de virus
          u otros elementos lesivos.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Enlaces externos</h2>
        <p className="text-white/80">
          Este sitio puede contener enlaces a páginas de terceros. El Titular no se responsabiliza de los
          contenidos o políticas de dichos sitios.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Protección de datos</h2>
        <p className="text-white/80">
          Para información detallada sobre cómo tratamos los datos personales, consulta nuestra
          <a href="/politica-de-privacidad" className="text-[var(--cor-dourado-claro)] hover:underline">Política de privacidad</a>.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Legislación aplicable</h2>
        <p className="text-white/80">
          Este Aviso Legal se rige por la legislación española. Cualquier disputa se someterá a los
          Juzgados y Tribunales de Murcia, salvo que la normativa aplicable disponga otra cosa.
        </p>
      </div>
    </section>
  );
}