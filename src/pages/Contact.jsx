import React from 'react';
import LineGradient from '../components/LineGradient';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

const Contact = () => {
  const {
    register,
    trigger,
    formState: {errors}
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if(!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="py-32">
        {/* HEADERS */}
          <motion.div
              className="flex justify-end w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
              }}
          >
            <div>
              <p className="font-playfair font-semibold text-4xl">
                <span className="text-yellow">CONTACT</span> ME TO <span className="text-red">GET</span> STARTED
              </p>
              <div className="flex md:justify-end my-5">
                <LineGradient width="w-1/2" />
              </div>
            </div>
          </motion.div>

        {/* MAIN */}
        <div className="md:flex md:justify-between gap-16 mt-5">
          <motion.div
            className="basis-1/2 flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
            }}
          >
            <img src="../assets/contact-image.jpeg" alt="contact" className="rounded-lg hover:scale-105 transition duration-500" />
          </motion.div>

          <motion.div
            className="basis-1/2 mt-10 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
            }}
          >
            <form 
              action="https://formsubmit.co/8073a6503b0f60bf306acf25a794660e"
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
            >
              <input 
                className="w-full bg-slate-600 font-semibold p-3 rounded-sm"
                type="text" 
                placeholder="Your Name"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="text-red mt-1">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" && "Max length is 100 char."}
                </p>
              )}

              <input 
                className="w-full bg-slate-600 font-semibold p-3 rounded-sm mt-5"
                type="text" 
                placeholder="Your Email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, // regex for email validation
                })}
              />
              {errors.name && (
                <p className="text-red mt-1">
                  {errors.email.type === "required" && "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <textarea 
                className="w-full bg-slate-600 font-semibold p-3 rounded-sm mt-5"
                type="text" 
                rows="4"
                cols="50"
                placeholder="What do you want to say?"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.name && (
                <p className="text-red mt-1">
                  {errors.message.type === "required" && "This field is required."}
                  {errors.message.type === "maxLength" && "Max length is 2000 char."}
                </p>
              )}

              <button
                type="submit"
                className="p-5 bg-yellow rounded-md font-semibold text-deep-blue mt-5 hover:bg-red
                  hover:text-white transition duration-500"
              >
                SEND ME A MESSAGE
              </button>
            </form>
          </motion.div>
        </div>
    </section>
  )
}

export default Contact;