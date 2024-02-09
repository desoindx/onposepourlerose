import Airtable from "airtable";

const airtable = new Airtable();

export const photographes = airtable
  .base(process.env.AIRTABLE_BASE || "")
  .table(process.env.AIRTABLE_TABLE_PHOTOGRAPHES || "");
