import { Container } from "./style";
import { NavBar } from "../../../components/NavBar";
import { Card } from "../../../components/card"
import { Footer } from "../../../components/footer"
import { useState } from "react";


export function Home() {

   const [totalAmount, setTotalAmount] = useState(0);

  const handleIncludeAmount = (amount) => {
    setTotalAmount((prevTotal) => prevTotal + amount);
  };

   return (

      <Container>

         <NavBar totalAmount={totalAmount} setTotalAmount={setTotalAmount}/>

         <main>

            <section>

               <img src="src/images/home/fruits.svg" alt="Frutas decorativas " />


               <div id="text">
                  <h5>Sabores inigualáveis</h5>
                  <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>

               </div>

            </section>

            


            <p className="category">Refeições</p>

            <div className="cards">



               <Card img="src/images/card/foods/salada.svg" food="Salada Ravanello >" description="A melhorzinha que ta tendo bb" price={"49,97"} onIncludeAmount={handleIncludeAmount}/>
               <Card img="src/images/card/foods/salada.svg" food="Salada Ravanello >" description="A melhorzinha que ta tendo bb" price={"49,97"} onIncludeAmount={handleIncludeAmount}/>
               <Card img="src/images/card/foods/salada.svg" food="Salada Ravanello >" description="A melhorzinha que ta tendo bb" price={"49,97"} onIncludeAmount={handleIncludeAmount}/>
               <Card img="src/images/card/foods/salada.svg" food="Salada Ravanello >" description="A melhorzinha que ta tendo bb" price={"49,97"} onIncludeAmount={handleIncludeAmount}/>
               <Card img="src/images/card/foods/salada.svg" food="Salada Ravanello >" description="A melhorzinha que ta tendo bb" price={"49,97"} onIncludeAmount={handleIncludeAmount}/>
               <Card img="src/images/card/foods/salada.svg" food="Salada Ravanello >" description="A melhorzinha que ta tendo bb" price={"49,97"} onIncludeAmount={handleIncludeAmount}/>




            </div>

            <p className="category">Sobremesas</p>

            <div className="cards">


               <Card img="src/images/card/foods/salada.svg" food="Salada Ravanello >" description="A melhorzinha que ta tendo bb" price={"49,97"} />
               <Card img="src/images/card/foods/salada.svg" food="Salada Ravanello >" description="A melhorzinha que ta tendo bb" price={"49,97"} />
               <Card img="src/images/card/foods/salada.svg" food="Salada Ravanello >" description="A melhorzinha que ta tendo bb" price={"49,97"} />
               <Card img="src/images/card/foods/salada.svg" food="Salada Ravanello >" description="A melhorzinha que ta tendo bb" price={"49,97"} />
               <Card img="src/images/card/foods/salada.svg" food="Salada Ravanello >" description="A melhorzinha que ta tendo bb" price={"49,97"} />
               <Card img="src/images/card/foods/salada.svg" food="Salada Ravanello >" description="A melhorzinha que ta tendo bb" price={"49,97"} />



            </div>

            <p className="category">Bebidas</p>

            <div className="cards">


               <Card img="src/images/card/foods/salada.svg" food="Salada Ravanello >" description="A melhorzinha que ta tendo bb" price={"49,97"} />
               <Card img="src/images/card/foods/salada.svg" food="Salada Ravanello >" description="A melhorzinha que ta tendo bb" price={"49,97"} />
               <Card img="src/images/card/foods/salada.svg" food="Salada Ravanello >" description="A melhorzinha que ta tendo bb" price={"49,97"} />
               <Card img="src/images/card/foods/salada.svg" food="Salada Ravanello >" description="A melhorzinha que ta tendo bb" price={"49,97"} />
               <Card img="src/images/card/foods/salada.svg" food="Salada Ravanello >" description="A melhorzinha que ta tendo bb" price={"49,97"} />
               <Card img="src/images/card/foods/salada.svg" food="Salada Ravanello >" description="A melhorzinha que ta tendo bb" price={"49,97"} />


            </div>



         </main>

         <Footer />




      </Container>
   )




}