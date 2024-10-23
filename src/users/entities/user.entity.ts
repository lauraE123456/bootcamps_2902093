import { Entity , Column , PrimaryGeneratedColumn} from "typeorm"

@Entity('users')
export class User {
    
@PrimaryGeneratedColumn()
id: number

@Column ('varchar', {length: 20})
name: string

@Column ('varchar', {length: 20})
email: string

@Column ('varchar')
role: string

@Column ('varchar')
password: string

}
