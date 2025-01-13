table
    product
        id (pk)
        create time (DateTime)
        update time (DateTime)
        name (varchar)
        img
        description

table
    order
        id (pk)
        create time (DateTime)
        update time (DateTime)
        order status (varchar)
        order number (number)
        product id (number)
        