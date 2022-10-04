import { Book } from "./book"

export interface List {
    list_name: string,
    list_name_encoded: string,
    books: Book[]
}
