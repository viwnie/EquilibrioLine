import Link from "next/link";

export default function PoliticaPrivacidadPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[var(--cor-charcoal)] to-black text-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-light mb-6" style={{ fontFamily: 'var(--font-adelia)' }}>Política de privacidad</h1>

      <p className="text-white/80 mb-6">
        A través del presente aviso, INTEREX 2003, S.L. informa a los usuarios del sitio web 
        &apos;www.equilibrioline.com&apos;, en cumplimiento del artículo 5 de la Ley 15/1999, de 13 de 
        diciembre, de Protección de datos, acerca de su política de protección de datos personales. 
        INTEREX 2003, S.L. figura inscrita en el Registro Mercantil de Murcia, Hoja MU-49488 Tomo 
        2020 Folio 66, con C.I.F. B-73263303
      </p>

      <p className="text-white/80 mb-6">
        INTEREX 2003, S.L. hace accesibles desde este sitio web a través de enlaces de hipertexto. La 
        inclusión de vínculos con otros sitios web no implica la aprobación de sus contenidos por parte 
        de INTEREX 2003, S.L. ni la existencia de ningún tipo de asociación entre INTEREX 2003, S.L. y 
        sus titulares.
      </p>

      <p className="text-white/80 mb-6">
        La copia, reproducción, transmisión, distribución o publicación de los contenidos de este sitio 
        web están prohibidos sin el previo consentimiento expreso de INTEREX 2003, S.L. Se permite la 
        reproducción y almacenamiento temporal de los contenidos del sitio web en tanto ello sea 
        estrictamente necesario para el uso y visualización del sitio web desde un ordenador personal.
      </p>

      <p className="text-white/80 mb-6">
        El usuario puede acceder a la información del sitio web sin necesidad de proporcionar ningún 
        dato de carácter personal. No obstante, en el supuesto de que el usuario realizara alguna 
        consulta por correo electrónico, para lo cual deberá rellenar un formulario, la información de 
        carácter personal facilitada por usted en éste, será incorporada y tratada en un fichero cuyo 
        destinatario y resposable es INTEREX 2003, S.L. , con domicilio en Valencia, C/ Estación, 27, 
        30500 Molina de Segura /Murcia) y cuya finalidad es facilitarle la información por usted 
        solicitada, así como beneficiarse de las ventajas asociadas a la cumplimentación del mismo. 
        INTEREX 2003, S.L. actúa como responsable del fichero, con el mismo domicilio señalado 
        anteriormente, con la finalidad de hacerle llegar ofertas comerciales ya sea por correo o través 
        de canales electrónicos.
      </p>

      <p className="text-white/80 mb-6">
        Al rellenar el formulario de la web, para solicitar una consulta sobre un tratamiento específico, 
        el usuario autoriza expresamente la suscripción a nuestras comunicaciones con la finalidad de 
        enviarle información publicitaria y promocional, que resulta de su interés/motivo de consulta, 
        consintiendo el envío de dicha información por cualquier medio, incluidos medios electrónicos. 
        (SMS/WhatsApp/Newsletters/llamada, correo electrónico)
      </p>

      <p className="text-white/80 mb-6">
        En cumplimiento de lo dispuesto en la Ley 34/2002 de 11 de julio, de Servicios de Sociedad de 
        la Información y de Comercio Electrónico los usuarios podrán revocar el consentimiento 
        prestado en cualquier momento a través del enlace Unsubscribed que aparece en la parte 
        inferior de la newsletter».
      </p>

      <p className="text-white/80 mb-6">
        Los interesados podrán ejercitar gratuitamente los derechos de acceso e información, 
        rectificación, cancelación, portabilidad, supresión o, en su caso, oposición de sus datos, en los 
        términos especificados en el Reglamento General de Protección de Datos de Carácter Personal, 
        conforme al procedimiento legalmente establecido.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Para ejercer estos derechos</h2>
      <p className="text-white/80 mb-6">
        Enviar su solicitud al domicilio: INTEREX 2003, S.L., C/ Estación, 27, Bajo, 30500, Molina de 
        Segura acompañada de una fotocopia de su D.N.I, y en la que especificará cuál de éstos solicita 
        sea satisfecho.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Medidas de seguridad</h2>
      <p className="text-white/80 mb-6">
        INTEREX 2003, S.L. ha adoptado las medidas de índole técnica y organizativa necesarias que 
        garanticen la seguridad de los datos y eviten su alteración, pérdida, tratamiento o acceso no 
        autorizado, habida cuenta del estado de la tecnología, la naturaleza de los datos almacenados 
        y los riesgos a que están expuestos, ya provengan de la acción humana o del medio físico o 
        natural. Se adoptan medidas de índole técnico y organizativas que persiguen alcanzar los 
        objetivos básicos en materia de seguridad, tales como la confidencialidad, entendida como la 
        limitación de acceso a la información por personas no autorizadas; la integridad, entendida 
        como el mantenimiento de información fiable y con calidad, y la disponibilidad, entendida 
        como la garantía de acceso al sistema de información por solicitud de un usuario autorizado.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Cookies</h2>
      <p className="text-white/80">
        Utilizamos cookies y tecnologías similares para mejorar la experiencia. Puedes obtener más información en nuestra {" "}
        <Link href="/politica-de-cookies" className="text-[var(--cor-dourado-claro)] hover:underline">Política de cookies</Link>.
      </p>
      </div>
    </section>
  );
}