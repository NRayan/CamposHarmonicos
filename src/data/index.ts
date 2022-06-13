import { CampoHarmonico } from "../types";
import { camposMaiores, camposMaioresSustenidos } from "./camposMaiores";
import { camposMenores, camposMenoresSustenidos } from "./camposMenores";

export const camposHarmonicos: CampoHarmonico[] = camposMaiores.concat(camposMaioresSustenidos, camposMenores, camposMenoresSustenidos);
