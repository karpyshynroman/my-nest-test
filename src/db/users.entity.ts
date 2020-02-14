import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('users')
//
export class UsersEntity {
    @PrimaryGeneratedColumn('uuid') id: string;
    @CreateDateColumn() created_at: Date;
    @Column("varchar") email: string;
    @Column("varchar") password: string;
    @Column("varchar") full_name: string;
    @Column("boolean") twoFA: boolean;
    @Column("varchar") phone_number1: string;
    @Column("varchar") phone_number2: string;

}