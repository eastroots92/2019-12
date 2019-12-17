import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';

import CreateTicketForm from '.';

export default {
  title: 'Organisms / CreateTicketForm',
};

export const index: React.FC = () => {
  return (
    <CreateTicketForm
      FormInputs={{
        name: {
          invalid: boolean('ticketName', false),
          onChange: action('ticketName onChange'),
        },
        desc: {
          invalid: boolean('ticketDesc', false),
          onChange: action('ticketDesc onChange'),
        },
        price: {
          invalid: boolean('ticketPrice', false),
          onChange: action('ticketPrice onChange'),
        },
        quantity: {
          invalid: boolean('ticketQuantity', false),
          onChange: action('ticketQuantity onChange'),
        },
        isPublicLeftCnt: {
          invalid: boolean('ticketIsPublicLeftCnt', false),
          onClick: action('ticketIsPublicLeftCnt onClick'),
        },
        maxCntPerPerson: {
          invalid: boolean('ticketMaxCntPerPerson', false),
          onChange: action('ticketMaxCntPerPerson onChange'),
        },
        salesDate: {
          invalid: boolean('ticketSalesDate', false),
          handleOnChange: action('ticketSalesDate handleOnChange'),
        },
        refundDate: {
          invalid: boolean('ticketRefundDate', false),
          handleOnChange: action('ticketRefundDate handleOnChange'),
        },
      }}
    />
  );
};
