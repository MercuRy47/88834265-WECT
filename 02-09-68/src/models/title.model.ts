import type { RowDataPacket } from 'mysql2/promise';

export interface Title extends RowDataPacket {
  id: number;
  title: string;
}