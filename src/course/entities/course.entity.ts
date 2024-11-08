import { Bootcamp } from "src/bootcamps/entities/bootcamp.entity";
import { Entity , Column , PrimaryGeneratedColumn, ManyToOne} from "typeorm"

@Entity('course')
export class Course {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type:'varchar',length : 20,nullable:true})
    title: string;
    
    @Column({type:'varchar',length : 20,nullable:true})
    description: string;

    @Column({type:'tinyint',nullable: true, default: 4})
    weeks:number;

    @Column({type:'decimal',nullable: true})
    tuition:number;

   @Column ({name:'minimun_skill',
            type:'enum',
            enum:['Beginner','Intermediate','Advanced'],
            })
   minimunSkill: minimumSkill;

   @Column({type:'timestamp',
            name:'create_at',
            default:()=>'CURRENT_TIMESTAMP'})
   createdAt: Date

   @ManyToOne(type =>Bootcamp,(bootcamp) =>bootcamp.courses)
   bootcamp: Bootcamp

}
enum minimumSkill {
    'Beginner',
    'Intermediate',
    'Advanced'
}
