//Definimos una interfaz ya que sol vamos a definir propiedaeds

import { IStat } from "./stat.model";

//pokemon.model.ts: Al ser un modelo asegura que los datos sean correctos
export interface IPokemon {
    id:number;
    name:string;
    type1:string;
    // ? indica q es opcional
    type2?:string;
    sprite:string;
    height:number;
    weight:number;
    abilities:string[];
    hidenAbility?:string;
    stats: IStat[];
    // objeto para trabajar con los stats
    // stats: {
    //     base_stat:number;
    //     name: string;
    // }
    
}
