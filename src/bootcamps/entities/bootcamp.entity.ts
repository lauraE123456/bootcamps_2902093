import { Review } from './../../reviews/entities/review.entity';
import { Entity , Column , PrimaryGeneratedColumn, OneToMany} from "typeorm"
import { Course } from "src/course/entities/course.entity"

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

    @Column('varchar', {length: 20})
    phone: string
    
    @Column({type:'timestamp',
        name:'create_at',
        default:()=>'CURRENT_TIMESTAMP'})
    createdAt: Date;

    @OneToMany(()=> Course,(course)=>course.bootcamp)
   courses: Course[]

   @OneToMany(()=> Review,(review)=>review.bootcamp)
   reviews: Review[];

}
