{
    let addProduct = function() {
        let newProdcutForm =$('#add-product-form');
        newProdcutForm.submit((e)=>{
            e.preventDefault();

            $.ajax({
                type : 'post',
                url : '/api/v1/products/create',
                data : newProdcutForm.serialize(),
                success : function(data) {
                    console.log(data);
                    window.location.href = '/products/add-product'
                }, error: function(error) {
                    console.log(error.responseText);
                }
            })
        });
    }

    addProduct();
}