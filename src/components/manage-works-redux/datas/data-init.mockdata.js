import { v4 as uuidv4 } from 'uuid';

export const DATA_INIT = [
    { id: uuidv4(), name: 'Đi học', status: false},
    { id: uuidv4(), name: 'Đi làm', status: false},
    { id: uuidv4(), name: 'Shoping', status: true},
    { id: uuidv4(), name: 'Đi ngủ', status: true},
];