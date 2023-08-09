import { expectType } from "tsd";

type Foo = string;

expectType<Foo>("");
