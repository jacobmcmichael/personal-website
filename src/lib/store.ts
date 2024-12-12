import { writable, type Writable } from "svelte/store";

// eslint-disable-next-line prefer-const
export let theme: Writable<string> = writable("light");
