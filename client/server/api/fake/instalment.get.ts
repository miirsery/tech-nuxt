import { defineEventHandler } from "h3";
import {INSTALMENT_DUMMY_DATA} from "#entities/instalment";
import {HEADER_CATALOG_DUMMY_DATA} from "#entities/header-catalog";

export default defineEventHandler(() => {
  return {
    data: HEADER_CATALOG_DUMMY_DATA,
    errors: [],
    messages: [],
  }
})
