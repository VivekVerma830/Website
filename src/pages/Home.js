const { useSelector, useDispatch } = require("react-redux")



const Home=()=>{
    const mycart= useSelector((state)=> state.addtocart);
    console.log(mycart);
    const dispatch= useDispatch();
    const mydataAdd=(id,name,detail,image,price)=>{
        let productObj={id:id, name:name, detail:detail, image:image, price:price, quantity:1};
        despatch(addData(productObj));
        
    };
    
    const proAns=product.map((key)=>{
        return(
            <>
            <div className="cartData">
                <img src={"images/"+ key.image} style={{width:"300px", height:"200px"}} />
                <br/>
                <h2>{key.name}</h2>
                <h3>Detail: <span style={{color:"orange", fontWeight:"100"}}>{key.detail}</span></h3>

                <div className="productprice">
                    price: {key.price}$<br/>
                </div>
                 <br/>
                 <button onClick={() =>{mydataAdd(key.id, key.name, key.detail, key.image, key.price)}} >ADD TO CART</button>
            </div>
            </>
        );
    });
    return (
        <>
        <div id="topbanner">
            <div id="biglogo">
                <span style={{color:"pink", fontSize:"30px"}}>
                    we provide new collection</span>
                    <br/>
                    Welcome To  Our Store!
            </div>
            <div id="slider">
                <img src={myimg} style={{height:"270px", width:"600px", borderRadius:"10px"}}/>
                </div>
            <div>
                <hr size="1" color="green"/>
<div className="mainheading">
<h1>our products</h1>
</div>
            </div>
        </div>
        </>
)}
