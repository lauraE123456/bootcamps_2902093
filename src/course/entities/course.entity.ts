import { Entity , Column , PrimaryGeneratedColumn} from "typeorm"

@Entity('course')
export class course {
    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar', {length : 20})
    name: string

   @Column ('varchar', {length: 30})
   minimunSkill: minimumSkill

}
enum minimumSkill {
    'Biginner',
    'Intermediate',
    'advance'
}
