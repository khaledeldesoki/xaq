import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { sendPayment } from '../utils/solana';
import './PaymentForm.css';

const PaymentForm = () => {
  const validationSchema = Yup.object({
    recipient: Yup.string()
      .required('Recipient address is required')
      .matches(/^[A-Za-z0-9+\/=]{43,44}$/, 'Invalid Solana address'),
    amount: Yup.number()
      .required('Amount is required')
      .positive('Amount must be positive')
      .integer('Amount must be an integer'),
  });

  return (
    <div className="payment-form">
      <Formik
        initialValues={{ recipient: '', amount: '' }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, setStatus }) => {
          try {
            await sendPayment(values.recipient, values.amount);
            setStatus({ success: `Successfully sent ${values.amount} to ${values.recipient}` });
          } catch (error) {
            setStatus({ error: `Failed to send payment: ${error.message}` });
          }
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, status }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="recipient">Recipient Address</label>
              <Field type="text" name="recipient" />
              <ErrorMessage name="recipient" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="amount">Amount</label>
              <Field type="number" name="amount" />
              <ErrorMessage name="amount" component="div" className="error" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Send Payment
            </button>
            {status && status.success && <div className="success">{status.success}</div>}
            {status && status.error && <div className="error">{status.error}</div>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PaymentForm;