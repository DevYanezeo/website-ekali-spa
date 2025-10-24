'use client';

import { useState, FormEvent } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // IMPORTANTE: Reemplaza 'YOUR_FORM_ID' con tu ID de Formspree
      // Ejemplo: https://formspree.io/f/xwpejrnb
      const response = await fetch('https://formspree.io/f/mkgpwgna', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        // Auto-limpiar mensaje de éxito después de 5 segundos
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        const data = await response.json();
        setErrorMessage(data.error || 'Error al enviar el mensaje');
        setStatus('error');
      }
    } catch (error) {
      setErrorMessage('Error de conexión. Por favor intenta nuevamente.');
      setStatus('error');
    }
  }

  return (
    <div className="space-y-16">
      {/* Header Section */}
      <section className="relative py-20">
        <div className="absolute w-80 h-80 bg-primary/10 rounded-full blur-3xl top-0 left-1/2 opacity-20"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Contáctanos</span>
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Estamos listos para ayudarte con tu próximo proyecto tecnológico
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-surface rounded-xl p-8 shadow-md">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Envíanos un mensaje</h2>
            
            {/* Mensajes de estado */}
            {status === 'success' && (
              <div className="mb-6 p-4 bg-secondary/10 border border-secondary/20 rounded-md">
                <p className="text-secondary font-medium">
                  ✓ Mensaje enviado exitosamente. Te contactaremos pronto!
                </p>
              </div>
            )}
            
            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-red-600 font-medium">
                  ✗ {errorMessage || 'Hubo un error. Intenta nuevamente.'}
                </p>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-1">
                  Nombre *
                </label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  className="w-full bg-background border border-foreground/10 rounded-md py-3 px-4 text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" 
                  placeholder="Tu nombre"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1">
                  Email *
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  required
                  className="w-full bg-background border border-foreground/10 rounded-md py-3 px-4 text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" 
                  placeholder="tu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="empresa" className="block text-sm font-medium text-foreground/80 mb-1">
                  Empresa
                </label>
                <input 
                  type="text" 
                  id="empresa"
                  name="empresa"
                  className="w-full bg-background border border-foreground/10 rounded-md py-3 px-4 text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" 
                  placeholder="Nombre de tu empresa (opcional)"
                />
              </div>
              
              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-foreground/80 mb-1">
                  Teléfono
                </label>
                <input 
                  type="tel" 
                  id="telefono"
                  name="telefono"
                  className="w-full bg-background border border-foreground/10 rounded-md py-3 px-4 text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" 
                  placeholder="+56 9 1234 5678 (opcional)"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-1">
                  Mensaje *
                </label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={6} 
                  className="w-full bg-background border border-foreground/10 rounded-md py-3 px-4 text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" 
                  placeholder="Cuéntanos sobre tu proyecto o consulta"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-primary hover:bg-primary-hover text-white font-medium py-3 px-4 rounded-md shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-surface rounded-xl p-8 shadow-md">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Información de contacto</h2>
              <div className="space-y-6 mt-8">
                <div className="flex items-start space-x-4">
                  <div className="rounded-md bg-primary/10 p-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium">Email</h3>
                    <a href="mailto:ekali.solutions@gmail.com" className="text-primary hover:text-primary-hover">
                      ekali.solutions@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="rounded-md bg-primary/10 p-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium">Ubicación</h3>
                    <p className="text-foreground/70">Santiago, Chile</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-semibold text-foreground mb-4">Horario de atención</h3>
              <div className="space-y-2 text-foreground/70">
                <p>Lunes a Viernes: 9:00 - 18:00</p>
                <p>Sábados: 10:00 - 14:00</p>
                <p>Domingos: Cerrado</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
