import { IsNotEmpty, IsString, IsInt, Min, Max } from 'class-validator';

export class CreateReviewDto {
  // Validación para 'tittle' (título)
  @IsNotEmpty({ message: 'El título no puede estar vacío.' })
  @IsString({ message: 'El título debe ser una cadena de texto.' })
  readonly tittle: string;

  // Validación para 'comment' (comentario)
  @IsNotEmpty({ message: 'El comentario no puede estar vacío.' })
  @IsString({ message: 'El comentario debe ser una cadena de texto.' })
  readonly comment: string;

  // Validación para 'rating' (calificación)
  @IsInt({ message: 'La calificación debe ser un número entero.' })
  @Min(1, { message: 'La calificación debe ser al menos 1.' })
  @Max(5, { message: 'La calificación no puede ser mayor a 5.' })
  readonly rating: number;

  readonly bootcampId:number;
}
