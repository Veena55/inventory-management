{
    let allProduct = function() {
            $.ajax({
                type : 'get',
                url : '/api/v1/products',
                success : function(data) {
                    console.log(data);


                    let allProductList = data.products.map((product,key)=>{
                        return $(`
                        <tr>
                            <td>${key++}</td>
                            <td>${product.name } </td>
                            <td>${product.quantity } </td>
                            <td>${product.createdAt } </td>
                            <td>
                            <a href="/api/v1/products/delete/${product._id}" class="text-danger p-2 border border-danger btn mx-2"><i class="fas fa-trash"></i></a>
                            <a href="/api/v1/products/update/${product._id}" class="text-primary p-2 border border-primary btn"><i class="fas fa-pencil"></i></a></td>
                        </tr>
                         `)
                    });
                  console.log(allProductList);
                    $('#all-product-list').html(allProductList)
                }, error: function(error) {
                    console.log(error.responseText);
                }
            })
        }
        allProduct();    
}