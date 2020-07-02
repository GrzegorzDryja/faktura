import { Client } from "https://deno.land/x/mysql/mod.ts";
// config
import { DATABASE, TABLES } from "./config.ts";

const client = new Client();

client.connect({
  hostname: "127.0.0.1",
  username: "root",
  password: "",
  db: "",
});

export default client;
