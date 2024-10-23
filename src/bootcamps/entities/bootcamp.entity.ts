import { Entity , Column , PrimaryGeneratedColumn} from "typeorm"

@Entity('bootcamps')
export class Bootcamp {
    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar', {length : 20})
    name: string

    @Column('varchar', 
        {length:100, default:"xxx"})
    address: string

    @Column('text')
    topics: string

    @Column('double')
    averageRating: number

    @Column('date')
    createdAt: Date
    
    @Column('varchar', {length: 20})
    phone: string

    
}
