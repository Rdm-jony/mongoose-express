export interface IBlog{
    title:string,
    content:string,
    category:"personal"|"other",
    text:[
        {
            body:string,
            date:Date
        }
    ]
}