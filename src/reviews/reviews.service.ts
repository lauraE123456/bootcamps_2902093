import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { Bootcamp } from 'src/bootcamps/entities/bootcamp.entity';

@Injectable()
export class ReviewsService {

  constructor(@InjectRepository(Review) private reviewRepository: Repository <Review>,
  @InjectRepository(Bootcamp) private bootcampRepository: Repository <Bootcamp>){

  }
  async create(payload: CreateReviewDto) {
    const {tittle,comment,rating,bootcampId}=payload;
    const bootcampById = await this.bootcampRepository.findOneBy({id:bootcampId})

    const newReview =new Review()
    newReview.tittle=tittle
    newReview.comment=comment
    newReview.rating=rating
    newReview.bootcamp=bootcampById

    return this.reviewRepository.save(newReview)
  }

  findAll() {
    return this.bootcampRepository.find();
  }

  findOne(id: number) {
    return this.reviewRepository.findOneBy({id:id})
  }

  async update(id: number, payload:any) {
    const upReview =await this.reviewRepository.findOneBy({id});
    this.reviewRepository.merge(upReview,payload)
    return this.reviewRepository.save(upReview)
  }

  async remove(id: number) {
    const delCourse =await this.reviewRepository.findOneBy({id})
    this.reviewRepository.delete(delCourse)
    this.reviewRepository.save(delCourse)
  }
}
