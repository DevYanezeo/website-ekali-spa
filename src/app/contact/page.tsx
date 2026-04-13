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
    <div className="pt-32 pb-20 space-y-24 bg-background min-h-screen">
      {/* Header Section */}
      <section className="relative px-8">
        <div className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -top-40 -left-20 opacity-30 animate-pulse"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-on-surface leading-[0.9] mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Contáctanos</span>
            </h1>
            <p className="text-2xl md:text-3xl text-on-surface-variant max-w-3xl leading-relaxed">
              Estamos listos para ayudarte con tu próximo proyecto tecnológico. Hablemos de tus objetivos.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-surface-container rounded-[2.5rem] p-10 md:p-16 shadow-2xl border border-outline-variant/10">
              <h2 className="text-3xl font-black text-on-surface mb-10 tracking-tight">Envíanos un mensaje</h2>
              
              {/* Mensajes de estado */}
              {status === 'success' && (
                <div className="mb-10 p-6 bg-secondary/10 border border-secondary/20 rounded-2xl">
                  <p className="text-secondary font-bold flex items-center gap-3">
                    <span className="material-symbols-outlined">check_circle</span>
                    ✓ Mensaje enviado exitosamente. Te contactaremos pronto!
                  </p>
                </div>
              )}
              
              {status === 'error' && (
                <div className="mb-10 p-6 bg-error/10 border border-error/20 rounded-2xl">
                  <p className="text-error font-bold flex items-center gap-3">
                    <span className="material-symbols-outlined">error</span>
                    ✗ {errorMessage || 'Hubo un error. Intenta nuevamente.'}
                  </p>
                </div>
              )}

              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label htmlFor="name" className="block text-sm font-bold uppercase tracking-widest text-on-surface-variant">
                      Nombre *
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required
                      className="w-full bg-surface-container-highest border-none rounded-2xl p-5 focus:ring-2 focus:ring-secondary transition-all outline-none text-on-surface" 
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest text-on-surface-variant">
                      Email *
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required
                      className="w-full bg-surface-container-highest border-none rounded-2xl p-5 focus:ring-2 focus:ring-secondary transition-all outline-none text-on-surface" 
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label htmlFor="empresa" className="block text-sm font-bold uppercase tracking-widest text-on-surface-variant">
                      Empresa
                    </label>
                    <input 
                      type="text" 
                      id="empresa"
                      name="empresa"
                      className="w-full bg-surface-container-highest border-none rounded-2xl p-5 focus:ring-2 focus:ring-secondary transition-all outline-none text-on-surface" 
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label htmlFor="telefono" className="block text-sm font-bold uppercase tracking-widest text-on-surface-variant">
                      Teléfono
                    </label>
                    <input 
                      type="tel" 
                      id="telefono"
                      name="telefono"
                      className="w-full bg-surface-container-highest border-none rounded-2xl p-5 focus:ring-2 focus:ring-secondary transition-all outline-none text-on-surface" 
                      placeholder="+56 9 1234 5678"
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label htmlFor="message" className="block text-sm font-bold uppercase tracking-widest text-on-surface-variant">
                    Mensaje *
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    required
                    rows={6} 
                    className="w-full bg-surface-container-highest border-none rounded-2xl p-5 focus:ring-2 focus:ring-secondary transition-all outline-none text-on-surface" 
                    placeholder="Cuéntanos sobre tu proyecto o consulta"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-black py-6 rounded-2xl text-xl hover:opacity-90 transition-all hover:scale-[1.02] shadow-xl shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </form>
            </div>

            <div className="space-y-12">
              <div className="bg-surface-container-high rounded-[2.5rem] p-10 md:p-12 shadow-2xl border border-outline-variant/10">
                <h2 className="text-3xl font-black text-on-surface mb-10 tracking-tight">Contacto</h2>
                <div className="space-y-10">
                  <div className="flex items-start gap-6 group">
                    <div className="w-16 h-16 rounded-2xl bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-3xl">mail</span>
                    </div>
                    <div>
                      <h3 className="text-on-surface-variant font-bold uppercase tracking-widest text-sm mb-2">Email</h3>
                      <a href="mailto:ekali.solutions@gmail.com" className="text-2xl font-black text-on-surface hover:text-primary transition-colors">
                        ekali.solutions@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6 group">
                    <div className="w-16 h-16 rounded-2xl bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-3xl">location_on</span>
                    </div>
                    <div>
                      <h3 className="text-on-surface-variant font-bold uppercase tracking-widest text-sm mb-2">Ubicación</h3>
                      <p className="text-2xl font-black text-on-surface">Santiago, Chile</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-high rounded-[2.5rem] p-10 md:p-12 shadow-2xl border border-outline-variant/10">
                <h3 className="text-2xl font-black text-on-surface mb-8 tracking-tight">Horario de atención</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Lunes a Viernes', value: '9:00 - 18:00' },
                    { label: 'Sábados', value: '10:00 - 14:00' },
                    { label: 'Domingos', value: 'Cerrado' }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-3 border-b border-outline-variant/10">
                      <span className="text-on-surface-variant font-medium">{item.label}</span>
                      <span className="text-on-surface font-black">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
