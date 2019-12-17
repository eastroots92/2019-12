import React, { useContext } from 'react';
import { Btn, CreateEventForm, CreateTicketForm } from 'components';
import EventCreateTemplate from './template';
import { EventAction, TicketAction } from './store';
import { CREATE_EVENT } from 'commons/constants/string';
import {
  validateEmptyAndExceedMaximumLength,
  validateIsNotEmptyString,
} from 'utils/validateInput';
import { SearchMapResult } from 'types/Data';

function EventCreateView(): React.ReactElement {
  const eventFormDispatcher = useContext(EventAction);
  const ticketFormDispatcher = useContext(TicketAction);
  const CreateFormInputs = {
    isPublic: {
      onClick: (
        _e: React.MouseEvent<HTMLDivElement, MouseEvent>,
        isChecked?: boolean,
      ) => {
        if (typeof isChecked === 'boolean') {
          eventFormDispatcher({
            type: 'isPublic',
            value: {
              valid: true,
              value: isChecked,
            },
          });
        }
      },
    },
    title: {
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        eventFormDispatcher({
          type: 'title',
          value: {
            valid: validateEmptyAndExceedMaximumLength(value),
            value,
          },
        });
      },
    },
    date: {
      handleOnChange: ({
        startAt,
        endAt,
        valid,
      }: {
        startAt: string;
        endAt?: string;
        valid: boolean;
      }) => {
        eventFormDispatcher({
          type: 'date',
          value: {
            valid,
            value: {
              startAt,
              endAt,
            },
          },
        });
      },
    },
    place: {
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        eventFormDispatcher({
          type: 'place',
          value: {
            valid: validateEmptyAndExceedMaximumLength(value),
            value,
          },
        });
      },
    },
    placeDesc: {
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        eventFormDispatcher({
          type: 'placeDesc',
          value: {
            valid: validateEmptyAndExceedMaximumLength(value),
            value,
          },
        });
      },
    },
    address: {
      handleOnChange: ({ address, latitude, longitude }: SearchMapResult) => {
        eventFormDispatcher({
          type: 'address',
          value: {
            valid: true,
            value: { address, latitude, longitude },
          },
        });
      },
    },
    mainImg: {
      onChange: (data?: string, file?: File) => {
        if (!file || !data) return;
        eventFormDispatcher({
          type: 'mainImg',
          value: {
            valid: true,
            value: file,
          },
        });
      },
    },
    desc: {
      onChange: (value: string) => {
        eventFormDispatcher({
          type: 'desc',
          value: {
            valid: validateIsNotEmptyString(value),
            value,
          },
        });
      },
    },
  };

  const CreateTicketInputs = {
    name: {
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        ticketFormDispatcher({
          type: 'name',
          value: {
            valid: validateEmptyAndExceedMaximumLength(value),
            value,
          },
        });
      },
    },
    desc: {
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        ticketFormDispatcher({
          type: 'desc',
          value: {
            valid: validateEmptyAndExceedMaximumLength(value),
            value,
          },
        });
      },
    },
    price: {
      handleOnChange: (value: string) => {
        ticketFormDispatcher({
          type: 'price',
          value: {
            valid: validateIsNotEmptyString(value),
            value: value,
          },
        });
      },
    },
    quantity: {
      handleOnChange: (value: string) => {
        ticketFormDispatcher({
          type: 'quantity',
          value: {
            valid: validateIsNotEmptyString(value),
            value: value,
          },
        });
      },
    },
    isPublicLeftCnt: {
      onClick: (
        _e: React.MouseEvent<HTMLDivElement, MouseEvent>,
        isChecked?: boolean,
      ) => {
        if (isChecked === true || isChecked === false) {
          ticketFormDispatcher({
            type: 'isPublicLeftCnt',
            value: {
              valid: true,
              value: isChecked,
            },
          });
        }
      },
    },
    maxCntPerPerson: {
      handleOnChange: (value: string) => {
        ticketFormDispatcher({
          type: 'maxCntPerPerson',
          value: {
            valid: validateIsNotEmptyString(value),
            // && validateIsSameOrLower(+value, +ticketQuantity),
            value,
          },
        });
      },
    },
    salesDate: {
      handleOnChange: ({
        startAt,
        endAt,
        valid,
      }: {
        startAt: string;
        endAt?: string;
        valid: boolean;
      }) => {
        if (!endAt) return;
        ticketFormDispatcher({
          type: 'salesDate',
          value: {
            valid,
            value: {
              salesStartAt: startAt,
              salesEndAt: endAt,
            },
          },
        });
      },
    },
    refundDate: {
      handleOnChange: ({
        startAt,
        valid,
      }: {
        startAt: string;
        valid: boolean;
      }) => {
        ticketFormDispatcher({
          type: 'refundDate',
          value: {
            valid,
            value: {
              refundEndAt: startAt,
            },
          },
        });
      },
    },
  };
  const Button = {
    children: CREATE_EVENT,
    styletype: 'primary',
    grow: true,
    onClick: () => console.log('button click'),
    // onClick: () => dispatcher({ type: 'submit', value: true }),
  };
  return (
    <EventCreateTemplate
      loading={false}
      eventCreateHeader={
        <>
          이벤트 주최하기 <br />
          새로운 이벤트를 주최하기 위해선 다음 단계들이 필요해요! <br />
          이벤트를 만들면 바로 게시됩니다.
        </>
      }
      createEventForm={<CreateEventForm FormInputs={CreateFormInputs} />}
      createTicketForm={<CreateTicketForm FormInputs={CreateTicketInputs} />}
      createBtn={<Btn {...Button} />}
    />
  );
}

export default EventCreateView;
