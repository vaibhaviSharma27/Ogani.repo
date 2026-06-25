const [products, setProducts] = useState([]);

async function fetchProducts(){
    try{
        let response = await fetch(import.meta.env.VITE_BACKEND_HOST+"/products");
        if(!response.ok)
        return toast.error("Could not fetch products at the moment!!",{position:"bottom-center"});

        response = await response.json();
        setProducts(response.message);
        console.log(response);
    }catch(error){
         toast.error("Could not fetch products at the moment!!",{position:"bottom-center"});
    }
}

useEffect(()=>{
    fetchProducts();
},[])

export default function Shop(){

<MainSection products={products}/>

function MainSection({products}){
    return(
        <div>
        {products.map((el)=>(<Link key={el._id} to="/product"><Product item={el}/></Link>))}
        </div>
    )
}
}

function Product({item}){
    return(
        <!-- <div style={{backgroundImage:`url('${import.meta.env.VITE_BACKEND_HOST+"/image/images/"+item.images[0]}')`}}>
        
        <p>{item.category}</p>
        <p>{item.title}</p>
        <p>INR {item.price}</p>
        <del>INR {Number(item.price/80*100).tofixed(2)}</del>
        </div> -->
    )
}

// through this 50 products would be rendered entirely on the screen


// Search thing

async function fetchProducts(searchTerm=""){
    try{
        let response = await fetch(import.meta.env.VITE_BACKEND_HOST+"/products?="+searchTerm);
        if(!response.ok)
        return toast.error("Could not fetch products at the moment!!",{position:"bottom-center"});

        response = await response.json();
        setProducts(response.message);
        console.log(response);
    }catch(error){
         toast.error("Could not fetch products at the moment!!",{position:"bottom-center"});
    }
}
<SearchSection fetchProducts={fetchProducts}/>


function SearchSection({fetchProducts}){
    const [searchInput, setSearchInput] = useState("");

    return(
        
        <input
        value={searchInput}
        onChange={(e)=>{
            setSearchInput(e.target.value)
            fetchProducts(e.target.value)
        }}
        >

        <button onClick={()=>fetchProducts(searchInput)}></button>
    )
}

// CATEGORY PART 

export default function Shop(){

const [selectedCategory, setSelectedCategory] = useState("");

return(
    <>
    <MainSection products={products} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}>
    </>
)
}

function MainSection({products, selectedCategory, setSelectedCategory}){
    return(

        <ul>
         {Array.from(new Set(products.map(product=>product.category))).map((el)=>(
            <li onClick={()=>setSelectedCategory(el)} key={el} className={`"hover:text-[#7fad39] text-[${selectedCategory==el ? "#7fad39": "black"}] cursor-pointer"`}>
            {el}
            </li>
         ))}
        </ul>

        <div>
        {products.filter(product=>product.category.includes(selectedCategory)).map((el)=>(
            <Link key={el._id} to="/product"><Product item={el} /></Link>  
        ))}

        </div>
    )
}
-----------------------------------------------------------------------

export default function Shop() {
    const [categories, setCategories] = useState([]);
      const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([])

    async function fetchProducts(searchTerm="", category=""){
        try{
             if(searchTerm!=="")
             setSelectedCategory("");
             let response = await fetch(`${import.meta.env.VITE_BACKEND_HOST}/products?q=$
             {searchTerm}&category=${category}`);

             if (!response.ok)
             return toast.error("Could not fetch products at the moment!!",{position:"bottom-center"});

             response = await response.json();
             setProducts(response.products);
             setCategories(response.categories);
        }catch(error){
            console.log(error);
            toast.error("Could not fetch products at the moment!!", {position:"bottom-center"});
             
        }
    }
}

useEffect(()=>{
    fetchProducts();
},[])

return(
    <>
    <MainSection products={products} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} categories={categories} fetchProducts={fetchProducts}/>

    function MainSection({products, selectedCategory, setSelectedCategory, categories, fetchProducts}){
        return(
            <ul style={{userSelect:"none"}}>  // basically for preventing cursor pointer thing on text unnecessarily
            {categories.map((el)=>(
                <li onClick={()=>{
                    setSelectedCategory(el);
                    fetchProducts("", el)  // above async function fetchProducts(searchTerm="", category="");// therefore searchTerm= "", category=el;

                }} key={el} className={`"hover:text-[#7fad39] text-[${selectedCategory==el? "#7fad39":"black"}] cursor-pointer"`}>
                {el}
                </li>  
            ))}
            </ul>

            <div>
            {products.map((el) => (
                <Link key={el._id} to={"/product/"+el._id}><Product item={el} /></Link>
            ))}
            </div>
        )

    }


    </>
)

--------------------------------------------------------------------------

const [product, setProduct] = useState({});
const [currentImage, setCurrentImage] = useState("");

async function fetchProduct(productId){
    try{
        let response = await fetch(import.meta.env.VITE_BACKEND_HOST +"/product/" + productId);
        if(!response.ok)
        return toast.error("Could not fetch product!!");

        response = await response.json();
        console.log(response.product);
        setProduct(response.product);
        setCurrentImage(response.product.images[0]);

    }catch(error){
        toast.error("Could not fetch product!!");

    }
}

useEffect(()=>{
    fetchProduct(params.id);
},[]);

return(
    <!-- Main Image -->
    <div>
    <img 
    src={import.meta.env.VITE_BACKEND_HOST+"/image/images/"+currentImage}
    />
    </div>

    <!-- Thumbnail Images -->
    <div>
    {product?.images?.map((name) => (
        <div>
        <img
        onClick={()=>setCurrentImage(name)}
        src={import.meta.env.VITE_BACKEND_HOST+"/image/images/"+name}/>
        </div>
    ))}
)





