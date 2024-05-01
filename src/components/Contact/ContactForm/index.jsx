'use client'

import { useForm } from 'react-hook-form'
import { Toaster, toast } from 'sonner'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
}

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 }
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    console.log(data, '1111')
    toast.success('Message sent successfully!', {
      id: 'toastId'
    })
  }

  // console.log(watch('example')) // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <>
      <Toaster richColors={true} />
      <motion.form
        variants={container}
        initial="hidden"
        animate="show"
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md w-full flex flex-col items-center justify-center gap-4"
      >
        {/* register your input into the hook by invoking the "register" function */}
        <motion.input
          variants={item}
          type="text"
          placeholder="name"
          {...register('name', {
            required: 'This field is required!',
            minLength: {
              value: 3,
              message: 'Name should be atleast 3 characters long.'
            }
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.name && (
          <span className="inline-block self-start text-accent">{errors.name.message}</span>
        )}

        {/* include validation with required or other standard HTML validation rules */}
        <motion.input
          variants={item}
          type="email"
          placeholder="email"
          {...register('email', { required: 'This field is required!' })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.email && (
          <span className="inline-block self-start text-accent">{errors.email.message}</span>
        )}

        <motion.textarea
          variants={item}
          placeholder="message"
          {...register('message', {
            required: 'This field is required!',
            maxLength: {
              value: 500,
              message: 'Message should be less than 500 characters'
            },
            minLength: {
              value: 10,
              message: 'Message should be more than 50 characters'
            }
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.message && (
          <span className="inline-block self-start text-accent">{errors.message.message}</span>
        )}

        <motion.input
          variants={item}
          type="submit"
          value="Cast your message!"
          className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid
      hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize
      "
        />
      </motion.form>
    </>
  )
}

export default ContactForm
