import { IsNotEmpty, IsString, Length, Matches, IsPositive, Min, Max, IsDate } from "class-validator";

export class CreateBootcampDto {
  // Validación para 'name'
  @IsNotEmpty({ message: 'El nombre no puede estar vacío.' })
  @IsString({ message: 'El nombre debe ser una cadena de texto.' })
  @Matches(/^[A-Za-záéíóúÁÉÍÓÚüÜ\s\-]+$/, { message: 'El nombre solo puede contener letras, espacios y guiones.' })
  @Length(3, 50, { message: 'El nombre debe tener entre 3 y 50 caracteres.' })
  readonly name: string;

  // Validación para 'phone'
  @IsNotEmpty({ message: 'El teléfono no puede estar vacío.' })
  @IsString({ message: 'El teléfono debe ser una cadena de texto.' })
  @Matches(/^\d{10}$/, {
    message: 'El teléfono debe contener exactamente 10 dígitos numéricos, sin espacios ni letras.',
  })
  readonly phone: string;

  // Validación para 'address'
  @IsNotEmpty({ message: 'La dirección no puede estar vacía.' })
  @Length(5, 255, { message: 'La dirección debe tener entre 5 y 255 caracteres.' })
  readonly address: string;

  // Validación para 'topics'
  @IsNotEmpty({ message: 'Los temas no pueden estar vacíos.' })
  @Length(3, 100, { message: 'Los temas deben tener entre 3 y 100 caracteres.' })
  readonly topics: string;

  // Validación para 'averageRating'
  @IsPositive({ message: 'La calificación debe ser un número positivo.' })
  @Min(1, { message: 'La calificación mínima es 1.' })
  @Max(10, { message: 'La calificación máxima es 10.' })
  readonly averageRating: number;

  // Validación para 'createdAt'
  @IsDate({ message: 'La fecha debe ser una fecha válida.' })
  @IsNotEmpty({ message: 'La fecha de creación no puede estar vacía.' })
  @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'La fecha debe tener el formato YYYY-MM-DD.' }) // Formato de fecha
  readonly createdAt: Date;
}
