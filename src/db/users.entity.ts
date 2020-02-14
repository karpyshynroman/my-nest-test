import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('users')
//
export class UsersEntity {
    @PrimaryGeneratedColumn('uuid') id: string;
    @CreateDateColumn() created_at: Date;
    @Column() email: string;
    @Column() password: string;
    @Column() full_name: string;
    @Column() twoFA: boolean;
    @Column() phone_number1: string;
    @Column() phone_number2: string;
}