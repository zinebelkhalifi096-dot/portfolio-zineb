import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Formspree integration: replace YOUR_FORM_ID with your Formspree form ID
    // À REMPLACER : remplacer YOUR_FORM_ID par l'identifiant Formspree, ou laisser le fallback mailto
    const formspreeId = ''; // À REMPLACER : ex. 'xrgvkpwn'

    if (formspreeId) {
      fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })
        .then(() => {
          setSent(true);
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setSent(false), 5000);
        })
        .catch(() => {
          // Fallback to mailto
          openMailto();
        });
    } else {
      openMailto();
    }
  };

  const openMailto = () => {
    const subject = encodeURIComponent(`Message de ${formData.name}`);
    const body = encodeURIComponent(
      `Nom : ${formData.name}\nEmail : ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: personalInfo.location,
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-white/50 dark:bg-dark-card/30 relative"
      aria-label="Contact"
    >
      <div className="blob w-72 h-72 bg-mint/40 -bottom-20 -right-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark dark:text-white">
            Contact
          </h2>
          <div className="section-line" />
          <p className="mt-4 text-dark/60 dark:text-gray-400 max-w-lg mx-auto">
            N'hésitez pas à me contacter pour discuter d'un projet, d'un stage ou simplement pour échanger.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              const Wrapper = item.href ? 'a' : 'div';
              const wrapperProps = item.href
                ? { href: item.href, target: item.href.startsWith('mailto') ? undefined : '_blank', rel: 'noopener noreferrer' }
                : {};

              return (
                <motion.div key={index} variants={staggerItem}>
                  <Wrapper
                    {...wrapperProps}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-dark-card shadow-md card-hover border border-dark/5 dark:border-white/5 group"
                  >
                    <div className="p-3 rounded-xl bg-accent/10 dark:bg-dark-accent/15 group-hover:bg-accent/20 dark:group-hover:bg-dark-accent/25 transition-colors">
                      <Icon size={24} className="text-accent dark:text-dark-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-dark/50 dark:text-gray-400">{item.label}</p>
                      <p className="font-medium text-dark dark:text-white">{item.value}</p>
                    </div>
                  </Wrapper>
                </motion.div>
              );
            })}

            {/* Social links */}
            <motion.div variants={staggerItem} className="flex gap-4 pt-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white dark:bg-dark-card shadow-md card-hover border border-dark/5 dark:border-white/5 group"
                aria-label="GitHub"
              >
                <Github size={24} className="text-dark/60 dark:text-gray-400 group-hover:text-accent dark:group-hover:text-dark-accent transition-colors" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white dark:bg-dark-card shadow-md card-hover border border-dark/5 dark:border-white/5 group"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} className="text-dark/60 dark:text-gray-400 group-hover:text-accent dark:group-hover:text-dark-accent transition-colors" />
              </a>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-white dark:bg-dark-card shadow-lg border border-dark/5 dark:border-white/5 space-y-5"
            >
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-dark/70 dark:text-gray-300 mb-2">
                  Nom
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                  className="w-full px-4 py-3 rounded-xl bg-cream dark:bg-dark-bg border border-dark/10 dark:border-white/10 text-dark dark:text-white placeholder:text-dark/30 dark:placeholder:text-gray-500 transition-all"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-dark/70 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="votre@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-cream dark:bg-dark-bg border border-dark/10 dark:border-white/10 text-dark dark:text-white placeholder:text-dark/30 dark:placeholder:text-gray-500 transition-all"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-dark/70 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Votre message..."
                  className="w-full px-4 py-3 rounded-xl bg-cream dark:bg-dark-bg border border-dark/10 dark:border-white/10 text-dark dark:text-white placeholder:text-dark/30 dark:placeholder:text-gray-500 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-gradient px-6 py-3.5 rounded-xl text-white font-semibold flex items-center justify-center gap-2 text-base"
              >
                {sent ? (
                  <>
                    <CheckCircle size={20} />
                    Message envoyé !
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Envoyer le message
                  </>
                )}
              </button>

              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-green-600 dark:text-green-400"
                >
                  Merci ! Votre message a bien été envoyé. ✨
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
