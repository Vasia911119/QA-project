import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { sendMessage } from '../../api/telegramApi';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import * as s from './Form.module.css';

const Form = () => {
  const [error, setError] = useState(null);
  const { t } = useTranslation();

  const { required, name, email, message, success } = t('formValidation', {
    returnObjects: true,
  });
  const { title, nameInput, emailInput, messageInput, submit } = t('form', {
    returnObjects: true,
  });

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

          <button aria-label="submit form" className={s.button} type="submit">
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

export default Form;
