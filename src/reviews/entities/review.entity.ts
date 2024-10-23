import { Entity , Column , PrimaryGeneratedColumn} from "typeorm"

@Entity('Review')
export class Review {
    @PrimaryGeneratedColumn()
    id: number;

    @Column ('varchar')
    tittle : string

    @Column ('varchar')
    comment : string

    @Column ('number')
    rating : number

}
