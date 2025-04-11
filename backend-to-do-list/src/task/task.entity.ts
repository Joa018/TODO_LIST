import 'reflect-metadata'; 
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    title: string;

    @Column('boolean', { default: false })
    completed: boolean;
    
    @Column('text', { default: '' })
    describe: string;    
    
    @CreateDateColumn()
    createAt: Date;
}