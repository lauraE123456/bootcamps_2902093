import { IsNotEmpty, IsString, IsEmail, IsEnum, MinLength, Length } from 'class-validator';

enum Role {
  'usuario' = 'usuario',
  'editor' = 'editor',
  'administrador' = 'administrador'
}

export class CreateUserDto {
  // Validación para 'name' (nombre)
  @IsNotEmpty({ message: 'El nombre no puede estar vacío.' })
  @IsString({ message: 'El nombre debe ser una cadena de texto.' })
  @Length(3, 50, { message: 'El nombre debe tener entre 3 y 50 caracteres.' })  // Longitud mínima de 3 caracteres y máxima de 50
  readonly name: string;

  // Validación para 'email' (correo electrónico)
  @IsNotEmpty({ message: 'El correo electrónico no puede estar vacío.' })
  @IsEmail({}, { message: 'El correo electrónico debe tener un formato válido.' })  // Valida un correo electrónico
  readonly email: string;

  // Validación para 'role' (rol de usuario)
  @IsNotEmpty({ message: 'El rol no puede estar vacío.' })
  @IsEnum(Role, { message: 'El rol debe ser uno de los siguientes: usuario, editor, administrador.' })  // Validación para el enum
  readonly role: Role;

  // Validación para 'password' (contraseña)
  @IsNotEmpty({ message: 'La contraseña no puede estar vacía.' })
  @IsString({ message: 'La contraseña debe ser una cadena de texto.' })
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres.' })  // Longitud mínima de 6 caracteres
  readonly password: string;
}
