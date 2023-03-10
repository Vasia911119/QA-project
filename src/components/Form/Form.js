import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import * as yup from 'yup';
import { sendMessage } from '../../api/telegramApi';
import * as s from './Form.module.css';

export const Form = () => {
  const [error, setError] = useState(null);
  const { t } = useTranslation();

  const {
    required,
    name,
    nameMin,
    nameMax,
    email,
    emailMax,
    messageMin,
    messageMax,
    success,
  } = t('formValidation', {
    returnObjects: true,
  });
  const { title, nameInput, emailInput, messageInput, submit } = t('form', {
    returnObjects: true,
  });
  const { form } = t('aria-labels', {
    returnObjects: true,
  });

  const schema = yup
    .object({
      name: yup
        .string()
        .trim()
        .required(t(required))
        .min(2, t(nameMin))
        .max(100, t(nameMax))
        .matches(
          /^[а-яА-ЯёЁa-zA-ZіІїЇґҐєЄ]+(([ʼ’'` -][а-яА-ЯёЁa-zA-ZіІїЇґҐєЄ ])?[а-яА-ЯёЁa-zA-ZіІїЇґҐєЄ]*)*$/,
          t(name)
        ),
      email: yup
        .string()
        .email(t(email))
        .required(t(required))
        .max(63, t(emailMax))
        .matches(
          /(?!-)^(?:[aA-zZ0-9_-]+(?:\.[aA-zZ0-9_-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*"){3}@(?:(?:[aA-zZ0-9](?:[aA-zZ0-9-]*[aA-zZ0-9])?\.)+[aA-zZ0-9](?:[aA-zZ0-9-]*[aA-zZ0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[aA-zZ0-9-]*[aA-zZ0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/g,
          t(email)
        ),
      message: yup
        .string()
        .required(t(required))
        .min(20, t(messageMin))
        .max(2000, t(messageMax)),
    })
    .required();

  const createNotification = () => NotificationManager.success(t(success));
  const createNotificationError = () =>
    NotificationManager.error('error in API');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data, e) => {
    try {
      e.preventDefault();
      // --- TELEGRAM ---
      let text = `<b>Повідомлення з сайту!</b>\n`;
      text += `<b>Відправник: </b> ${data.name}\n`;
      text += `<b>Пошта: </b> ${data.email}\n`;
      text += `<b>Повідомлення: </b> ${data.message}\n`;
      text += `<b>Форма отримана з:</b>\n`;
      text += `<a href="https://xxx.netlify.app/">https://xxx.netlify.app/</a>`;
      const res = sendMessage(text);
      res.then(res => {
        res?.data.ok ? createNotification() : createNotificationError();
      });
      reset();
    } catch (error) {
      setError(true);
    } finally {
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <div className={s.mainWrapper}>
      <div className={s.wrapper}>
        <h2 className={s.title}>{t(title)}</h2>
        <form method="POST" name="contact" onSubmit={handleSubmit(onSubmit)}>
          <div className={s.wrapperInputs}>
            <input
              className={errors.name === undefined ? s.input : s.inputRed}
              {...register('name')}
              placeholder={t(nameInput)}
            />

            <input
              className={errors.email === undefined ? s.input : s.inputRed}
              {...register('email')}
              placeholder={t(emailInput)}
            />

            <input
              className={
                errors.message === undefined ? s.textarea : s.textareaRed
              }
              {...register('message')}
              placeholder={t(messageInput)}
            />
          </div>
          <div className={s.wrapperErrorMsg}>
            <p className={s.errorMsg}>{errors.name?.message}</p>
            <p className={s.errorMsg}>{errors.email?.message}</p>
            <p className={s.errorMsgTextarea}>{errors.message?.message}</p>
          </div>

          <button aria-label={t(form)} className={s.button} type="submit">
            {t(submit)}
          </button>
        </form>
        <p className={s.text}>
          Copyright © {new Date().getFullYear()} GoIT. All rights reserved.
        </p>
        <NotificationContainer />
      </div>
    </div>
  );
};
