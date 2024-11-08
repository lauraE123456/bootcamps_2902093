import { IsNotEmpty, IsString, IsInt, Min, IsDecimal, IsEnum, IsDate, Matches, IsPositive } from 'class-validator';

enum MinimumSkill {
  'Beginner' = 'Beginner',
  'Intermediate' = 'Intermediate',
  'Advanced' = 'Advanced'
}

export class CreateCourseDto {
  // Validación para 'title'
  @IsNotEmpty({ message: 'El título no puede estar vacío.' })
  @IsString({ message: 'El título debe ser una cadena de texto.' })
  readonly title: string;

  // Validación para 'description'
  @IsNotEmpty({ message: 'La descripción no puede estar vacía.' })
  @IsString({ message: 'La descripción debe ser una cadena de texto.' })
  readonly description: string;

  // Validación para 'weeks'
  @IsNotEmpty({ message: 'El número de semanas no puede estar vacío.' })
  @IsInt({ message: 'El número de semanas debe ser un número entero.' })
  @Min(1, { message: 'El número de semanas debe ser al menos 1.' })
  readonly weeks: number;

  // Validación para 'tuition' (matrícula)
  @IsNotEmpty({ message: 'La matrícula no puede estar vacía.' })
  @Matches(/^\d+(\.\d{1,2})?$/, { message: 'La matrícula debe ser un número decimal con hasta 2 decimales.' })
  @IsPositive({ message: 'La matrícula debe ser un número positivo.' })
  readonly tuition: number;

  // Validación para 'minimumSkill' (nivel de habilidad)
  @IsNotEmpty({ message: 'El nivel mínimo de habilidad no puede estar vacío.' })
  @IsEnum(MinimumSkill, { message: 'El nivel mínimo de habilidad debe ser uno de los siguientes: Beginner, Intermediate, Advanced.' })
  readonly minimumSkill: MinimumSkill;

  // Validación para 'createdAt' (fecha de creación)
  @IsNotEmpty({ message: 'La fecha de creación no puede estar vacía.' })
  @IsDate({ message: 'La fecha de creación debe ser una fecha válida.' })
  @Matches(/^(?!.*\b(?:[0-9]{4}-[0-9]{2}-[0-9]{2})\b.*?$).*$/, { message: 'La fecha de creación no puede ser en el futuro.' })
  readonly createdAt: Date;
}
