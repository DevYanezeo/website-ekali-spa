export default function TermsPage() {
  return (
    <div className="space-y-12 max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <section className="relative py-8">
        <div className="absolute w-80 h-80 bg-secondary/10 rounded-full blur-3xl top-0 right-1/2 opacity-20"></div>
        <div className="relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Términos de <span className="text-secondary">Servicio</span>
          </h1>
          <p className="text-foreground/70">Última actualización: Enero 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-surface rounded-xl p-8 md:p-12 space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4">1. Aceptación de Términos</h2>
          <p className="text-foreground/80 leading-relaxed">
            Al acceder y utilizar los servicios de Ekali Solutions, usted acepta cumplir con estos términos y condiciones.
            Si no está de acuerdo con alguno de estos términos, le rogamos no utilice nuestros servicios.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4">2. Servicios Ofrecidos</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Ekali Solutions ofrece servicios de consultoría tecnológica, desarrollo de software y soluciones cloud, incluyendo:
          </p>
          <ul className="space-y-2 text-foreground/80">
            <li className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Desarrollo de aplicaciones Full-Stack</span>
            </li>
            <li className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Soluciones en Microsoft Power Platform</span>
            </li>
            <li className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Implementación de infraestructura Cloud</span>
            </li>
            <li className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Consultoría en transformación digital</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4">3. Uso del Sitio Web</h2>
          <p className="text-foreground/80 leading-relaxed">
            El contenido de este sitio web es solo para información general. Nos reservamos el derecho de modificar
            o retirar el contenido sin previo aviso.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4">4. Propiedad Intelectual</h2>
          <p className="text-foreground/80 leading-relaxed">
            Todo el contenido del sitio web, incluyendo diseños, textos, gráficos y logos, es propiedad de Ekali Solutions
            y está protegido por las leyes de propiedad intelectual aplicables.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4">5. Limitación de Responsabilidad</h2>
          <p className="text-foreground/80 leading-relaxed">
            Ekali Solutions no será responsable de ningún daño directo, indirecto, incidental o consecuente
            que resulte del uso o la imposibilidad de usar nuestros servicios o sitio web.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4">6. Modificaciones de Términos</h2>
          <p className="text-foreground/80 leading-relaxed">
            Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones
            entrarán en vigor inmediatamente después de su publicación en el sitio web.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4">7. Ley Aplicable</h2>
          <p className="text-foreground/80 leading-relaxed">
            Estos términos se rigen por las leyes de la República de Chile. Cualquier disputa se resolverá
            en los tribunales competentes de Santiago, Chile.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contacto</h2>
          <p className="text-foreground/80 leading-relaxed">
            Para cualquier consulta sobre estos términos, puede contactarnos en:
          </p>
          <div className="mt-4 space-y-2">
            <p className="text-secondary font-medium">Email: ekali.solutions@gmail.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}
