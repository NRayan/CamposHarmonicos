/* eslint-disable no-mixed-spaces-and-tabs */
import { CampoHarmonico } from "../types";

export const camposMaiores: CampoHarmonico[] =
	[
		{
			tom: { sigla: "A", maior: true, sustenido: false },
			acordes: ["A", "Bm", "C#m", "D", "E", "F#m", "G#º"]
		},
		{
			tom: { sigla: "B", maior: true, sustenido: false },
			acordes: ["B", "C#m", "D#m", "E", "F#", "G#m", "A#º"]
		},
		{
			tom: { sigla: "C", maior: true, sustenido: false },
			acordes: ["C", "Dm", "Em", "F", "G", "Am", "Bº"]
		},
		{
			tom: { sigla: "D", maior: true, sustenido: false },
			acordes: ["D", "Em", "F#m", "G", "A", "Bm", "C#º"]
		},
		{
			tom: { sigla: "E", maior: true, sustenido: false },
			acordes: ["E", "F#m", "G#m", "A", "B", "C#m", "D#º"]
		},
		{
			tom: { sigla: "F", maior: true, sustenido: false },
			acordes: ["F", "Gm", "Am", "B", "C", "Dm", "Eº"]
		},
		{
			tom: { sigla: "G", maior: true, sustenido: false },
			acordes: ["G", "Am", "Bm", "C", "D", "Em", "Fº"]
		}
	];

export const camposMaioresSustenidos: CampoHarmonico[] =
	[
		{
			tom: { sigla: "A#", maior: true, sustenido: true },
			acordes: ["A#", "Cm", "Dm", "D#", "F", "Gm", "Aº"]
		},
		{
			tom: { sigla: "C#", maior: true, sustenido: true },
			acordes: ["C#", "D#m", "Fm", "F#", "G#", "A#m", "B#º"]
		},
		{
			tom: { sigla: "D#", maior: true, sustenido: true },
			acordes: ["D#", "E#m", "F#m", "G#", "A#", "B#m", "Dº"]
		},
		{
			tom: { sigla: "F#", maior: true, sustenido: true },
			acordes: ["F#", "G#m", "A#m", "B", "C#", "D#m", "E#º"]
		},
		{
			tom: { sigla: "G#", maior: true, sustenido: true },
			acordes: ["G#", "A#m", "Cm", "C#", "D#", "Fm", "Gº"]
		}
	];