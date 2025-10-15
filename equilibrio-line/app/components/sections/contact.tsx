"use client";
import { useState, useCallback, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { allTreatments } from "../../data/treatments";
import { ContactInfoData } from "../../data/contactInfo";
import Toast from "../ui/Toast";

// Tipos para validação
interface FormData {
  name: string;
  phone: string;
  email: string;
  treatment: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  treatment?: string;
}

interface FormTouched {
  name: boolean;
  phone: boolean;
  email: boolean;
  treatment: boolean;
}

export default function Contact() {
  const [isWhatsAppMode, setIsWhatsAppMode] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    treatment: ''
  });

  const [formTouched, setFormTouched] = useState<FormTouched>({
    name: false,
    phone: false,
    email: false,
    treatment: false
  });

  const [debouncedFormData, setDebouncedFormData] = useState<FormData>(formData);
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState({
    isVisible: false,
    message: '',
    type: 'success' as 'success' | 'error'
  });

  // Hook para debounce dos dados do formulário
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedFormData(formData);
    }, 300);

    return () => clearTimeout(timer);
  }, [formData]);

  // Funções de validação
  const validateName = useCallback((name: string): string | undefined => {
    if (!name.trim()) return 'El nombre es obligatorio';
    if (name.trim().length < 2) return 'El nombre debe tener al menos 2 caracteres';
    if (name.trim().length > 50) return 'El nombre debe tener máximo 50 caracteres';
    if (!/^[a-zA-ZÀ-ÿñÑ\s]+$/.test(name.trim())) return 'El nombre solo puede contener letras y espacios';
    return undefined;
  }, []);

  const validatePhone = useCallback((phone: string): string | undefined => {
    if (!phone.trim()) return 'El teléfono es obligatorio';
    const cleanPhone = phone.replace(/\D/g, '');
    // Formato español: 9 dígitos (móvil) o 9 dígitos (fijo)
    if (cleanPhone.length !== 9) return 'El teléfono debe tener exactamente 9 dígitos';
    // Validar que empiece con números válidos para España
    if (!/^[6789]/.test(cleanPhone)) return 'El teléfono debe empezar con 6, 7, 8 o 9';
    return undefined;
  }, []);

  const validateEmail = useCallback((email: string): string | undefined => {
    if (!email.trim()) return 'El email es obligatorio';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) return 'El email debe tener un formato válido';
    if (email.length > 100) return 'El email debe tener máximo 100 caracteres';
    return undefined;
  }, []);

  const validateTreatment = useCallback((treatment: string): string | undefined => {
    if (!treatment.trim()) return 'Selecciona un tratamiento';
    return undefined;
  }, []);

  // Validação completa do formulário (usando dados com debounce)
  const formErrors = useMemo((): FormErrors => ({
    name: validateName(debouncedFormData.name),
    phone: validatePhone(debouncedFormData.phone),
    email: validateEmail(debouncedFormData.email),
    treatment: validateTreatment(debouncedFormData.treatment)
  }), [debouncedFormData, validateName, validatePhone, validateEmail, validateTreatment]);

  // Verifica se o formulário é válido baseado no modo
  const isFormValid = useMemo(() => {
    if (isWhatsAppMode) {
      // No modo WhatsApp, apenas nome e tratamento são obrigatórios
      return !formErrors.name && !formErrors.treatment &&
        debouncedFormData.name.trim() !== '' &&
        debouncedFormData.treatment !== '';
    } else {
      // No modo Email, todos os campos são obrigatórios
      return Object.values(formErrors).every(error => !error) &&
        debouncedFormData.name.trim() !== '' &&
        debouncedFormData.phone.trim() !== '' &&
        debouncedFormData.email.trim() !== '' &&
        debouncedFormData.treatment !== '';
    }
  }, [formErrors, debouncedFormData, isWhatsAppMode]);

  // Máscara para telefone español
  const formatPhone = useCallback((value: string): string => {
    const numbers = value.replace(/\D/g, '');
    // Formato español: XXX XXX XXX (9 dígitos)
    if (numbers.length <= 3) {
      return numbers;
    } else if (numbers.length <= 6) {
      return numbers.replace(/(\d{3})(\d{1,3})/, '$1 $2');
    } else {
      return numbers.slice(0, 9).replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
    }
  }, []);

  const showToast = useCallback((message: string, type: 'success' | 'error') => {
    setToast({
      isVisible: true,
      message,
      type
    });
  }, []);

  const hideToast = useCallback(() => {
    setToast(prev => ({ ...prev, isVisible: false }));
  }, []);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    let formattedValue = value;

    // Aplicar máscara no telefone
    if (name === 'phone') {
      formattedValue = formatPhone(value);
    }

    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }));

    // Marcar campo como tocado
    setFormTouched(prev => ({
      ...prev,
      [name]: true
    }));
  }, [formatPhone]);

  const handleBlur = useCallback((fieldName: keyof FormTouched) => {
    setFormTouched(prev => ({
      ...prev,
      [fieldName]: true
    }));
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Marcar campos como tocados baseado no modo
    if (isWhatsAppMode) {
      setFormTouched(prev => ({
        ...prev,
        name: true,
        treatment: true
      }));
    } else {
      setFormTouched({
        name: true,
        phone: true,
        email: true,
        treatment: true
      });
    }

    // Se estiver no modo WhatsApp, use o handler específico
    if (isWhatsAppMode) {
      handleWhatsAppSubmit(e);
      return;
    }

    if (!isFormValid) {
      showToast('Por favor, corrige los errores en el formulario antes de enviar.', 'error');
      return;
    }

    setIsLoading(true);

    try {
      // FormData não precisa de um `HTMLFormElement` diretamente
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('treatment', formData.treatment);
      formDataToSend.append('_subject', 'Nueva consulta desde Equilibrio Line');
      formDataToSend.append('_captcha', 'false');
      formDataToSend.append('_template', 'table');
      formDataToSend.append('_autoresponse', 'Gracias por contactarnos. Hemos recibido tu consulta y te responderemos pronto.');


      const response = await fetch('https://formsubmit.co/42cf47a229d2ad960a727fa425d4f40c', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        showToast('¡Gracias! Tu consulta ha sido enviada correctamente. Te responderemos pronto.', 'success');

        // Clear form
        setFormData({
          name: '',
          phone: '',
          email: '',
          treatment: ''
        });

        // Reset touched state
        setFormTouched({
          name: false,
          phone: false,
          email: false,
          treatment: false
        });
      } else {
        showToast('Hubo un error al enviar tu consulta. Por favor, intenta nuevamente.', 'error');
      }
    } catch (error) {
      console.error('Error:', error);
      showToast('Hubo un error al enviar tu consulta. Por favor, intenta nuevamente.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Marcar apenas campos necessários como tocados
    setFormTouched(prev => ({
      ...prev,
      name: true,
      treatment: true
    }));

    // Validar apenas campos necessários para WhatsApp (nome e tratamento)
    const requiredForWhatsApp = {
      name: validateName(formData.name),
      treatment: validateTreatment(formData.treatment)
    };

    if (requiredForWhatsApp.name || requiredForWhatsApp.treatment) {
      showToast('Por favor, completa al menos el nombre y selecciona un tratamiento para continuar.', 'error');
      return;
    }

    const message = `Hola 😊, soy ${formData.name}. Les escribo desde su página web porque estoy interesada en ${formData.treatment}. ¿Podrían darme más información, por favor?`;
    const whatsappUrl = `https://wa.me/34621665635?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');

    setFormData({
      name: '',
      phone: '',
      email: '',
      treatment: ''
    });

    setFormTouched({
      name: false,
      phone: false,
      email: false,
      treatment: false
    });
  };

  // Função para obter classes de estilo baseadas no estado do campo
  const getFieldClasses = useCallback((fieldName: keyof FormErrors) => {
    const hasError = formTouched[fieldName] && formErrors[fieldName];
    const isValid = formTouched[fieldName] && !formErrors[fieldName] && formData[fieldName];

    let baseClasses = "w-full px-3 sm:px-4 py-2 md:py-3 bg-white/10 border rounded-lg text-white placeholder-white/50 focus:outline-none transition-all duration-300 text-sm sm:text-base";

    if (hasError) {
      return `${baseClasses} border-red-400 focus:border-red-400 bg-red-500/10`;
    } else if (isValid) {
      return `${baseClasses} border-green-400 focus:border-green-400 bg-green-500/10`;
    } else {
      return `${baseClasses} border-white/20 focus:border-[var(--cor-dourado-claro)]`;
    }
  }, [formTouched, formErrors, formData]);

  const treatments = allTreatments;

  return (
    <section id="contacto" className="py-16 md:py-32 bg-gradient-to-br from-[var(--cor-charcoal)] via-black to-[var(--cor-charcoal)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-4 md:mb-8 break-words"
            style={{ fontFamily: 'var(--font-adelia)' }}
          >
            Reserva tu Consulta
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "150px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-px bg-gradient-to-r from-transparent via-[var(--cor-dourado-claro)] to-transparent mx-auto mb-4 md:mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed px-2"
          >
            Descubre qué tratamiento se adapta perfectamente a tus necesidades.
            Permítenos crear una experiencia personalizada para ti.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 border border-white/10 overflow-hidden h-fit"
          >
            <div className="text-center mb-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-white break-words mb-4" style={{ fontFamily: 'var(--font-adelia)' }}>
                Formulario de Contacto
              </h3>

              {/* Toggle WhatsApp/Email - Movido para baixo do título */}
              <div className="flex items-center justify-center h-full space-x-4">
                <span className={`text-sm ${!isWhatsAppMode ? 'text-white' : 'text-white/50'}`}>
                  Email
                </span>

                <button
                  type="button"
                  onClick={() => setIsWhatsAppMode(!isWhatsAppMode)}
                  className={`cursor-pointer relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 ${isWhatsAppMode ? 'bg-green-500' : 'bg-yellow-500'
                    }`}
                >
                  <span
                    className={`cursor-pointer flex items-center justify-center h-6 w-6 transform rounded-full bg-white transition-transform duration-300 ${isWhatsAppMode ? 'translate-x-9' : 'translate-x-1'
                      }`}
                  >
                    {isWhatsAppMode ? (
                      <svg className="h-3.5 w-3.5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884z" />
                      </svg>
                    ) : (
                      <svg className="h-3.5 w-3.5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    )}
                  </span>

                </button>

                <span className={`text-sm ${isWhatsAppMode ? 'text-white' : 'text-white/50'}`}>
                  WhatsApp
                </span>
              </div>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4 md:space-y-6">
              {/* Hidden FormSubmit configurations */}
              <input type="hidden" name="_subject" value="Nueva consulta desde Equilibrio Line" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_autoresponse" value="Gracias por contactarnos. Hemos recibido tu consulta y te responderemos pronto." />

              <div className="mb-4">
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Nombre Completo *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('name')}
                    className={getFieldClasses('name')}
                    placeholder="Tu nombre"
                  />
                  {formTouched.name && !formErrors.name && formData.name && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                {formTouched.name && formErrors.name && (
                  <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {formErrors.name}
                  </p>
                )}
              </div>

              {!isWhatsAppMode && (
                <>
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Teléfono *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        onBlur={() => handleBlur('phone')}
                        className={getFieldClasses('phone')}
                        placeholder="Tu número de teléfono (ej: 612 345 678)"
                      />
                      {formTouched.phone && !formErrors.phone && formData.phone && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                    {formTouched.phone && formErrors.phone && (
                      <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {formErrors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Correo Electrónico *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={() => handleBlur('email')}
                        className={getFieldClasses('email')}
                        placeholder="tu@email.com"
                      />
                      {formTouched.email && !formErrors.email && formData.email && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                    {formTouched.email && formErrors.email && (
                      <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                </>
              )}

              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Tratamiento de Interés *
                </label>
                <div className="relative">
                  <select
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('treatment')}
                    className={getFieldClasses('treatment')}
                  >
                    <option value="" className="bg-[var(--cor-charcoal)]">Selecciona un tratamiento</option>
                    {treatments.map((treatment, index) => (
                      <option key={index} value={treatment} className="bg-[var(--cor-charcoal)] break-words">
                        {treatment}
                      </option>
                    ))}
                  </select>
                  {formTouched.treatment && !formErrors.treatment && formData.treatment && (
                    <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                      <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                {formTouched.treatment && formErrors.treatment && (
                  <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {formErrors.treatment}
                  </p>
                )}
              </div>

              <div className="space-y-3">
                {isWhatsAppMode ? (
                  <motion.button
                    type="button" // Mudado para type="button" para evitar submissão do formulário principal
                    onClick={handleWhatsAppSubmit}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 md:py-4 bg-green-600 text-white hover:bg-green-700 transition-all duration-300 text-sm font-medium tracking-wide uppercase rounded-lg shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0024.003 11.89c-.002-6.552-5.437-11.89-12.003-11.89z" />
                    </svg>
                    Contáctanos por WhatsApp
                  </motion.button>
                ) : (
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: isLoading ? 1 : 1.02 }}
                    whileTap={{ scale: isLoading ? 1 : 0.98 }}
                    className={`w-full py-3 md:py-4 transition-all duration-300 text-sm font-medium tracking-wide uppercase rounded-lg shadow-lg flex items-center justify-center gap-2 ${isLoading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-[var(--cor-dourado-claro)] text-white hover:bg-[var(--cor-dourado-escuro)] cursor-pointer'
                      }`}
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        Consultar con un especialista
                      </>
                    )}
                  </motion.button>
                )}
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 border border-white/10 overflow-hidden"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-light text-white mb-4 md:mb-8 break-words" style={{ fontFamily: 'var(--font-adelia)' }}>
              Información de Contacto
            </h3>

            <div className="space-y-4 md:space-y-6">
              {ContactInfoData.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                >
                  <div className="text-[var(--cor-dourado-claro)] mt-1 flex-shrink-0">
                    {info.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-white mb-1 text-sm sm:text-base">{info.label}</p>
                    <p className="text-white/80 text-sm sm:text-base break-words">{info.value}</p>
                    {info.subvalue && (
                      <p className="text-white/60 text-xs sm:text-sm break-words">{info.subvalue}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <Toast
            message={toast.message}
            type={toast.type}
            isVisible={toast.isVisible}
            onClose={hideToast}
          />
        </div>
      </div>
    </section>
  );
}