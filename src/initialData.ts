import { IList } from '@/types';

export function createInitialLists(): IList[] {
  return [
    {
      id: 1,
      name: 'TODO',
      cards: [
        { id: 1, text: 'タスク1' },
        { id: 2, text: 'タスク2' },
      ],
    },
    {
      id: 2,
      name: '進行中',
      cards: [
        { id: 3, text: 'タスク3' },
        { id: 4, text: 'タスク4' },
        { id: 5, text: 'タスク5' },
      ],
    },
  ];
}
