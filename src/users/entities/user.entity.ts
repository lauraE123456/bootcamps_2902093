import { Entity , Column , PrimaryGeneratedColumn} from "typeorm"

@Entity('users')
export class User {
    
@PrimaryGeneratedColumn()
id: number

@Column ('varchar', {length: 20})
name: string

@Column ('varchar', {length: 20})
email: string

@Column ({name:'role',
            type:'enum',
            enum:['usuario','editor','administrador']})
role: role;

@Column ('varchar')
password: string

}
enum role{
    'usuario','editor','administrador'
}
