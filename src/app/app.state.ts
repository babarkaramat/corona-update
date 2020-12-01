import { AdmitModel } from './models/admit.model';
import { CasesModel,  } from './models/cases.model';
import { DeathModel } from './models/death.model';
import { TestModel } from './models/test.model';

export interface AppState {
  readonly cases: CasesModel[];
  readonly death: DeathModel[];
  readonly admit: AdmitModel[];
  readonly test: TestModel[];

}
