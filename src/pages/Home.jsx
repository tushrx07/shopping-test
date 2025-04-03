import { useContext, useEffect, useState } from "react";
import CartContext from "../context/CartContext";


const Home = () => {
  let ctx = useContext(CartContext)
  console.log(ctx);

  let searchValue = ctx.searchValue
  console.log(searchValue);
  
  
  const [allData, setallData] = useState([]);
  console.log(allData);

  async  function getAlldata(){
    let res = await fetch('https://dummyjson.com/products?limit=0')
    let data = await res.json()
    // console.log(data);
    setallData(data.products)
   }

   //************************************************* */ Pagination Part starts here ***************************************************

   const [currentPage, setcurrentPage] = useState(1);
   let itemPerPage = 8;
   let lastIndex = itemPerPage * currentPage ;
   let firstIndex = lastIndex - itemPerPage ;

  // console.log(setsearchValue);
  
  let filteredArr = allData.filter((ele)=>ele.title.toLowerCase().includes(searchValue) || ele.category.toLowerCase().includes(searchValue))
  console.log(filteredArr);

   let slicedArr = filteredArr.slice(firstIndex,lastIndex);
   console.log(slicedArr);

   let totalBtn = Math.ceil(filteredArr.length / itemPerPage)
  //  console.log(totalBtn);

  //  let btnArr = [];
  //  for (let i=1 ; i<=totalBtn; i++){
  //   btnArr.push(i)
  //  }


    useEffect(()=>{
    getAlldata()
  },[])

  function handleNext(){
    if( currentPage< totalBtn){

      setcurrentPage(currentPage+1)
    }


  }
  function handlePrev(){
    if( currentPage > 1){

      setcurrentPage(currentPage-1)
    }


  }


  return (
   <div>
   
    
     <div className=" mt-[110px] grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 m-auto gap-3 ">
      {
        slicedArr.map((ele,i)=>{
          return <div className="border-1 border-black rounded-lg flex flex-col gap-">
            <img className="bg-black " src={ele.thumbnail} alt="" />
            <h1 className=" flex justify-center bg-red-200 rounded-md p-10 h-[100px]">{ele.title}</h1>
            <h1 className=" flex justify-center bg-amber-200 rounded-md p-2">${ele.price}</h1>
            <button onClick={()=> ctx.addItems(ele)} className=" bg-blue-500 hover:bg-green-800 rounded-md p-2 text-sm "> Add to Cart</button>
          </div>
        })
      }

       </div>

     <div className="flex gap-2 justify-center my-4 ">
      {/* {

        btnArr.map((num,i)=>{
          return <button className=" bg-black text-white">
            {num}
          </button>

        })
      } */}
 <button onClick={handlePrev}  className=" bg-blue-600 p-2 rounded-md w-[60px] mt-4   "> Prev</button>
      {
        Array(totalBtn).fill('0').map((num,i)=>{
          return <button onClick={()=>setcurrentPage(i+1)} className={`${ currentPage===i+1 ? 'bg-blue-600' : 'bg-slate-500'} hover:bg-green-300 p-2 rounded-md w-[40px] mt-4 ` }>
            {i+1}
          </button>
        })
      }

      <button onClick={handleNext} className=" bg-blue-600 p-2 rounded-md w-[60px] mt-4  "> Next</button>
     </div>
       
   </div> 
  )
}

export default Home
