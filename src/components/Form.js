import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { sendMessage } from '../services/telegramApi'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import 'react-notifications/lib/notifications.css'

const Form = () => {
  const [error, setError] = useState(null)
  const { t } = useTranslation()

  const { required, name, email, message, success } = t('formValidation', {
    returnObjects: true,
  })
  const { title, nameInput, emailInput, messageInput, submit } = t('form', {
    returnObjects: true,
  })

  const schema = yup
    .object({
      name: yup.string().trim().required(t(required)).min(2, t(name)).max(100),
      email: yup
        .string()
        .email(t(email))
        .required(t(required))
        .max(63)
        .matches(
          /(?!-)^(?:[aA-zZ0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[aA-zZ0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*"){3}@(?:(?:[aA-zZ0-9](?:[aA-zZ0-9-]*[aA-zZ0-9])?\.)+[aA-zZ0-9](?:[aA-zZ0-9-]*[aA-zZ0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[aA-zZ0-9-]*[aA-zZ0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/g,
          t(email)
        ),
      message: yup.string().required(t(required)).min(20, t(message)).max(2000),
    })
    .required()

  const createNotification = () => NotificationManager.success(t(success))

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
    <div className="bg-blue-100 pt-[52px] px-3 md:pt-8 md:px-14 xl:pr-9 pb-5 xl:pl-8 mt-[100px]">
      <h2 className="font-inter font-medium sm:text-lg text-stone-900 mb-8 text-center text-sm">
        {t(title)}
      </h2>
      <form method="POST" name="contact" onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex md:justify-between md:flex-wrap mb-[60px] xl:mb-8 relative md:w-[608px] xl:w-[864px]">
          <input
            className="w-[100%] md:w-[280px] xl:w-[264px] border-b border-stone-900 font-inter font-medium text-sm text-[#9EA2C6] p-2 bg-transparent mb-8 xl:mb-0"
            {...register('name')}
            placeholder={t(nameInput)}
          />

          <input
            className="w-[100%] md:w-[280px] xl:w-[264px] border-b border-stone-900 font-inter font-medium text-sm text-[#9EA2C6] p-2 bg-transparent mb-8 xl:mb-0"
            {...register('email')}
            placeholder={t(emailInput)}
          />

          <input
            className="w-[100%] xl:w-[264px] border-b border-stone-900 font-inter font-medium text-sm text-[#9EA2C6] p-2 bg-transparent"
            {...register('message')}
            placeholder={t(messageInput)}
          />
        </div>
        <div className="md:flex md:justify-between md:flex-wrap absolute md:w-[608px] xl:w-[864px] top-[calc(100%_-_340px)] md:top-[calc(100%_-_278px)] xl:top-[calc(100%_-_118px)] ">
          <p className="w-[100%] md:w-[280px] xl:w-[264px] font-inter font-medium text-xs text-red-500 mb-[52px] xl:mb-0">
            {errors.name?.message}
          </p>
          <p className="w-[100%] md:w-[280px] xl:w-[264px] font-inter font-medium text-xs text-red-500 mb-[52px] xl:mb-0">
            {errors.email?.message}
          </p>
          <p className="w-[100%] xl:w-[264px] font-inter font-medium text-xs text-red-500">
            {errors.message?.message}
          </p>
        </div>

        <button
          className="rounded-[10px] border border-blue-600 block w-[226px] h-14 xl:w-[120px] xl:h-10 font-inter font-semibold text-xs text-blue-600 mx-auto xl:mr-0 transition-all hover:bg-blue-500 focus:bg-blue-500 hover:text-slate-50 focus:text-slate-50  mb-[52px] md:mb-[56px] xl:mb-[12px]"
          type="submit"
        >
          {t(submit)}
        </button>
      </form>
      <p className="font-inter font-medium text-xs text-[#9EA2C6] text-center">
        Copyright © 2022 GoIT. All rights reserved.
      </p>
      <NotificationContainer />
    </div>
  )
}

export default Form
