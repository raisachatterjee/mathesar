import type {
  FormConfiguration,
  FormValues,
  DynamicInputType,
  Rule,
} from '@mathesar-component-library/types';
import type { DbType } from '@mathesar/App.d';

export interface AbstractTypeResponse {
  name: string;
  identifier: string;
  db_types: DbType[];
}

export interface AbstractTypeDbConfigOptions {
  allowDefault: boolean;
  configuration: {
    form: FormConfiguration;
    determinationRules: {
      resolve: string;
      rule: Rule;
    }[];
    ruleReversalValues: Record<string, FormValues>;
  };
}

export interface AbstractTypeConfiguration {
  defaultDbType?: DbType;
  icon: string;
  input: {
    type: DynamicInputType;
  };
  typeSwitchOptions?: {
    database: AbstractTypeDbConfigOptions;
    display?: {
      form: FormConfiguration;
    };
  };
}

export interface AbstractType
  extends Omit<AbstractTypeResponse, 'db_types'>,
    AbstractTypeConfiguration {
  dbTypes: Set<DbType>;
}

export type AbstractTypesMap = Map<AbstractType['identifier'], AbstractType>;

export interface AbstractTypesSubstance {
  state: States;
  data: AbstractTypesMap;
  error?: string;
}