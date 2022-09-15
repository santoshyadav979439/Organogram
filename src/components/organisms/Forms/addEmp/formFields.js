export const FIELDS = {
  ID: "id",
  NAME: "name",
  DESIGNATION: "designation",
  ADMINISTRATIVE_MANAGER: "administrativeManager",
  FUNCTIONAL_MANAGER: "functionalManager",
  PROJECTS: "projects",
};

export const VALIDATION_SCHEMA = {
  [FIELDS.ID]: {
    isRequired: true,
    message: "Required Field",
  },
  [FIELDS.NAME]: {
    isRequired: true,
    message: "Required Field",
  },
  [FIELDS.DESIGNATION]: {
    isRequired: true,
    message: "Required Field",
  },
  [FIELDS.ADMINISTRATIVE_MANAGER]: {
    isRequired: true,
    message: "Required Field",
  },
  [FIELDS.FUNCTIONAL_MANAGER]: {
    isRequired: true,
    message: "Required Field",
  },
  [FIELDS.PROJECTS]: {
    isRequired: true,
    message: "Required Field",
  },
};