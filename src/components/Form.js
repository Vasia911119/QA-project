import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { sendMessage } from '../services/telegramApi'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import 'react-notifications/lib/notifications.css'

const schema = yup
  .object({
    name: yup.string().trim().required().min(3).max(100),
    email: yup
      .string()
      .email()
      .required()
      .max(63)
      .matches(
        /(?!-)^(?:[aA-zZ0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[aA-zZ0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*"){3}@(?:(?:[aA-zZ0-9](?:[aA-zZ0-9-]*[aA-zZ0-9])?\.)+[aA-zZ0-9](?:[aA-zZ0-9-]*[aA-zZ0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[aA-zZ0-9-]*[aA-zZ0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/g,
        'only Latin letters and min 3 letters before @'
      ),
    message: yup.string().required().min(20).max(2000),
  })
  .required()

const createNotification = () =>
  NotificationManager.success('Повідомлення відправлено')

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
      createNotification()
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
    <div className="w-[753px] ml-auto">
      <h2 className="font-inter font-medium text-lg text-stone-900 mb-[27px]">
        Залишились питання чи є пропозиії, повідом нам.
      </h2>
      <form
        className=""
        method="POST"
        name="contact"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-between">
          <input
            className="w-[165px] border-b border-stone-900 font-inter font-medium text-sm text-[#9EA2C6] p-2"
            {...register('name')}
            placeholder="Ім’я"
          />

          <input
            className="w-[165px] border-b border-stone-900 font-inter font-medium text-sm text-[#9EA2C6] p-2"
            {...register('email')}
            placeholder="Email"
          />

          <input
            className="w-[287px] border-b border-stone-900 font-inter font-medium text-sm text-[#9EA2C6] p-2"
            {...register('message')}
            placeholder="Залиште коментар..."
          />
        </div>
        <div className="flex justify-between">
          <p className="w-[165px] font-inter font-medium text-xs text-red-500">
            {errors.name?.message}
          </p>
          <p className="w-[165px] font-inter font-medium text-xs text-red-500">
            {errors.email?.message}
          </p>
          <p className="w-[287px] font-inter font-medium text-xs text-red-500">
            {errors.message?.message}
          </p>
        </div>

        <button
          className="rounded-[10px] border border-blue-600 block w-[120px] h-8 font-inter font-semibold text-xs text-blue-600 ml-auto transition-all hover:border-red-500 hover:text-red-500"
          type="submit"
        >
          Надіслати
        </button>
      </form>
      <NotificationContainer />
    </div>
  )
}

export default Form
