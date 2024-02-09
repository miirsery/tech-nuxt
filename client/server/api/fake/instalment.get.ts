import { defineEventHandler } from "h3";
import {INSTALMENT_DUMMY_DATA} from "#entities/instalment/dummy";

export default defineEventHandler(() => {
  return {
    data: INSTALMENT_DUMMY_DATA,
    errors: [],
    messages: [],
  }
})
