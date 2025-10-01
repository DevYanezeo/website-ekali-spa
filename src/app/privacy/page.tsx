export default function PrivacyPage() {
  return (
    <div className="space-y-12 max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <section className="relative py-8">
        <div className="absolute w-80 h-80 bg-primary/10 rounded-full blur-3xl top-0 left-1/2 opacity-20"></div>
        <div className="relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Política de <span className="text-primary">Privacidad</span>
          </h1>
          <p className="text-foreground/70">Última actualización: Enero 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-surface rounded-xl p-8 md:p-12 space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4">1. Información que Recopilamos</h2>
          <p className="text-foreground/80 leading-relaxed">
            En Ekali Solutions recopilamos información personal que usted nos proporciona voluntariamente al contactarnos,
            como nombre, email, teléfono y detalles sobre su proyecto o consulta.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4">2. Uso de la Información</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Utilizamos la información recopilada para:
          </p>
          <ul className="space-y-2 text-foreground/80">
            <li className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Responder a sus consultas y solicitudes de información</span>
            </li>
            <li className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Proporcionar información sobre nuestros servicios</span>
            </li>
            <li className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Mejorar nuestros servicios y experiencia del usuario</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4">3. Protección de Datos</h2>
          <p className="text-foreground/80 leading-relaxed">
            Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal
            contra acceso no autorizado, pérdida o alteración.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4">4. Compartir Información</h2>
          <p className="text-foreground/80 leading-relaxed">
            No vendemos, alquilamos ni compartimos su información personal con terceros, excepto cuando sea
            necesario para proporcionar nuestros servicios o cuando lo requiera la ley.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4">5. Sus Derechos</h2>
          <p className="text-foreground/80 leading-relaxed">
            Usted tiene derecho a acceder, rectificar o eliminar su información personal en cualquier momento.
            Para ejercer estos derechos, contáctenos a ekali.solutions@gmail.com
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4">6. Contacto</h2>
          <p className="text-foreground/80 leading-relaxed">
            Si tiene preguntas sobre esta política de privacidad, puede contactarnos en:
          </p>
          <div className="mt-4 space-y-2">
            <p className="text-primary font-medium">Email: ekali.solutions@gmail.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}
