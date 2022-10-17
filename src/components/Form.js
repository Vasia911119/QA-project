import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { sendMessage } from '../services/telegramApi'

const schema = yup
  .object({
    name: yup.string().trim().required().min(3).max(100),
    email: yup.string().email().required(),
    message: yup.string().required().min(10).max(2000),
  })
  .required()

const Form = () => {
  const [error, setError] = useState(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data, e) => {
    try {
      e.preventDefault()
      // --- TELEGRAM ---
      let text = `<b>Повідомлення з сайту!</b>\n`
      text += `<b>Відправник: </b> ${data.name}\n`
      text += `<b>Пошта: </b> ${data.email}\n`
      text += `<b>Повідомлення: </b> ${data.message}\n`
      text += `<b>Форма отримана з:</b>\n`
      text += `<a href="https://xxx.netlify.app/">https://xxx.netlify.app/</a>`
      await sendMessage(text)
      reset()
    } catch (error) {
      console.log(error)
      setError(true)
    } finally {
      setTimeout(() => {
        setError(false)
      }, 3000)
    }
  }

  return (
    <form
      className="bg-orange-300 w-60 m-auto py-11"
      method="POST"
      name="contact"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="rounded border-2 border-blue-600 mx-auto block"
        {...register('name')}
      />
      <p>{errors.name?.message}</p>

      <input
        className="rounded border-2 border-blue-600 mx-auto block"
        {...register('email')}
      />
      <p>{errors.email?.message}</p>

      <textarea
        className="rounded border-2 border-blue-600 mx-auto block"
        {...register('message')}
      />
      <p>{errors.message?.message}</p>

      <button className="rounded bg-blue-600 w-30 mx-auto block" type="submit">
        Відправити
      </button>
    </form>
  )
}

export default Form
