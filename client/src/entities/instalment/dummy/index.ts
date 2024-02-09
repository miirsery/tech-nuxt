import {InstalmentTypes} from "#entities/instalment/types";

export const INSTALMENT_DUMMY_DATA: InstalmentTypes.All = [
  {
    id: '8967856',
    images: [
      'https://img10.reactor.cc/pics/post/full/Anime-%D1%84%D1%8D%D0%BD%D0%B4%D0%BE%D0%BC%D1%8B-Ichinose-Shiki-Idolmaster-7471145.jpeg',
      'https://img10.reactor.cc/pics/post/full/Anime-%D1%84%D1%8D%D0%BD%D0%B4%D0%BE%D0%BC%D1%8B-Ichinose-Shiki-Idolmaster-7471145.jpeg'
    ],
    due_amount: '543.02',
    due_date: '2023/08/20', // FIXME: Изменить формат на тот, что будет.
    actual_amount: '543.02',
    payment_date: '2023/08/15',
    status: 'paid',
    total: '1385.52',
  },
  {
    id: '8967857',
    images: [
      'https://img10.reactor.cc/pics/post/full/Anime-%D1%84%D1%8D%D0%BD%D0%B4%D0%BE%D0%BC%D1%8B-Ichinose-Shiki-Idolmaster-7471145.jpeg',
      'https://img10.reactor.cc/pics/post/full/Anime-%D1%84%D1%8D%D0%BD%D0%B4%D0%BE%D0%BC%D1%8B-Ichinose-Shiki-Idolmaster-7471145.jpeg'
    ],
    due_amount: '433.00',
    due_date: '2023/09/20', // FIXME: Изменить формат на тот, что будет.
    actual_amount: null,
    payment_date: null,
    status: 'on-schedule',
    total: '842.50',
  },
  {
    id: '8967858',
    images: [
      'https://img10.reactor.cc/pics/post/full/Anime-%D1%84%D1%8D%D0%BD%D0%B4%D0%BE%D0%BC%D1%8B-Ichinose-Shiki-Idolmaster-7471145.jpeg',
      'https://img10.reactor.cc/pics/post/full/Anime-%D1%84%D1%8D%D0%BD%D0%B4%D0%BE%D0%BC%D1%8B-Ichinose-Shiki-Idolmaster-7471145.jpeg'
    ],
    due_amount: '543.02',
    due_date: '2023/08/20', // FIXME: Изменить формат на тот, что будет.
    actual_amount: null,
    payment_date: null,
    status: 'on-schedule',
    total: '409.50',
  },
]
