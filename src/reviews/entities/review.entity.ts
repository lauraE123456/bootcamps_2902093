import { Entity , Column , PrimaryGeneratedColumn} from "typeorm"

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

}
