export enum Tag {
	maiores,
	menores,
	sustenidos
}

export type Acorde = {
	sigla: string,
	maior: boolean,
	sustenido: boolean
}

export type CampoHarmonico = {
	tom: Acorde,
	acordes: string[]
}