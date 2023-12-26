import { defineField,defineType } from "sanity";


export default defineType({
    name: "price",
    title: "Price",
    type: "document",
    fields:[

        defineField({
            name:"title",
            title:"title",
            type:"string"
        }),

        defineField({
            name:"price",
            title:"Price",
            type:"number"
        }),
        defineField({
            name: 'taype',
            title: 'Type',
            type: 'array',
            of: [{type: 'reference', to: {type: 'taype'}}],
          }),

    ]

})