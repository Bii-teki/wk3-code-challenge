


function fetchData() {
   
    let former = document.getElementById('new-film').addEventListener('submit', handleSubmit)
// adds an event to form
    function handleSubmit(e) {
// creates  an object  called  filmObj
        e.preventDefault()
        let filmObj ={
        id: e.target.id.value,
        title: e.target.title.value,
        runtime: e.target.runtime.value,
        capacity: e.target.capacity.value,
        showtime: e.target.showtime.value,
        tickets_sold: e.target.tickets_sold.value,
        description: e.target.description.value,    
        poster: e.target.poster.value
        
     }
   
     postFilm(filmObj)
    }
    // post function
     function postFilm(filmObj) {
        fetch('http://localhost:3000/films',{
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify(filmObj)
          
        })
        .then(res=>res.json)
        .then(films=>console.log(films))
    
    }
   
    // function to delete specific item in the list
    function deleteFilm(id) {
        
        fetch(`http://localhost:3000/films/${id}`,{
        method: 'delete',
        headers:{
            'Content-Type': 'application/json'
        }
        
    })

}


    fetch("http://localhost:3000/films")
     .then(response => response.json())
       // handle the response
     .then(json => getData(json))
     //  requesting data from the server

   
     function getData(films) {
           // forEach iterates through an array of names 
          films.forEach(char => {
            const main = document.getElementById("film-item");
            const p = document.createElement('p') 
            const bt = document.createElement('button') 
            bt.id =char.id
            bt.className= 'btn-danger'
            bt.textContent="Delete"
            bt.addEventListener('click', ()=>{
                main.remove()

                deleteFilm(char.id)
            })

            const bt1 = document.createElement('button') 
            bt1.id =char.id
            bt1.className= 'btn-danger'
            bt1.textContent="Edit"
            bt1.addEventListener('click', ()=>{              

                editFilm(char.id)
            })
            // we have create variable p and assign all the names in an array
            // we have created variable button and assigned all the id in an array
            p.textContent = char.title;
            p.id=char.id;
            p.addEventListener('click', displayFilmsDetails)
            //we have added an event to names and button where one can view films
            
            main.append(p);
            bt.id=char.id;      
            p.appendChild(bt)
            p.append(bt1)
     
          }); 

     
     }

function displayFilmsDetails(e) {
    // assign a variable to a value passed from an event
    const id = e.target.id
    fetchFilms(id)
}

function fetchFilms(id) {
    // fetch films using id
    fetch(`http://localhost:3000/films/${id}`)
    .then(response => response.json())
    // handle the response
    .then(json=> createFilm(json))
    //  requesting data from the server
    
}

function createFilm(films) {   
        //we create elements and assign values from fetch 
        const l2 =document.getElementById("film-details")
        const p1 = document.createElement('p')
        l2.innerHTML=films.title
        l2.append(p1)
        const l3 = document.getElementById("run");
        const p2 = document.createElement('p') 
        l3.innerHTML=films.runtime
        l3.append(p2)
        const l4 = document.getElementById("show");
        const p3 = document.createElement('p') 
        l4.innerHTML=films.showtime
        l4.append(p3)

        
        count = (films.capacity - films.tickets_sold) 
        const l6 = document.getElementById("sell");
        const p4 = document.createElement('p') 
        p4.innerHTML= count 
        l6.append(p4)
        p4.id= films.id
       
        p4.addEventListener('click',  ()=>{
            count = (films.capacity - films.tickets_sold) 
           //we callculate the available tickets
          // decrement the value by one and display sold
          
           counter = count-=1
           console.log(counter)
           p4.innerHTML= counter
           const sold = document.getElementById("sold");
      let title = document.createElement('p')
      title.innerHTML = "Sold";
      sold.append(title)


        })        
       
        

        const l5 = document.getElementById("available");
        const image = document.createElement('img') 
        image.src = films.poster
        l5.append(image)
       

   
}

  }


window.onload=fetchData