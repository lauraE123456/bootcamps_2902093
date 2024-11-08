import { Entity , Column , PrimaryGeneratedColumn, ManyToOne} from "typeorm"
import { Bootcamp } from "src/bootcamps/entities/bootcamp.entity";
@Entity('review')
export class Review {
    @PrimaryGeneratedColumn()
    id: number;

    @Column ({type:'varchar',nullable:false,length:100})
    tittle : string;

    @Column ({type:'text',nullable:false})
    comment : string

    @Column ({type:'tinyint',nullable:false})
    rating : number;

    
   @ManyToOne(type => Bootcamp, (bootcamp) => bootcamp.reviews)
   bootcamp:Bootcamp

   
}
