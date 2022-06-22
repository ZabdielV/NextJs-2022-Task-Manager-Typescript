

-- iniciar sesion:

-- psql -U postgres

-- cambiar a base de datos;
-- \c horariosdb;
-- \l


CREATE DATABASE horariosdb;




\c horariosdb;




CREATE TABLE IF NOT EXISTS usuario(
    idUsuario SERIAL PRIMARY KEY,
    nombre VARCHAR(100) UNIQUE NOT NULL,
    username VARCHAR(100) UNIQUE NOT NULL,
    passwordd VARCHAR(100)  NOT NULL
);

CREATE TABLE IF NOT EXISTS Horario(
    actividad VARCHAR(100)  NOT NULL ,
    fecha VARCHAR(100) UNIQUE NOT NULL,
    idusuario SERIAL ,
    hora VARCHAR(100) NOT NULL,
    primary key(idusuario,fecha),
   CONSTRAINT fk_usuario
      FOREIGN KEY(idusuario) 
	  REFERENCES usuario(idUsuario)
);





INSERT INTO usuario(nombre,username,passwordd) VALUES ('admin','admin','admin');


INSERT INTO usuario(nombre,username,passwordd) VALUES ('luis','luis','1234');


INSERT INTO usuario(nombre,username,passwordd) VALUES ('zab','zab','');


INSERT INTO horario(actividad,fecha,idusuario,hora) VALUES ('estudiar','1 de marzo del 2022',2,'10 am-11 am');
INSERT INTO horario(actividad,fecha,idusuario,hora) VALUES ('caminar','2 de marzo del 2022',2,'10 am-11 am');




delete from horario where horario='' and fecha ='' and idusuario=2;

DELETE FROM horario WHERE fecha = '2022-0513' and idusuario=2 and hora='10 am-11 am';

select fecha,hora,actividad from horario where idusuario=2;





