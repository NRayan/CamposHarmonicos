/* eslint-disable no-mixed-spaces-and-tabs */
import { CampoHarmonico } from "../types";

export const camposMenores: CampoHarmonico[] =
	[
		{
			tom: { sigla: "Am", maior: false, sustenido: false },
			acordes: ["Am", "Bº", "C", "Dm", "Em", "F", "G"]
		},
		{
			tom: { sigla: "Bm", maior: false, sustenido: false },
			acordes: ["Bm", "C#º", "D", "Em", "F#m", "G", "A"]
		},
		{
			tom: { sigla: "Cm", maior: false, sustenido: false },
			acordes: ["Cm", "Dº", "Eb", "Fm", "Gm", "Ab", "Bb"]
		},
		{
			tom: { sigla: "Dm", maior: false, sustenido: false },
			acordes: ["Dm", "Eº", "F", "Gm", "Am", "Bb", "C"]
		},
		{
			tom: { sigla: "Em", maior: false, sustenido: false },
			acordes: ["Em", "F#º", "G", "Am", "Bm", "C", "D"]
		},
		{
			tom: { sigla: "Fm", maior: false, sustenido: false },
			acordes: ["Fm", "Gº", "Ab", "Bbm", "Cm", "Db", "Eb"]
		},
		{
			tom: { sigla: "Gm", maior: false, sustenido: false },
			acordes: ["Gm", "Aº", "Bb", "Cm", "Dm", "Eb", "F"]
		}
	];

export const camposMenoresSustenidos: CampoHarmonico[] =
	[
		{
			tom: { sigla: "A#m", maior: false, sustenido: true },
			acordes: ["A#m", "B#º", "C#", "D#m", "E#m", "F#", "G#"]
		},
		{
			tom: { sigla: "C#m", maior: false, sustenido: true },
			acordes: ["C#m", "D#º", "E", "F#m", "G#m", "A", "B"]
		},
		{
			tom: { sigla: "D#m", maior: false, sustenido: true },
			acordes: ["D#m", "E#º", "F#", "G#m", "A#m", "B", "C#"]
		},
		{
			tom: { sigla: "F#m", maior: false, sustenido: true },
			acordes: ["F#m", "G#º", "A", "Bm", "C#m", "D", "E"]
		},
		{
			tom: { sigla: "G#m", maior: false, sustenido: true },
			acordes: ["G#m", "A#º", "B", "C#m", "D#m", "E", "F#"]
		}
	];