import { IsNotEmpty, IsString, IsInt, IsPositive, MaxLength, IsDate, IsEnum, Min, Max, IsNumber } from 'class-validator';
import { minimum_Skill } from './minimum_skill.enum';



export class CreateCourseDto {
  @IsNotEmpty({ message: "El título no debe estar vacío" })
  @IsString({ message: "El título debe ser una cadena de texto" })
  @MaxLength(100, { message: "El título no debe exceder los 100 caracteres" })
  readonly title: string;

  // Validación para 'description'
  @IsNotEmpty({ message: "La descripción no debe estar vacía" })
  @IsString({ message: "La descripción debe ser una cadena de texto" })
  @MaxLength(500, { message: "La descripción no debe exceder los 500 caracteres" })
  readonly description: string;

  @IsNotEmpty({ message: "El número de semanas no debe estar vacío" })
  @IsInt({ message: "El número de semanas debe ser un número entero" })
  @IsPositive({ message: "El número de semanas debe ser un número positivo" })
  @Min(1, { message: "El número de semanas debe ser al menos 1" })
  @Max(52, { message: "El número de semanas no puede exceder las 52 semanas" })
  readonly weeks: number;

  @IsNotEmpty({ message: "La matrícula no debe estar vacía" })
  @IsNumber({}, { message: "La matrícula debe ser un número" })
  @IsPositive({ message: "La matrícula debe ser un número positivo" })
  readonly tuition: number;

  // Validación para 'minimumSkill' (nivel de habilidad)
  @IsNotEmpty({ message: 'El nivel mínimo de habilidad no puede estar vacío.' })
  @IsEnum(minimum_Skill, { message: 'El nivel mínimo de habilidad debe ser uno de los siguientes: Beginner, Intermediate, Advanced.' })
  readonly minimun_skill:  minimum_Skill;

  readonly createdAt: Date;

  // clave foranea
  @IsInt()
  readonly bootcampId:number;



}
